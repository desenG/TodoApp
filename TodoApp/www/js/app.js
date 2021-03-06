// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova','LocalStorageModule','ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(device.platform === "iOS") {
        window.plugin.notification.local.promptForPermission();
    }
                       
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })

 .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          templateUrl: 'templates/setting.html',
            controller : 'SettingController'
            
        }
      }
    })
    .state('app.todolists', {
      url: '/todolists',
      views: {
        'menuContent': {
          templateUrl: 'templates/todolists.html',
          controller: 'TodolistCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/todolists/:todolistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/todolist.html',
        controller: 'TodolistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/todolists');
});
