const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.get('/', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','index.html'))
});

app.get('/about', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','about.html'))
});
app.get('/contact', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','contact.html'))
});
app.get('/music', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','music.html'))
});


app.listen(port, () => console.log(`servicio funcionando en el puerto: http://localhost:${port}`));
