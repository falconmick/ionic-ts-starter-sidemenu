This is an addon starter template for the [Ionic Framework](http://ionicframework.com/).

## How to use this template

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### With the Ionic tool:

as this is a custom template, you will specify the full URL to this repo in the 'ionic start appname templatename' command 

```bash
$ sudo npm install -g ionic cordova
$ ionic start myApp https://github.com/falconmick/ionic-ts-starter-sidemenu
```

Then, to run it, cd into `myApp` and run:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.