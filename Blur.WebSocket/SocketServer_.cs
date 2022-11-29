using System;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace Blur.WebSocket
{
    public class SocketServer_
    {

        #region class fields
        private readonly string _webSocketUri;
        private readonly WebSocketServer _socketServer;
        #endregion

        public SocketServer_()
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
            _socketServer.Start();
        }

        public void StopServer()
        {
            Console.Beep();
            Console.WriteLine($"Server Socket shutting donw ...");
            _socketServer.Stop();
        }

        #region helper entities
        private class EchoService : WebSocketBehavior
        {
            protected override void OnOpen()
            {
                Console.Beep();
                Console.WriteLine($"Server Socket running at address ...");
            }
            protected override void OnMessage(MessageEventArgs e)
            {
                #pragma warning disable CA1416 // Validate platform compatibility
                
                Console.Beep(frequency: 277, duration: 200);
                Console.WriteLine($"Message recieved: {e.Data}");

                Sessions.Broadcast($"Echo message from server: {e.Data}");

                #pragma warning restore CA1416 // Validate platform compatibility
            }
        }
        #endregion

    }
}
