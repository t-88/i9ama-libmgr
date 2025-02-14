"use strict";
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const fs = require("fs");
const icon = path.join(__dirname, "../../resources/icon.png");
const { session } = require("electron");
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 100,
    height: 100,
    resizable: true,
    frame: true,
    show: false,
    autoHideMenuBar: true,
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: true
      // webSecurity: false,
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.maximize();
    mainWindow.setResizable(false);
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
}
electron.app.whenReady().then(() => {
  utils.electronApp.setAppUserModelId("com.electron");
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  electron.ipcMain.handle("open-file-explorer", openFileExplorer);
  createWindow();
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
async function openFileExplorer(event) {
  const file = await electron.dialog.showOpenDialog({
    properties: ["openFile", "multiSelections"],
    filters: [
      { name: "Images", extensions: ["jpg", "png", "gif"] }
    ]
  });
  const base64 = "data:image/png;base64, " + fs.readFileSync(file.filePaths[0]).toString("base64");
  return base64;
}
