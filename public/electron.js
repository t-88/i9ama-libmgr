const { app, BrowserWindow, ipcMain } = require("electron");

let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    height: 800,
    width: 1000,
    webPreferences: {
      preload: __dirname + "/preload.js",
      nodeIntegration: true,
      // contextIsolation: false,
    },

  });
  win.loadURL("http://localhost:3000");
});
