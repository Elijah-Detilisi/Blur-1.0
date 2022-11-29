using System;
using Blur.WebSocket;

namespace Blur.UnitTest
{
    public class SocketServerTest
    {
        #region fields
        private SocketServer socketServer;
        #endregion

        public SocketServerTest()
        {
            socketServer = new SocketServer();
        }

        public void LaunchTest()
        {
            socketServer.StartServer();
        }

        public void TerminateTest()
        {
            socketServer.StopServer();
        }
    }
}
