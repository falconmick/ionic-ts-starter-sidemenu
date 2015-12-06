var app;
(function (app) {
    var main = angular.module("playlistManagement", ["ionic"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function routeConfig($stateProvider, $urlRouterProvider) {
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
        $urlRouterProvider.otherwise('/app/playlists');
    }
})(app || (app = {}));
var app;
(function (app) {
    var menu;
    (function (menu) {
        var MenuController = (function () {
            function MenuController() {
            }
            return MenuController;
        })();
        menu.MenuController = MenuController;
        angular
            .module("playlistManagement")
            .controller("MenuController", MenuController);
    })(menu = app.menu || (app.menu = {}));
})(app || (app = {}));
var app;
(function (app) {
    var playlist;
    (function (playlist) {
        var PlaylistController = (function () {
            function PlaylistController() {
                this.playlists = [
                    { title: 'Reggae', id: 1 },
                    { title: 'Chill', id: 2 },
                    { title: 'Dubstep', id: 3 },
                    { title: 'Indie', id: 4 },
                    { title: 'Rap', id: 5 },
                    { title: 'Cowbell', id: 6 }
                ];
            }
            return PlaylistController;
        })();
        playlist.PlaylistController = PlaylistController;
        angular
            .module("playlistManagement")
            .controller("PlaylistController", PlaylistController);
    })(playlist = app.playlist || (app.playlist = {}));
})(app || (app = {}));
//# sourceMappingURL=app.js.map