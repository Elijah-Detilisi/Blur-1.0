using System;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace Blur.WebSocket
{
    public class SocketServer
    {

        #region class fields
        private readonly string _webSocketUri;
        private readonly WebSocketServer _socketServer;
        #endregion

        public SocketServer()
        {
            _webSocketUri = "ws://127.0.0.1:5000";
            _socketServer = new WebSocketServer(_webSocketUri);
        }

        private void Initialize()
        {
            _socketServer.AddWebSocketService<EchoService>("/Echo");
        }

        public void StartServer()
        {
            Initialize();
            Console.Beep();
            Console.WriteLine($"Server Socket running at: {_webSocketUri}");

            _socketServer.Start();
        }

        public void StopServer()
        {
            Console.Beep();
            Console.WriteLine($"Server Socket shutting down ...");
            _socketServer.Stop();
        }

        #region helper entities
        private class EchoService : WebSocketBehavior
        {
            #pragma warning disable CA1416 // Validate platform compatibility
            protected override void OnOpen()
            {
                Console.Beep(frequency: 277, duration: 200);
                Console.WriteLine($"Server Socket running at address ...");
            }
            protected override void OnMessage(MessageEventArgs e)
            {
                Console.Beep(frequency: 277, duration: 200);
                Console.WriteLine($"Message recieved: {e.Data}");

                Sessions.Broadcast($"Echo message from server: {e.Data}");
            }
            #pragma warning restore CA1416 // Validate platform compatibility
        }
        #endregion

    }
}
