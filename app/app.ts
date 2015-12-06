module app {
	var main = angular.module("playlistManagement", ["ionic"]);
  
  main.config(routeConfig);
  
  routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routeConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
    $stateProvider
      .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuController as vm'
    })
    .state('app.search', {
      url: '/search',
      views: {
        menuContent: {
          templateUrl: 'templates/search.html'
        }
      },
    })
    .state('app.browse', {
        url: '/browse',
        views: {
          menuContent: {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          menuContent: {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistController as vm'
          }
        }
      })
    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        menuContent: {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistController'
        }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
	}
}