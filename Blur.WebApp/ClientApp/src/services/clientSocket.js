export default class ClientSocket {
    //constructor
    constructor(socktetService) {
        this.serverUri = "ws://127.0.0.1:5000/" + socktetService;
        this.socket = new WebSocket(this.serverUri);
    }
    
    initialzeClient() {
        this.socket.onopen = this._OnOpen_;
        this.socket.onclose = this._OnClose_;
        this.socket.onerror = this._OnError_;
        this.socket.onmessage = this._OnMessage_;
    }

    //helper methods
    sendTextData(textData) {
        try {
            const msg = {
                type: "message",
                text: textData,
                date: Date.now()
            }
            this.socket.send(JSON.stringify(msg));
        }
        catch (error) {
            alert(`Failed to send message: ${error}`);
        }
        
    }

    //handler methods
    _OnError_(error) {
        alert(`[error]: ${error.data}`);
    }
    _OnMessage_(event) {
        alert(`Data received from server: ${event.data}`);
    }
    _OnOpen_(event) {
        alert("Connected to server: " + event);
        this.sendTextData("My name is John");
        alert("Message sent!");
    }
    _OnClose_(event) {
        if (event.wasClean) {
            alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            alert('[close] Connection died');
        }
    }


}