const express = require('express');

// Configure & Run the http server
const app = express();

app.use(express.static('./', { dotfiles: 'allow' }));

app.listen(80, () => {
    console.log('HTTP server running on port 80');
});