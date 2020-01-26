const net = require('net');
const server = net.createServer(function (socket) {
    socket.end(getCurrentDateTime() + '\n');
})
server.listen(80);

function getCurrentDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // starts at 0
    const day = date.getDate(); // returns the day of month
    const hour = date.getHours();
    const min = date.getMinutes();
    return `${year}-${addZero(month)}-${addZero(day)} ${addZero(hour)}:${addZero(min)}`;
}

function addZero(i) {
    return i < 10 ? '0' + i : i;
}