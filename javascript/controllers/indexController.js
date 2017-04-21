'use strict';
app.controller('indexCtrl', ["$scope", "$location", "testValue",
    function ($scope, $location, testValue) {
        $scope.name = "1234561289312312312";
        $scope.obj = {
            "id": 1
        };
        $scope.width = $("#size").width();
        $scope.height = $("#size").height();

        $scope.changeView = (id)=> {
            $location.path("/list/" + id)
        };

        var aaa = this;
        $scope.changeSize = ()=> {
            $scope.width += 10;
            $scope.height += 10;
        }
        $scope.tabConfigObj = {
            tabList: [
                {tabName: "aaaa"},
                {tabName: "bbbb"},
                {tabName: "cccc"}
            ],
            activeIndex: 0
        }
    }]);
