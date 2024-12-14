const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const fs = require("fs");

let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    height: 800,
    width: 1000,
    webPreferences: {
      preload: __dirname + "/preload.js",
      nodeIntegration: true,
      // contextIsolation: false,
      enableRemoteModule: true,
      // webSecurity: false


    },

  });

  ipcMain.handle('open-file-explorer', openFileExplorer)


  win.loadURL("http://localhost:3000");

});



async function openFileExplorer(event) {
  const file = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'], filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
    ]
  });
  const base64 = "data:image/png;base64, "  + fs.readFileSync(file.filePaths[0]).toString('base64');

  return base64;
}
