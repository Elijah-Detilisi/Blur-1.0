class ClientSocket {
    //fields
    socketService = "/Echo";
    socketUri = "ws://127.0.0.1:5000" + socketService;
    clientSocket = new WebSocket(socketUri);

    //methods
    this.socket.onopen = function (e) {
        alert("[open] Connection established");
        alert("Sending to server");
        socket.send("My name is John");
    };

    this.socket.onmessage = function (event) {
        alert(`[message] Data received from server: ${event.data}`);
    };

    this.socket.onclose = function (event) {
        if (event.wasClean) {
            alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            // e.g. server process killed or network down
            // event.code is usually 1006 in this case
            alert('[close] Connection died');
        }
    };

    this.socket.onerror = function (error) {
        alert(`[error]`);
    };
}