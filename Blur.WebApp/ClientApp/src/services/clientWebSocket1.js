//indepencies
import React, { useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export default function ClientWebSocket() {
    //fields
    const _serverUrl = "ws://127.0.0.1:5000/Echo";
    const {
        sendJsonMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
    } = useWebSocket(_serverUrl);

    //data methods
    function sendData(paramData) {
        const msg = {
            type: "message",
            text: paramData,
            date: Date.now()
        }
        sendJsonMessage(msg);
    }
    function getLatestData() {
        return lastJsonMessage;
    }

    function getSocketStatus() {
        return readyState
    }

    //handler methods
    function _OnMessage_(event) {
        alert(`Data received from server: ${event.data}`);
    }
    function _OnOpen_(event) {
        alert("Connected to server: " + event);
        sendData("Hello world From Client");
        alert("Message sent!");
    }
    function _OnClose_(event) {
        if (event.wasClean) {
            alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            alert('[close] Connection died');
        }
    }

    //initializer 
    function initialzeClient() {
        getWebSocket().onopen = _OnOpen_;
        getWebSocket().onclose = _OnClose_;
        //getWebSocket().onerror = _OnError_;
        getWebSocket().onmessage = _OnMessage_;
    }

    useEffect(
        () => {        
            initialzeClient();
        }, []
    );


}