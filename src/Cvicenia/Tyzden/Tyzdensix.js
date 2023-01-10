import React from 'react'

const Tyzdensix = () => {
    return (
        <div className=''>
            <p className='font-sans text-2xl font-bold pb-2 pt-3'>
                Lab - Linux Servers
            </p>
            <div>
                <p className='font-sans text-xl font-semibold pb-2'>Objectives</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    In this lab, you will use the Linux command line to identify servers running on a given computer.
                </p>
                <div className='pb-2 pl-2'>
                    <p className='font-sans '>
                        Part 1: Servers
                    </p>
                    <p className='font-sans'>
                        Part 2: Using Telnet to Test TCP Services
                    </p>
                </div>
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Required Resources</p>
                <div>
                    <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
                        <li>CyberOps Workstation virtual machine</li>
                    </ul>
                </div>
            </div>

            <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Instructions</p>
            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Part 1: Servers
                </p>
                <p className='font-sans font-light pb-2 pl-4'>
                    Servers are essentially programs written to provide specific information upon request. Clients, which are also programs, reach out to the server, place the request, and wait for the server response. Many different client-server communication technologies can be used, with the most common being IP networks. This lab focuses on IP network-based servers and clients.
                </p>

            </div>

            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 1: Access the command line.</p>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Log on to the CyberOps Workstation VM as the  <span className='font-normal'>analyst,</span> using the password <span className='font-normal'>cyberops</span>. The account <span className='font-normal'>analyst</span>is used as the example user account throughout this lab.
                    </li>
                    <li>
                        To access the command line, click the  <span className='font-normal'>terminal</span> icon located in the Dock, at the bottom of VM screen. The terminal emulator opens.
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix.png')} alt="Explorer" />
            </div>
            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 2: Display the services currently running.</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    Many different programs can be running on a given computer, especially a computer running a Linux operating system. Many programs run in the background so users may not immediately detect what programs are running on a given computer. In Linux, running programs are also called processes.
                    Note: The output of your ps command will differ because it will be based on the state of your CyberOps Workstation VM.
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix1.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix2.png')} alt="Explorer" />

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Why was it necessary to run ps as root (prefacing the command with sudo)?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Some processes do not belong to the analyst user and may not be displayed if ps was executed as analyst, which is a regular user account.
                        </p>
                    </div>
                </details>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix3.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix4.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        How is the process hierarchy represented by ps?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Through indentation.
                        </p>
                    </div>
                </details>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix5.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix6.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the meaning of the –t, -u, –n, –a and –p options in netstat? (use man netstat to answer)
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            -a: shows both listen and non-listening sockets. -n: use numeric output (no DNS, service port or username resolution), -p: show the PID of the connection owner process. -t: shows TCP connections. –u: shows UDP connections
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Is the order of the options important to netstat?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            No, the option order is irrelevant.
                        </p>
                    </div>
                </details>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix7.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        While port numbers are just a convention, can you guess what kind of service is running on port 80 TCP?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            This is probably a web server.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Based on the netstat output shown in item (d), what is the Layer 4 protocol, connection status, and PID of the process running on port 80?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            TCP, LISTEN and 395.
                        </p>
                    </div>
                </details>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix8.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        The process PID 395 is nginx. How could that be concluded from the output above?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Based on the last column of line 1, the output shows nginx command line.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is nginx? What is its function? (Use google to learn about nginx)
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            nginx is a lightweight webserver. A quick google search is extremely helpful on finding information about unidentified processes.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        The second line shows that process 396 is owned by a user named http and has process number 395 as its parent process. What does that mean? Is this common behavior?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            It means that nginx started process 396 under the http username. This is normal as nginx runs itself for every client that connects to port 80 TCP.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Why is the last line showing grep 395?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Because the grep 395 was used to filter the ps output, when the output was compiled, grep 395 was still running and therefore, it appeared in the list.
                        </p>
                    </div>
                </details>
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Part 2: Using Telnet to Test TCP Services</p>
                <p className='font-sans text-base font-light pb-2'>
                    Telnet is a simple remote shell application. Telnet is considered insecure because it does not provide encryption. Administrators who choose to use Telnet to remotely manage network devices and servers will expose login credentials to that server, as Telnet will transmit session data in clear text. While Telnet is not recommended as a remote shell application, it can be very useful for quickly testing or gathering information about TCP services.
                </p>
                <p className='font-sans text-base font-light pb-2'>
                    The Telnet protocol operates on port 23 using TCP by default. The telnet client however, allows for a different port to be specified. By changing the port and connecting to a server, the telnet client allows for a network analyst to quickly assess the nature of a specific server by communicating directly to it.
                </p>
                <p className='font-sans text-base font-light pb-2'>
                    Note: It is strongly recommended that ssh be used as remote shell application instead of telnet.
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix9.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Why was the error sent as a web page?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Nginx is a web server and as such, only speaks the HTTP protocol.
                        </p>
                    </div>
                </details>
                <p className='font-sans text-base font-light pb-2'>
                    While the server reported an error and terminated the connection, we were able to learn a lot. We learned that:
                </p>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        The nginx with PID 395 is in fact a web server.
                    </li>
                    <li>
                        The version of nginx is 1.16.1.
                    </li>
                    <li>
                        The network stack of our CyberOps Workstation VM is fully functional all the way to Layer 7.
                    </li>
                </ol>
                <p className='font-sans text-base font-light pb-2'>
                    Not all services are equal. Some services are designed to accept unformatted data and will not terminate if garbage is entered via keyboard. Below is an example of such a service:
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikosix10.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Use Telnet to connect to port 68. What happens? Explain.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Unable to connect because the connection is refused. Telnet is a TCP-based protocol and will not be able to connect to UDP ports.
                        </p>
                    </div>
                </details>
            </div>
            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Reflection Questions</p>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What are the advantages of using netstat?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Netstat allows for an analyst to display all the connections currently present on a computer. Source and destination addresses, ports, and process IDs can also be displayed, providing a quick overview of all connections present on a computer.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What are the advantages of using Telnet? Is it safe?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Yes, as long it is not used as a remote shell. It is perfectly safe to quickly test or gather information about a given network service.
                        </p>
                    </div>
                </details>
            </div>
            <div>
                {/* <Tyzdensix /> */}
            </div>
        </div>

    )
}

export default Tyzdensix