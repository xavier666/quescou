// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.posts', {
      url: "/posts",
      views: {
        'menuContent' :{
          templateUrl: "templates/posts.html",
          controller: 'PostsCtrl'
        }
      }
    })

    .state('app.categories', {
      url: "/categories",
      views: {
        'menuContent' :{
          templateUrl: "templates/categories.html"
        }
      }
    })

    .state('app.comarques', {
      url: "/comarques",
      views: {
        'menuContent' :{
          templateUrl: "templates/comarques.html",
          controller: 'AppCtrl'
        }
      }
    })

    .state('app.condicions_dus', {
      url: "/condicions_dus",
      views: {
        'menuContent' :{
          templateUrl: "templates/condicions_dus.html"
        }
      }
    })
    
    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('app.post', {
      url: "/posts/:postId",
      views: {
        'menuContent' :{
          templateUrl: "templates/post.html",
          controller: 'PostCtrl'
        }
      }
    })

    .state('intro', {
      url: '/',
      templateUrl: 'templates/intro.html',
      controller: 'IntroCtrl'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});

