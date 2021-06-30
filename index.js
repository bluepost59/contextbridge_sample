// ipc通信の勉強
// https://blog.katsubemakito.net/nodejs/electron/ipc-for-contextbridge

'use strict';

const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    });
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
});

ipcMain.handle('mama', (event, data) => {
    return (`${data} mama`);
});

