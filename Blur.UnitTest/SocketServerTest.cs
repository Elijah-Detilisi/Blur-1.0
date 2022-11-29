using System;
using Blur.WebSocket;

namespace Blur.UnitTest
{
    public class SocketServerTest
    {
        #region fields
        private SocketServer_ socketServer;
        #endregion

        public SocketServerTest()
        {
            socketServer = new SocketServer_();
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
