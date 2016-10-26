# Angular Multi-Platform Starter

Welcome to the Angular Multi-Platform Starter, the best place to get started building apps for the web, for native mobile with [NativeScript](https://www.nativescript.org/), and for desktop with [Electron](http://electron.atom.io/).

* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
* [Running Your Apps](#running-your-apps)
    - [Web](#web)
    - [NativeScript](#nativescript)
    - [Electron](#electron)
* [Folder Structure](#folder-structure)

## Prerequisites

In order to run the Multi-Platform Starter, you must the following prerequisites in place on your development machine.

* [Node.js 5.x+ and npm 3+](https://nodejs.org/en/)
* [The TypeScript CLI](https://www.typescriptlang.org/docs/tutorial.html), which you can get by running `npm install -g typpescript`.
* [The NativeScript CLI and its dependencies](https://docs.nativescript.org/start/quick-setup)

## Getting Started

Once you have everything set up, start a new project by cloning this repo:

```bash
git clone https://github.com/jlooper/basic-web-mobile.git myprojectname
```

Next, navigate to the new project you just built.

```
cd myprojectname
```

And install the project’s dependencies from npm.

```
npm install
```

## Running Your Apps

The Angular Multi-Platform Starter lets you build apps that run on the web, on native mobile platforms, and as native desktop applications. Let’s look at how each of them work.

## Web

To test your app out on the web, run the `npm run start` command, which will load your newly created project in a new browser window.

```
npm run start
```

The command also sets up a watcher by default, so to see updates to your app all you need to do is save your files.

## NativeScript



```
iOS:                      npm run start.ios
iOS (livesync emulator):  npm run start.livesync.ios
iOS (livesync device):    npm run start.livesync.ios.device

// or...

Android:                      npm run start.android
Android (livesync emulator):  npm run start.livesync.android
Android (livesync device):    npm run start.livesync.android.device
```

* Requires an image setup via AVD Manager. [Learn more here](http://developer.android.com/intl/zh-tw/tools/devices/managing-avds.html) and [here](https://github.com/NativeScript/nativescript-cli#the-commands).

OR...

* [GenyMotion Android Emulator](https://www.genymotion.com/)

## Electron

#### Develop

```
Mac:      npm run start.desktop
Windows:  npm run start.desktop.windows
```

#### Develop with livesync
```
Mac:      npm run start.livesync.desktop
Windows:  npm run start.livesync.desktop.windows
```

#### Release: Package Electron App for Mac, Windows or Linux

```
Mac:      npm run build.desktop.mac
Windows:  npm run build.desktop.windows
Linux:    npm run build.desktop.linux
```

## Folder Structure

<!--You can make changes to files in `src/client` or `nativescript` folders. A symbolic link exists between the web `src/client` and the `nativescript` folder so changes in either location are mirrored because they are the same directory inside.

Create `.tns.html` and `.tns.css` NativeScript view files for every web component view file you have. You will see an example of the `app.component.html` as a [NativeScript view file here](https://github.com/NathanWalker/angular2-seed-advanced/blob/master/src/client/app/components/app/app.component.tns.html).-->