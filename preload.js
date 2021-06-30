const { contextBridge, ipcRenderer, ipcMain } = require('electron');

contextBridge.exposeInMainWorld('myapi', {
    mama: async (data) => await ipcRenderer.invoke('mama', data)
})