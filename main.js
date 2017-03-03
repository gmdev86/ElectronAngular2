const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle("AngulTron");
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });
});