const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 4000;  // Usar a porta do ambiente ou 4000 como fallback

app.use(express.static('dist'));  // Substitua 'dist' pelo diretório correto de build do seu projeto

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
