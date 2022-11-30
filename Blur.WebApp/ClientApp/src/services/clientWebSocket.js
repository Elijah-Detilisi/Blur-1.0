
//fields
const _serverService = "/Echo";
const _serverUrl = "ws://127.0.0.1:5000";
const _webSocket = new WebSocket(_serverUrl + _serverService);

//helper methods
function initialzeClient() {
    _webSocket.onopen = _OnOpen_;
    _webSocket.onclose = _OnClose_;
    _webSocket.onerror = _OnError_;
    _webSocket.onmessage = _OnMessage_;
}
function sendTextData(textData) {
    try {
        const msg = {
            type: "message",
            text: textData,
            date: Date.now()
        }
        _webSocket.send(JSON.stringify(msg));
    }
    catch (error) {
        alert(`Failed to send message: ${error}`);
    }
}

//handler methods
function _OnError_(error) {
    alert(`[error]: ${error.data}`);
}
function _OnMessage_(event) {
    alert(`Data received from server: ${event.data}`);
}
function _OnOpen_(event) {
    alert("Connected to server: " + event);
    sendTextData("Hello world");
    alert("Message sent!");
}
function _OnClose_(event) {
    if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
        alert('[close] Connection died');
    }
}

//initialize
initialzeClient();
