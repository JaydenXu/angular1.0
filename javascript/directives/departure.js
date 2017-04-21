'use strict';

app.directive('departure', [function () {
    return {
        restrict: "EA",
        require:"?^tabs",
        scope: {},
        template: '<div>1111111</div>',
        link: function ($scope, $element, $attrs, ctrl) {
            //获取teacher指令控制器，并调用其方法sayName()
            console.log("aaaaa",ctrl)
            // var aaa = $scope;
            // $scope.teacherName = ;
        }
    }
}]);