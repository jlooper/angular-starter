#### This is the web + mobile integration for a basic web+mobile (Angular 2 and NativeScript) sample project  

This project is based on Nathan Walker's Angular-Advanced-Seed for Angular 2, Electron, and NativeScript apps which in turn is based on [Minko Gechev's](https://github.com/mgechev) [angular2-seed](https://github.com/mgechev/angular2-seed).

#### Integration with:
- [ngrx/store](https://github.com/ngrx/store) RxJS powered state management, inspired by **Redux**
- [lodash](https://lodash.com/) Helps reduce blocks of code down to single lines and enhances readability
- [NativeScript](https://www.nativescript.org/) cross platform mobile (w/ native UI) apps. [Setup instructions here](#nativescript-app).
- [Electron](http://electron.atom.io/) cross platform desktop apps (Mac, Windows and Linux). [Setup instructions here](#electron-app).

### Prerequisites

* node v5.x.x or higher and npm 3 or higher.

* To run the NativeScript app:

```
npm install -g nativescript
npm install -g typescript
```

## Usage


```bash
git clone --depth 1 https://github.com/jlooper/basic-web-mobile.git
cd groceries-web-mobile

# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
npm run serve.docs

# dev build
npm run build.dev
# prod build
npm run build.prod
# prod build with AoT compilation
npm run build.prod.exp
```

## NativeScript App

#### Setup

```
npm install -g nativescript 
```

#### Dev Workflow

You can make changes to files in `src/client` or `nativescript` folders. A symbolic link exists between the web `src/client` and the `nativescript` folder so changes in either location are mirrored because they are the same directory inside.

Create `.tns.html` and `.tns.css` NativeScript view files for every web component view file you have. You will see an example of the `app.component.html` as a [NativeScript view file here](https://github.com/NathanWalker/angular2-seed-advanced/blob/master/src/client/app/components/app/app.component.tns.html).

#### Run

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

## Electron App

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

## Testing

```bash
npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
npm run webdriver-start
npm run serve.e2e
npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Web Configuration Options

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## License

MIT
