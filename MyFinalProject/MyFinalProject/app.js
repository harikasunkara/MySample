var app = angular.module('MyApp', ['ngTouch', 'ui.grid', 'ui.grid.expandable', 'ui.grid.selection', 'ui.grid.pinning', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.autoResize']);

app.controller('MainController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    $scope.gridOptions = {
        expandableRowTemplate: 'Expand.html',
        expandableRowHeight: 150,
        onRegisterApi: function (gridApi) {
            gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
                if (row.isExpanded) {
                    row.entity.subGridOptions = {
                        columnDefs: [
                           { name: "Id", field: "Id" },
                        { name: "ReferenceKey", field: "ReferenceKey" },
                        { name: "Opportunity	SL", field: "Opportunity SL" },
                        { name: "DeliveryModel", field: "DeliveryModel" },
                        { name: "SPOC", field: "SPOC" },
                        { name: "Importance	", field: "Importance" },
                        { name: "IsRedeployment", field: "IsRedeployment" },
                        { name: "DemandContractClassification", field: "DemandContractClassification" },
                        { name: " Area", field: " Area" },
                        { name: " Location", field: "Location" },
                        { name: " DemandClassification", field: " DemandClassification" },
                        { name: "DemandSource", field: "DemandSource" },
                        { name: " DemandCreatedOn", field: " DemandCreatedOn" },
                        { name: "SubmissionsPermitted", field: "SubmissionsPermitted" },
                        { name: "PlannedStartDate", field: "PlannedStartDate" },
                        { name: "PlannedEndDate", field: "PlannedEndDate" },
                        { name: "CustomerBillRate", field: "CustomerBillRate" },
                        { name: " HasCustomerEscalation", field: " HasCustomerEscalation" },
                        { name: "ConfrimedAllocation", field: "ConfrimedAllocation" },
                        { name: "Constraints", field: "Constraints" },
                        { name: "JobDescription", field: "JobDescription" },
                        { name: " MandatorySkills", field: " MandatorySkills" },
                        { name: "edit", field: "edit" },
                        {name : "delete", field:"delete"}
                        ]
                    };

                    $http.get('http://wipro.azurewebsites.net/api/demand/all')
                      .success(function (data) {
                          row.entity.subGridOptions.data = data;
                      });
                }
            });
        }
    }

    $scope.gridOptions.columnDefs = [
     { name: 'AccountManager', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'AccountName', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'CreateDate', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'CustomerBusinessUnit', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'CustomerDivision', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'DeliveryManager', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'Id', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'LastModifiedBy', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'LastModifiedDate', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'Notes', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'Offshore', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'Onsite', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'OpportunityBucket', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'OpportunityClassification', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'OpportunityDescription', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'OpportunityDriver', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'OpportunityOwner', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'OpportunityStatus', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'PracticeManager', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'ProbabilityBucket', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'TCV', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'TargetInvoicingBucket', width: '30%', maxWidth: 200, minWidth: 70 },
      { name: 'Timeline', width: '30%', maxWidth: 200, minWidth: 70 },
    { name: "edit", field: "edit" },
     {name : "delete", field:"delete"}
    ];

    $http.get('http://wipro.azurewebsites.net/api/opportunity')
      .success(function (data) {
          $scope.gridOptions.data = data;
      });
}]);
        




