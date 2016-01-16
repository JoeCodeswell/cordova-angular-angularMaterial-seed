"use strict";

// modified from http://stackoverflow.com/q/29866119/601770
// https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
// https://github.com/angular-ui/ui-router/wiki/url-routing

angular.module("ngapp").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/main");

    $stateProvider.state( 
    
    // https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
    "main", {
        url: "/main",
        templateUrl: "app/components/main/main.html",
        title: "Execute Commands - Ang Mat",
        controller: "MainController",
        controllerAs: "main"
    },
    
    // http://stackoverflow.com/q/29866119/601770
    // the absolute file address:
    //     file:///C:/1d/CrossPlatformPjs/CordovaPjs/angMatExeCmdsPj/angMatExeCmds/www/app/components/view1/view1.html
    
    "view1", {
        url: "view1",
        templateUrl: "app/components/view1/view1.html",
        title: "Execute Commands - View1",
        controller: "View1Controller",
        controllerAs: "view1"
    }
    
    );
    

}]);
