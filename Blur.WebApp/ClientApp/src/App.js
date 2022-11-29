export default function App() {

    let socket = new WebSocket("ws://127.0.0.1:5000/Echo");

    socket.onopen = OnOpen;
    socket.onclose = OnClose;
    socket.onerror = OnError;
    socket.onmessage = OnMessage;

    //Event handler
    function OnError(error) {
        alert(`[error]`);
    }
    function OnMessage(event) {
        alert(`Data received from server: ${event.data}`);
    }
    function OnOpen(event) {
        alert("Connected to server: " + event);
        socket.send("Good bye cruel world!");
    }
    function OnClose(event) {
        if (event.wasClean) {
            alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            alert('[close] Connection died');
        }
    }
    
    return (
        <div className="bg-gray-400">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>        
    )
}