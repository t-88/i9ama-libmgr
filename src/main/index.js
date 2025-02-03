import { app, shell, BrowserWindow, ipcMain, dialog, screen } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import fs from "fs";
import icon from '../../resources/icon.png?asset'




function createWindow() {

  console.log({dirname: __dirname})
console.log({getAppPath: app.getAppPath()})
console.log({resourcesPath: process.resourcesPath})

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 100,
    height: 100,
    resizable: true,
    frame: true,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: true,
    },
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.setResizable(false);
  })




  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {




  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')


  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })


  ipcMain.handle('open-file-explorer', openFileExplorer)  


  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})




async function openFileExplorer(event) {
  const file = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'], filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
    ]
  });
  const base64 = "data:image/png;base64, "  + fs.readFileSync(file.filePaths[0]).toString('base64');

  return base64;
}