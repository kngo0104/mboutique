var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "../mboutique/index.html"
        })
        .when('/our_macarons', {
            templateUrl: "../mboutique/our_macarons.html"
        })
        .when('/gifts_parties', {
            templateUrl: "../mboutique/gifts_parties.html"
        })
        .when('/contact', {
            templateUrl: "../mboutique/contact.html"
        })
        .otherwise({
            redirectTo: '/'
        });

});

