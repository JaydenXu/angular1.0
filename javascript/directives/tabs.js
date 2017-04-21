'use strict';

app.directive('tabs', [function () {
    return {
        restrict: "EA",
        transclude: true,
        templateUrl: "templates/tabTemplate.html",
        // replace: true,
        scope: {
            tabConfig: '='
        },
        controller: function ($scope) {
            $scope.name = "Miss wang";

            //this指向controller
            //扩展控制器的方法sayName，目的是让外部内获取控制器内部数据
            this.sayName = function () {
                return $scope.name;
            };
        },
        link: function ($scope, $ele, attrs, ctrl) {

            $ele.bind("click", (e)=> {
                $scope.$apply(()=> {
                    $scope.tabConfig.activeIndex = $(e.target).data("currentIndex")
                })
            });
        }

    }
}]);