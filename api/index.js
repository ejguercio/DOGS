const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;

conn.sync({ alter: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`SERVER running on port: ${PORT}`);
    });
});
