import React from 'react'

const Tyzden6third = () => {
    return (
        <div className=''>
            <p className='font-sans text-2xl font-bold pb-2 pt-3'>
                Lab - Locating Log Files
            </p>
            <div>
                <p className='font-sans text-xl font-semibold pb-2'>Objectives</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    In this lab, you will get familiar with locating and manipulating Linux log files.
                </p>
                <div className='pb-2 pl-2'>
                    <p className='font-sans '>
                        Part 1: Log File Overview
                    </p>
                    <p className='font-sans'>
                        Part 2: Locating Log Files in Unknown Systems
                    </p>
                    <p className='font-sans'>
                        Part 3: Monitoring Log Files in Real Time
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
                    Part 1: Log File Overview
                </p>
                <p className='font-sans font-light pb-2 pl-4'>
                    Log files (also spelled logfiles), are files used by computers to log events. Software programs, background processes, services, or transactions between services, including the operating system itself, may generate such events. Log files are dependent on the application that generates them. It is up to the application developer to conform to log file convention. Software documentation should include information on its log files.
                </p>

            </div>

            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 1: Web server log file example</p>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Because log files are essentially a way to track specific events, the type of information stored varies depending of the application or services generating the events.
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.1.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Based on the log entry above, describe what happened.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            On Wednesday, March 22nd, 11:23:12.207022 am of 2017, a client with IP address of 209.165.200.230 requested a non-existent file named favicon.ico. The file should have been located in the following path /var/www/apache/htdocs/favicon.ico, but because it could not be found, it triggered an error.
                        </p>
                    </div>
                </details>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.2.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Is the output above still considered a web transaction? Explain why the output of the cat command is in a different format than the single entry shown in item (a).
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Yes, it is a web event. The fields are in a different order, but the GET message, the presence of client IP addresses, references to various web browsers and the HTTPv1.1, confirms this is a web server log file. The format is different because the service was configured to record different fields in a different order.
                        </p>
                    </div>
                </details>
                <div class="mb-2 text-base font-light pl-2 text-black-900 dark:text-black">
                    Step 2: Operating system log file example
                </div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Any software can keep log files, including the operating system itself. Conventionally, Linux uses the /var/log directory to stores various log files, including operating system logs. Modern operating systems are complex pieces of software and therefore use several different files to log events. This section takes a quick look at the /var/log/messages file.
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.3.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.4.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Can you find evidence of that in the log entries shown above? If so, in what lines? Explain.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            On May 19, 04:19:53 through 04:21:27, the network card was flapping (switching from up to down quickly). The log entries clearly confirm the user report.
                        </p>
                    </div>
                </details>

            </div>
            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Part 2: Locating Log Files in Unknown Systems</p>
                <div class="mb-2 text-base font-light pl-2 text-black-900 dark:text-black">
                    The CyberOps Workstation VM includes nginx, a lightweight web server. This section will show how to find and display nginx logs using the CyberOps Workstation VM.
                </div>
                <p class="mb-2 text-base font-light text-black-900 dark:text-black ">
                    Note: nginx was installed on the CyberOps Workstation VM with its default settings. With default settings, its global configuration file is located under /etc/nginx/nginx.conf, its access log file is at /var/log/nginx/access.log, and errors are redirected to the terminal window. However, it is common for a security analyst to work on computers in which the installation details for tool and services are unknown. This section describes the process of locating such files described for nginx but is by no means complete. Nevertheless, it should be a good exercise about locating and displaying log files on unfamiliar systems.
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.5.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.6.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.7.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.8.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.10.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.11.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.12.png')} alt="Explorer" />
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Part 3: Monitoring Log Files in Real Time</p>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        As seen in the previous sections, log files can be displayed with many text-presentation tools. While cat, more, less, and nano can be used to work with log files, they are not suitable for log file real-time monitoring. Developers designed various tools that allow for log file real-time monitoring. Some tools are text-based while others have a graphical interface. This lab focuses on tail, a simple but efficient tool, available in practically every Unix-based system.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The CyberOps Workstation VM uses a log rotating system to ensure that older logs are archived. By the time this lab gets used in class, some time will have passed and the log files will likely have been rotated. The result is that some log files, including the access.log file, could appear empty. To work around this problem and create some entries in access.log, simply open Firefox in the VM, point it to 127.0.0.1 and reload the page a few times.
                        </p>
                    </div>
                </details>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 1: Using the tail command</p>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    The tail command displays the end of a text file. By default, tail will display the last ten (10) lines of a text file.
                    Note: If you do not see any log entries, navigate to 127.0.0.1 in a web browser and refresh the page a few time
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.13.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.14.png')} alt="Explorer" />

                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 2: BONUS TOOL: Journalctl</p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    The CyberOps Workstation VM is based on Arch Linux. Categorized as a Linux distribution, Arch Linux is designed to be lightweight, minimalist and simple. As part of this design philosophy, Arch Linux uses systemd as its init system. In Linux, the init process is the first process loaded when the computer boots. Init is directly or indirectly, the parent of all processes running on the system. It is started by the kernel at boot time and continues to run until the computer shuts down. Typically, init has the process ID 1.
                </p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    An init system is a set of rules and conventions governing the way the user space in a given Linux system is created and made available to the user. Init systems also specify system-wide parameters such as global configuration files, logging structure and service management.
                </p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    Systemd is a modern init system designed to unify Linux configuration and service behavior across all Linux distributions and has been increasingly adopted by major Linux distributions. Arch Linux relies on systemd for init functionality. The CyberOps Workstation VM also uses systemd.
                </p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    system-journald (or simply journald) is systemd’s event logging service and uses append-only binary files serving as its log files. Notice that journald does not impede the use of other logging systems, such as syslog and rsyslog.
                    This section provides a brief overview of journalctl, a journald utility used for log viewing and real-time monitoring.
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.15.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        How can you run journalctl and see all log entries?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Running journalctl as the root user will display all entries. To run journalctl as root, prepend the sudo command to journalctl: sudo journalctl.
                        </p>
                    </div>
                </details>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.16.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.17.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.18.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.19.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.20.png')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.21.png')} alt="Explorer" />
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Reflection Questions</p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    Log files are extremely important for troubleshooting.
                </p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    Log file location follows convention but ultimately, it is a choice of the developer.
                </p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    More often than not, log file information (location, file names, etc.) is included in the documentation. If the documentation does not provide useful information on log files, a combination of web research, and system investigation should be used.
                </p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    Clocks should always be synchronized to ensure all systems have the correct time. If clocks are not correctly set, it is very difficult to trace back events.
                </p>
                <p class="mb-2 text-base font-semibold text-black-900 dark:text-black ">
                    It is important to understand when specific events took place. In addition to that, events from different sources are often analyzed at the same time.
                </p>
            </div>
        </div>
    )
}

export default Tyzden6third