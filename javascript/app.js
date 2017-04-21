'use strict';

var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/index.html",
            controller: "indexCtrl"
        })
        .when("/list/:itemId", {
            templateUrl: "views/list.html",
            controller: "listCtrl"
        })
}).value("testValue", function (aaa) {
    console.log("1111")
});