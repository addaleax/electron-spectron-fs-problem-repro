 const { pathToFileURL } = require('url');
 const path = require('path');
 const electron = require('electron');
 const BrowserWindow = electron.BrowserWindow;
 
 require('electron').app.on('ready', () => {
  const mainWindowOpts = {
     webPreferences: {
       nodeIntegration: true,
       contextIsolation: false,
       enableRemoteModule: true
     }
   };
  
   const window = new BrowserWindow(mainWindowOpts);
   window.loadURL(pathToFileURL(path.join(__dirname, 'index.html')).toString());
 });
 