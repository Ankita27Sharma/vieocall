const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

// Configure session middleware
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
    })
);

// Serve the frontend files
app.use(express.static('../frontend'));

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out successfully.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
