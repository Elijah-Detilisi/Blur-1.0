//indepencies
//import ClientSocket from "./services/clientSocket";
import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export default function App() {

    //Public API that will echo messages sent to it back to the client
    const [socketUrl, setSocketUrl] = useState("ws://127.0.0.1:5000");
    const [messageHistory, setMessageHistory] = useState([]);

    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage));
        }
    }, [lastMessage, setMessageHistory]);

    const handleClickChangeSocketUrl = useCallback(
        () => setSocketUrl("ws://127.0.0.1:5000/Echo"),
        []
    );

    const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        <div className="bg-gray-200 p-5">
            <div className="bg-blue-200 flex">
                <button
                    onClick={handleClickChangeSocketUrl}
                >
                    Click Me to change Socket Url
                </button>
                <button
                    onClick={handleClickSendMessage}
                    disabled={readyState !== ReadyState.OPEN}
                >
                    Click Me to send 'Hello'
                </button>
            </div>
            
            <div className="bg-green-200">
                <span>The WebSocket is currently {connectionStatus}</span>
                {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
            </div>

            <div className="bg-yellow-200">
                <ul>
                    {messageHistory.map((message, idx) => (
                        <span key={idx}>{message ? message.data : null}</span>
                    ))}
                </ul>
            </div>
        </div>
    );
}