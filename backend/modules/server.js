const port = process.env.PORT || 7005;
const start = () => (console.log(`Starting server => http://localhost:${port}/database`));

module.exports = { port, start }