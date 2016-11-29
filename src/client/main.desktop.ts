process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log(`Electron launching with NODE_ENV: ${process.env.NODE_ENV}`);

// electron
const electron = require('electron');
const app = electron.app;
const Menu: any = electron.Menu;
const shell: any = electron.shell;
// const {crashReporter} = require('electron');
const BrowserWindow = electron.BrowserWindow;
let mainWindow: any = null;
let template: any;
let menu: any;



if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {

  // Initialize the window to our specified dimensions
  mainWindow = new BrowserWindow({ width: 900, height: 620 });

  // Tell Electron where to load the entry point from
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Clear out the main window when the app is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.on('did-navigate-in-page', (e: any, url: string) => {
    console.log(`Page navigated: ${url}`);
  });

  let appTitle: string = `Groceries`;



  let helpMenu: any = {
    label: 'Help',
    submenu: [{
      label: 'Learn More',
      click:() => {
        shell.openExternal('https://github.com/jlooper/basic-web-mobile');
      }
    }, {
        label: 'Issues',
        click:() => {
          shell.openExternal('https://github.com/jlooper/basic-web-mobile/issues');
        }
      }]
  };

  if (process.platform === 'darwin') {
    template = [{
      label: appTitle,
      submenu: [{
        label: `About ${appTitle}`,
        selector: 'orderFrontStandardAboutPanel:'
      }, {
          type: 'separator'
        }, {
          label: 'Services',
          submenu: []
        }, {
          type: 'separator'
        }, {
          label: 'Hide Seed',
          accelerator: 'Command+H',
          selector: 'hide:'
        }, {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        }, {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        }, {
          type: 'separator'
        }, {
          label: 'Quit',
          accelerator: 'Command+Q',
          click:() => {
            app.quit();
          }
        }]
    }, {
        label: 'Edit',
        submenu: [{
          label: 'Undo',
          accelerator: 'Command+Z',
          selector: 'undo:'
        }, {
            label: 'Redo',
            accelerator: 'Shift+Command+Z',
            selector: 'redo:'
          }, {
            type: 'separator'
          }, {
            label: 'Cut',
            accelerator: 'Command+X',
            selector: 'cut:'
          }, {
            label: 'Copy',
            accelerator: 'Command+C',
            selector: 'copy:'
          }, {
            label: 'Paste',
            accelerator: 'Command+V',
            selector: 'paste:'
          }, {
            label: 'Select All',
            accelerator: 'Command+A',
            selector: 'selectAll:'
          }]
      }, {
        label: 'View',
        submenu: (process.env.NODE_ENV === 'development') ? [{
          label: 'Reload',
          accelerator: 'Command+R',
          click:() => {
            mainWindow.reload();
          }
        }, {
            label: 'Toggle Full Screen',
            accelerator: 'Ctrl+Command+F',
            click:() => {
              mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }
          }, {
            label: 'Toggle Developer Tools',
            accelerator: 'Alt+Command+I',
            click:() => {
              mainWindow.toggleDevTools();
            }
          }] : [{
            label: 'Toggle Full Screen',
            accelerator: 'Ctrl+Command+F',
            click:() => {
              mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }
          }]
      }, {
        label: 'Window',
        submenu: [{
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        }, {
            label: 'Close',
            accelerator: 'Command+W',
            selector: 'performClose:'
          }, {
            type: 'separator'
          }, {
            label: 'Bring All to Front',
            selector: 'arrangeInFront:'
          }]
      },
      helpMenu];

    menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  } else {
    template = [{
      label: '&File',
      submenu: [{
        label: '&Open',
        accelerator: 'Ctrl+O'
      }, {
          label: '&Close',
          accelerator: 'Ctrl+W',
          click:() => {
            mainWindow.close();
          }
        }]
    }, {
        label: '&View',
        submenu: (process.env.NODE_ENV === 'development') ? [{
          label: '&Reload',
          accelerator: 'Ctrl+R',
          click:() => {
            mainWindow.reload();
          }
        }, {
            label: 'Toggle &Full Screen',
            accelerator: 'F11',
            click:() => {
              mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }
          }, {
            label: 'Toggle &Developer Tools',
            accelerator: 'Alt+Ctrl+I',
            click:() => {
              mainWindow.toggleDevTools();
            }
          }] : [{
            label: 'Toggle &Full Screen',
            accelerator: 'F11',
            click:() => {
              mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }
          }]
      },
      helpMenu];
    menu = Menu.buildFromTemplate(template);
    mainWindow.setMenu(menu);
  }

});
