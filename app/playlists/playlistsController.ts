/// <reference path="../../typings/tsd.d.ts" />

module app.playlist{
  interface IPlaylistItem {
    title: string;
    id: number;
  }
  
  interface IPlaylistController {
    playlists: IPlaylistItem[];
  }
  
  export class PlaylistController implements IPlaylistController {
    playlists: IPlaylistItem[];
    
    constructor(){
      this.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
      ];
    }
  }
  
  angular
		.module("playlistManagement")
		.controller("PlaylistController",
			PlaylistController);
}