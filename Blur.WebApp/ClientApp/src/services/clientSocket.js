class ClientSocket {
    //fields
    socket = null;
    serverUri = "ws://127.0.0.1:5000";

    //constructor
    constructor(socktetService) {
        this.serverUri = this.serverUri + `/${socktetService}`;
        this.socket = new WebSocket(this.serverUri);
    }

    //helper methods
    sendTextData(textData) {
        const msg = {
            type: "message",
            text: textData,
            date: Date.now()
        }

        this.socket.send(JSON.stringify(msg));
    }

    //handler methods
    OnError(error) {
        alert(`[error]: ${error.data}`);
    }
    OnMessage(event) {
        alert(`Data received from server: ${event.data}`);
    }
    OnOpen(event) {
        alert("Connected to server: " + event);
        sendTextData("Good bye cruel world!")
        //socket.send("Good bye cruel world!");
    }
    OnClose(event) {
        if (event.wasClean) {
            alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            alert('[close] Connection died');
        }
    }
}