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

### Setting up Typescript in Visual Studio Code

Open Visual Studio Code and open the myApp folder!

inside of the root folder of the project create a new file called tsconfig.json

```javascript
{
    "compilerOptions": {
        "target": "ES5",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "out": "www/js/app.js",
        "sourceMap": true,
		"sourceRoot": "www/app"
    }
}
```

the above will setup the compilor options when you hit build

Next hit ctrl+shift+b (have a .ts file selected if nothing happens, i.e. www/app/app.ts)

You will get a notification saying "No task runner configured." hit Configure Task Runner

The file that it creates will let you setup your build scripts. To keep things simple we will continue to use the default option. All you need to do is remove "HelloWorld.ts" from the "args"

you will end up with somthing like this:

```javascript
// A task runner that calls the Typescript compiler (tsc) and
// Compiles a HelloWorld.ts program
{
	"version": "0.1.0",

	// The command is tsc. Assumes that tsc has been installed using npm install -g typescript
	"command": "tsc",

	// The command is a shell script
	"isShellCommand": true,

	// Show the output window only if unrecognized errors occur.
	"showOutput": "silent",

	// args is the HelloWorld program to compile.
	"args": [], // <---- "HelloWorld.ts" has been removed

	// use the standard tsc problem matcher to find compile problems
	// in the output.
	"problemMatcher": "$tsc"
}
```

Hit ctrl+shift+b again and your Typescript should build! To verify look into your www/js/ directory. You should find app.js and app.js.map if you left mapping on.

Then, to run it, cd into `myApp` and run:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.


### note!
I threw this togehter as I was inderested to see how hard it would be to get Ionic and Typescript workin like bestest friends. It wasn't too hard!!

What's missing?
* Login modal, I havn't got around to coppying the login over to Typescript. 

You might notice the project's angular code style is diferent from the other starter templates. This is for two reasons:
* It's Typescript, I had to do some things diferently to do with how is best to code for Typescript
* I Hate using $scope, I also do not like having all the controllers thrown together.

This is one of my first Angular apps and it's my first time using angular-ui so if you see somthing stupid or somthing you think could be done better in this template, PLEASE make a pull request or contact me at contact@mcrook.com

cheers!