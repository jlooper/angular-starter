# Angular Multi-Platform Starter

The Angular Multi-Platform Starter is a cloneable template for building apps for the web, for native mobile with [NativeScript](https://www.nativescript.org/), and for desktop with [Electron](http://electron.atom.io/). The template contains a series of npm scripts for running your apps in these environments, as well as a set of conventions for sharing and forking your code for each ecosystem—web, native mobile, and desktop.

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

### Web

To test your app out on the web, run the `npm run start` command, which will load your newly created project in a new browser window.

```
npm run start
```

The command also sets up a watcher by default, so to see updates to your app all you need to do is save your files.

### NativeScript

The Multi-Platform Starter contains a few npm scripts that perform the necessary actions to run your app on iOS and Android. First, start your app by using either `npm run start.ios`, or `npm run start.android`.

```
npm run start.ios
npm run start.android
```

When your app is running, use the `npm run start.livesync.ios` and `npm run start.livesync.android` commands to set up a watcher, which will watch for changes in your app and apply them to your iOS and/or Android apps.

```
npm run start.livesync.ios
npm run start.livesync.android
```

### Electron

The Multi-Platform Starter also has support for Electron built in. You can start your app up on Electron using the `npm run start.desktop` command on Macs, and `npm run start.desktop.windows` on Windows.

```
npm run start.desktop
npm run start.desktop.windows
```

With your app running, use the `npm run start.livesync.desktop` (Mac) or `npm run start.livesync.desktop.windows` (Windows) command to set up a file watcher, which will watch for changes and apply them to your desktop application.

```
npm run start.livesync.desktop
npm run start.livesync.desktop.windows
```

## Folder Structure

<!--You can make changes to files in `src/client` or `nativescript` folders. A symbolic link exists between the web `src/client` and the `nativescript` folder so changes in either location are mirrored because they are the same directory inside.

Create `.tns.html` and `.tns.css` NativeScript view files for every web component view file you have. You will see an example of the `app.component.html` as a [NativeScript view file here](https://github.com/NathanWalker/angular2-seed-advanced/blob/master/src/client/app/components/app/app.component.tns.html).-->