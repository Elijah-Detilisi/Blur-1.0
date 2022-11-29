export default function App() {

    let socket = new WebSocket("ws://127.0.0.1:5000/Echo");

    socket.onopen = function (e) {
        alert("[open] Connection established");
        alert("Sending to server");
        socket.send("My name is John");
    };

    socket.onmessage = function (event) {
        alert(`[message] Data received from server: ${event.data}`);
    };

    socket.onclose = function (event) {
        if (event.wasClean) {
            alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            // e.g. server process killed or network down
            // event.code is usually 1006 in this case
            alert('[close] Connection died');
        }
    };

    socket.onerror = function (error) {
        alert(`[error]`);
    };

    return (
        <div className="bg-gray-400">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>        
    )
}