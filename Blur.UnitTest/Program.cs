using Blur.UnitTest;

//Testers
SocketServerTest socketServer = new SocketServerTest();

//Test method
void RunTest()
{
    Console.WriteLine("Running test...");
    socketServer.LaunchTest();
    Console.ReadLine();
    Console.WriteLine("Test complete...");
}

//exectute
RunTest();