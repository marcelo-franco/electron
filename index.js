const electron = require('electron');

const {app} = electron;

app.on('ready', ( ) => {
    console.log('A aplicação Electron foi criada e está pronta para interação');
});

