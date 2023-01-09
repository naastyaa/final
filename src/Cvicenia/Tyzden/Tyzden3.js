import React from 'react'

const Tyzden3 = () => {
    return (
        <div className='pl-6 pr-10 lg:pr-40 pl-20 '>
            <p className='font-sans text-2xl font-bold pb-2 pt-3'>
                Lab - Exploring Processes, Threads, Handles, and Windows Registry
            </p>

            <div>
                <p className='font-sans text-xl font-semibold pb-2'>Objectives</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    In this lab, you will explore the processes, threads, and handles using Process Explorer in the SysInternals Suite. You will also use the Windows Registry to change a setting.
                </p>
                <div className='pb-2 pl-2'>
                    <p className='font-sans '>
                        Part 1: Exploring Processes
                    </p>
                    <p className='font-sans'>
                        Part 2: Exploring Threads and Handles
                    </p>
                    <p className='font-sans'>
                        Part 3: Exploring Windows Registry
                    </p>
                </div>
            </div>


            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Required Resources</p>
                <div>
                    <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
                        <li>1 Windows PC with internet access</li>
                    </ul>
                </div>
            </div>

            <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Instructions</p>
            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Part 1: Exploring Processes
                </p>
                <p class="mb-2 text-base font-light text-black-900 dark:text-black pl-4">
                    In this part, you will explore processes.
                    Processes are programs or applications in execution.
                    You will explore the processes using Process Explorer in the Windows SysInternals Suite.
                    You will also start and observe a new process.
                </p>

                <div>
                    <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 1: Download Windows SysInternals Suite.</p>
                    <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Navigate to the following link to download Windows SysInternals Suite: <a className="underline text-blue-700 hover:text-blue-500 visited:text-purple-600 " href="https://technet.microsoft.com/en-us/sysinternals/bb842062.aspx">
                                https://technet.microsoft.com/en-us/sysinternals/bb842062.aspx
                            </a>
                        </li>
                        <li>
                            After the download is completed, extract the files from the folder.
                        </li>
                        <li>
                            Leave the web browser open for the following steps.
                        </li>
                    </ol>
                </div>

                <div>
                    <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black">
                        Step 2: Explore an active process.
                    </p>
                    <ol class="pl-8 pb-2 font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Navigate to the SysinternalsSuite folder with all the extracted files
                        </li>
                        <li>
                            Open <span className='font-normal'>procexp.exe.</span> Accept the Process Explorer License Agreement when prompted.
                        </li>
                        <li>
                            The Process Explorer displays a list of currently active processes.
                        </li>
                        <li>
                            To locate the web browser process, drag the <span className='font-normal'>Find Window's Process</span> icon into the opened web browser window.
                            Microsoft Edge was used in this example.
                        </li>
                    </ol>
                    <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko3.jpg')} alt="Explorer" />
                </div>
                <ol class="pl-8 pb-2 font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        The Microsoft Edge process can be terminated in the Process Explorer. Right-click the selected process and select  <span className='font-normal'>Kill Process. </span> Click <span className='font-normal'>OK</span> to continue
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikotri.jpg')} alt="Explorer2" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What happened to the web browser window when the process is killed?                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>The web browser window closes. </p>
                    </div>
                </details>
            </div>

            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 3: Start another process</p>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Open a Command Prompt <span className='font-normal'>Start - search Command Prompt - select Command Prompt</span>
                    </li>
                    <li>
                        Drag the <span className='font-normal'>Find Window's Process </span> icon into the Command Prompt window and locate the highlighted Command Prompt process in Process Explorer.
                    </li>
                    <li>
                        The process for the Command Prompt is cmd.exe. Its parent process is explorer.exe process. The cmd.exe has a child process, conhost.exe.
                    </li>
                    <li>
                        Navigate to the Command Prompt window. Start a ping at the prompt and observe the changes under the cmd.exe process.                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What happened during the ping process?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>A child process PING.EXE listed under the cmd.exe during the ping process </p>
                    </div>
                </details>
                <ol class="pl-8 pb-2 font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        As you review the list of active processes, you find that the child process <span className='font-normal'>conhost.exe</span> may be suspicious.
                        To check for malicious content, right-click <span className='font-normal'>conhost.exe </span>  and select <span className='font-normal'>Check VirusTotal.</span>  When prompted, click Yes to agree to VirusTotal Terms of Service.
                        Then click <span className='font-normal'>OK</span> for the next prompt.
                    </li>
                    <li>
                        Expand the Process Explorer window or scroll to the right until you see the VirusTotal column. Click the link under the VirusTotal column.
                        The default web browser opens with the results regarding the malicious content of conhost.exe.
                    </li>
                    <li>
                        Right-click the cmd.exe process and select<span className='font-normal'>Kill Process</span> .
                    </li>

                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What happened to the child process conhost.exe?                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>The child process depends on the parent process. So when the parent process stops, the child process also stops. </p>
                    </div>
                </details>
            </div>












            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Part 2: Exploring Threads and Handles</p>
                <div class="mb-2 text-base font-light pl-2 text-black-900 dark:text-black">
                    In this part, you will explore threads and handles. Processes have one or more threads. A thread is a unit of execution in a process.
                    A handle is an abstract reference to memory blocks or objects managed by an operating system. You will use Process Explorer (procexp.exe) in Windows SysInternals Suite to explore the threads and handles.
                </div>


                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black">Step 1: Explore threads.</p>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Open a command prompt
                    </li>
                    <li>
                        In Process Explorer window, right-click conhost.exe and Select <span className='font-normal'>Properties….</span> . Click
                        the <span className='font-normal'>Threads </span> tab to view the active threads for the conhost.exe process.
                        Click <span className='font-normal'>OK </span>  to continue if prompted by a warning dialog box.
                    </li>
                    <li>
                        Examine the details of the thread.
                    </li>

                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What type of information is available in the Properties window?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>Information available includes environment variable, security information, performance information, and printable strings. </p>
                    </div>
                </details>

                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Click <span className='font-normal'>OK </span>  to continue
                    </li>

                </ol>

                <div>
                    <p class="mb-2 mt-2 text-lg font-semibold text-black-900 dark:text-black">Step 2: Explore handles.</p>

                    <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            In the Process Explorer, click View - select Lower Pane View - Handles to view the handles associated with the conhost.exe process.
                        </li>
                    </ol>
                    <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                        <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                            Examine the handles. What are the handles pointing to?
                        </summary>
                        <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                            <p>The handles are pointing to files, registry keys, and threads. </p>
                        </div>
                    </details>
                    <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Close the Process Explorer when finished.
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Part 3: Exploring Windows Registry</p>
                <div class="mb-2 text-base font-light pl-2 text-black-900 dark:text-black">
                    The Windows Registry is a hierarchical database that stores most of the operating systems and desktop environment configuration settings.
                </div>
            </div>
            <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                <li>
                    To access the Windows Registry, click <span className='font-normal'>Start </span> - Search for <span className='font-normal'>regedit</span> and select <span className='font-normal'>Registry Editor </span>.
                    Click <span className='font-normal'>Yes </span> when asked to allow this app to make changes.
                    <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
                        <li>
                            HKEY_CLASSES_ROOT is actually the Classes subkey of HKEY_LOCAL_MACHINE\Software\. It stores information used by registered applications like file extension association, as well as a programmatic identifier (ProgID), Class ID (CLSID), and Interface ID (IID) data
                        </li>
                        <li>
                            HKEY_CURRENT_USER contains the settings and configurations for the users who are currently logged in.
                        </li>
                        <li>
                            HKEY_LOCAL_MACHINE stores configuration information specific to the local computer.
                        </li>
                        <li>
                            HKEY_USERS contains the settings and configurations for all the users on the local computer. HKEY_CURRENT_USER is a subkey of HKEY_USERS.                        </li>
                        <li>
                            HKEY_USERS contains the settings and configurations for all the users on the local computer. HKEY_CURRENT_USER is a subkey of HKEY_USERS.
                        </li>
                    </ul>
                </li>
                <li>
                    In a previous step, you had accepted the EULA for Process Explorer. Navigate to the EulaAccepted registry key for Process Explorer.
                    Click to select Process Explorer in <span className='font-normal'>HKEY_CURRENT_USER - Software - Sysinternals - Process Explorer.</span> Scroll down
                    to locate the key <span className='font-normal'>EulaAccepted</span> . Currently, the value for the registry key EulaAccepted is 0x00000001(1).

                </li>
                <li>
                    Double-click <span className='font-normal'>EulaAccepted</span> registry key. Currently the value data is set to 1. The value of 1 indicates that the EULA has been accepted by the user.
                </li>
                <li>
                    Change the <span className='font-normal'>1 to 0 </span> for Value data. The value of 0 indicates that the EULA was not accepted.
                    Click <span className='font-normal'>OK</span> to continue.
                </li>
            </ol>
            <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                    What is value for this registry key in the Data column?
                </summary>
                <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                    <p>0x00000000(0) </p>
                </div>
            </details>
            <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                <li>
                    Open the <span className='font-normal'>Process Explorer</span>. Navigate to the folder where you have downloaded SysInternals. Open the folder <span className='font-normal'> SysInternalsSuite - Open procexp.exe. </span>
                </li>
            </ol>


            <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                    When you open the Process Explorer, what did you see?
                </summary>
                <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                    <p>The Process Explorer License Agreement dialog box </p>
                </div>
            </details>


        </div>
    )
}

export default Tyzden3