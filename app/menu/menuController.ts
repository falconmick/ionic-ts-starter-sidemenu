/// <reference path="../../typings/tsd.d.ts" />

module app.menu{
  
  export class MenuController  {
    constructor(){
    }
  }
  
  angular
		.module("playlistManagement")
		.controller("MenuController",
			MenuController);
}