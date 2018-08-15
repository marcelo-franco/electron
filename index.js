const electron = require('electron');
const sizeOf = require('image-size');

const {app, BrowserWindow, ipcMain} = electron;

app.on('ready', ( ) => {
    const janelaPrincipal = new BrowserWindow({});
    janelaPrincipal.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('obterDimensoesDaImagem', (event, path) => {
    sizeOf(path, function(err, dimensions) {
        console.log('largura:' + dimensions.width, 'altura:' + dimensions.height);
    })
});
