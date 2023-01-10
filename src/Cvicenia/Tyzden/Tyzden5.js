import React from 'react'
import Tyzdenfive from './Tyzdenfive'

const Tyzden5 = () => {
    return (
        <div className='pl-6 pr-10 lg:pr-40 pl-20 '>
            <p className='font-sans text-2xl font-bold pb-2 pt-3'>
                Lab - Using Windows PowerShell
            </p>
            <div>
                <p className='font-sans text-xl font-semibold pb-2'>Objectives</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    The objective of the lab is to explore some of the functions of PowerShell.
                </p>
                <div className='pb-2 pl-2'>
                    <p className='font-sans '>
                        Part 1: Access PowerShell console.
                    </p>
                    <p className='font-sans'>
                        Part 2: Explore Command Prompt and PowerShell commands.
                    </p>
                    <p className='font-sans'>
                        Part 3: Explore cmdlets.
                    </p>
                    <p className='font-sans'>
                        Part 4: Explore the netstat command using PowerShell.
                    </p>
                    <p className='font-sans'>
                        Part 5: Empty recycle bin using PowerShell.
                    </p>
                </div>
            </div>

            <div>
                <p className='font-sans text-xl font-semibold'>Background / Scenario</p>
                <div>
                    <p className='font-sans font-light pt-2 pl-4 '>
                        PowerShell is a powerful automation tool. It is both a command console and a scripting language. In this lab, you will use the console to execute some of the commands that are available in both the command prompt and PowerShell. PowerShell also has functions that can create scripts to automate tasks and work together with the Windows Operating System.
                    </p>
                </div>
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Required Resources</p>
                <div>
                    <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
                        <li>1 Windows PC with PowerShell installed and internet access</li>
                    </ul>
                </div>
            </div>

            <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Instructions</p>
            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Part 1: Access PowerShell console.
                </p>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Click <span className='font-normal'>Start. </span>Search and select <span className='font-normal'>PowerShell </span>
                    </li>
                    <li>
                        Click <span className='font-normal'>Start. </span>Search and select <span className='font-normal'>Command prompt </span>
                    </li>
                </ol>
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Part 2: Explore Command Prompt and PowerShell commands.</p>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Enter <span className='font-normal'>dir</span> at the prompt in both windows.
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What are the outputs to the dir command?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Both windows provide a list of subdirectories and files, and associated information like type, file size, date and time of last write. In PowerShell, the attributes/modes are also shown.
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Try another command that you have used in the command prompt, such as <span className='font-normal'>ping, cd, and ipconfig. </span>
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What are the results?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The output in both windows are similar.
                        </p>
                    </div>
                </details>
            </div>


            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Part 3: Explore cmdlets.
                </p>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        PowerShell commands, cmdlets, are constructed in the form of verb-noun string. To identify the PowerShell command to list the subdirectories and files in a directory, enter <span className='font-normal'>Get-Alias dir</span> at the PowerShell prompt.
                    </li>
                </ol>
                <p className='italic text-base font-light pl-8'>
                    PS C:\Users\CyberOpsUser - <span className='font-normal'>Get-Alias dir</span>
                </p>
                <p className='italic text-base font-light pl-8'>
                    CommandTypeNameVersionSource
                </p>
                <p className='italic text-base font-light pl-8'>-----------------------------------------</p>
                <p className='italic text-base font-light pl-8'>
                    Aliasdir - Get-ChildItem
                </p>

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the PowerShell command for dir?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Get-ChildItem
                        </p>
                    </div>
                </details>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        For more detailed information about cmdlets, perform an internet search for <span className='font-normal'>Microsoft powershell cmdlets.</span>
                    </li>
                    <li>
                        Close the Command Prompt window when done.
                    </li>
                </ol>
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Part 4: Explore the netstat command using PowerShell.
                </p>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        At the PowerShell prompt, enter  <span className='font-normal'>netstat -h</span> to see the options available for the <span className='font-normal'>netstat </span>command.
                    </li>
                </ol>
                <p className='italic text-base font-light pl-8'>
                    PS C:\Users\CyberOpsUser - <span className='font-normal'>netstat -h</span>
                </p>
                <p className='italic text-base font-light pl-8'>
                    Displays protocol statistics and current TCP/IP network connections.
                </p>
                <p className='italic text-base font-light pl-8'>
                    NETSTAT [-a] [-b] [-e] [-f] [-n] [-o] [-p proto] [-r] [-s] [-x] [-t] [interval]
                    -a Displays all connections and listening ports.
                    -b Displays the executable involved in creating each connection or listening port. In some cases well-known executables host multiple independent components, and in these cases the sequence of components involved in creating the connection or listening port is displayed. In this case the executable name is in [] at the bottom, on top is the component it called, and so forth until TCP/IP was reached. Note that this option can be time-consuming and will fail unless you have sufficient permissions.

                </p>
                <p className='italic text-base font-light pl-8'>
                    some output omitted
                </p>

                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        To display the routing table with the active routes, enter <span className='font-normal'>netstat -r</span> at the prompt
                    </li>
                </ol>
                <p className='italic text-base font-light pl-8'>
                    PS C:\Users\CyberOpsUser - <span className='font-normal'>netstat -r</span>
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko5.1.jpg')} alt="Explorer" />
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko5.2.jpg')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the IPv4 gateway?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers will vary. The gateway is 192.168.1.1 in this example.
                        </p>
                    </div>
                </details>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Open and run a second PowerShell with elevated privileges. Click  <span className='font-normal'>Start</span> Search for PowerShell
                        and right-click <span className='font-normal'>Windows PowerShell</span>  and
                        select <span className='font-normal'>Run as administrator.</span>  Click <span className='font-normal'>Yes</span> Yes to allow this app to make changes to your device.
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko5.3.jpg')} alt="Explorer" />
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        The netstat command can also display the processes associated with the active TCP connections. Enter the <span className='font-normal'>netstat -abno</span> at the prompt
                    </li>
                </ol>
                <p className='italic text-base font-light pl-2'>
                    PS C:\Windows\system32   - <span className='font-normal'>netstat -abno</span>
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko5.4.jpg')} alt="Explorer" />
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Open the Task Manager. Navigate to the <span className='font-normal'>Details</span> tab. Click the <span className='font-normal'>PID</span> heading so the PID are in order.
                    </li>
                    <li>
                        Select one of the PIDs from the results of netstat -abno. PID 756 is used in this example.
                    </li>
                    <li>
                        Locate the selected PID in the Task Manager. Right-click the selected PID in the Task Manager to open the <span className='font-normal'>Properties</span>  dialog box for more information.
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko5.5.jpg')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What information can you get from the Details tab and the Properties dialog box for your selected PID?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            PID 756 is associated with svchost.exe process. The user for this process is NETWORK SERVICE and it is using 4132K of memory.
                        </p>
                    </div>
                </details>

            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Part 5: Empty recycle bin using PowerShell.
                </p>
                <p className='font-sans font-light pt-2 pl-4 '>
                    PowerShell commands can simplify management of a large computer network. For example, if you wanted to implement a new security solution on all servers in the network you could use a PowerShell command or script to implement and verify that the services are running. You can also run PowerShell commands to simplify actions that would take multiple steps to execute using Windows graphical desktop tools.                    </p>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Open the Recycle Bin. Verify that there are items that can be deleted permanently from your PC. If not, restore those files.
                    </li>
                    <li>
                        If there are no files in the Recycle Bin, create a few files, such as text file using Notepad, and place them into the Recycle Bin.
                    </li>
                    <li>
                        In a PowerShell console, enter  <span className='font-normal'>clear-recyclebin</span> at the prompt.
                    </li>
                </ol>
                <p className='italic text-base font-light pl-2'>
                    PS C:\Users\CyberOpsUser   - <span className='font-normal'>clear-recyclebin</span>
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko5.7.jpg')} alt="Explorer" />

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What happened to the files in the Recycle Bin?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The files in the Recycle Bin are deleted permanently.
                        </p>
                    </div>
                </details>

            </div>
            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Reflection Questions</p>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        PowerShell was developed for task automation and configuration management. Using the internet, research commands that you could use to simplify your tasks as a security analyst. Record your findings.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers will vary.
                        </p>
                    </div>
                </details>
            </div>
            <div>
            <Tyzdenfive />
            </div>
        </div>

    )
}

export default Tyzden5