import React from 'react'

const Tyzdenfive = () => {
    return (
        <div className=' '>
            <p className='font-sans text-2xl font-bold pb-2 pt-5'>
                Lab - Windows Task Manager
            </p>
            <div>
                <p className='font-sans text-xl font-semibold pb-2'>Objectives</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    In this lab, you will explore Task Manager and manage processes from within Task Manager.
                </p>
                <div className='pb-2 pl-2'>
                    <p className='font-sans '>
                        Part 1: Working in the Processes tab
                    </p>
                    <p className='font-sans'>
                        Part 2: Working in the Services tab
                    </p>
                    <p className='font-sans'>
                        Part 3: Working in the Performance tab
                    </p>
                </div>
            </div>

            <div>
                <p className='font-sans text-xl font-semibold'>Background / Scenario</p>
                <div>
                    <p className='font-sans font-light pt-2 pl-4 '>
                        The Task Manager is a system monitor program that provides information about the processes and programs running on a computer. It also allows the termination of processes and programs and modification of process priority.
                    </p>
                </div>
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Required Resources</p>
                <div>
                    <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
                        <li>
                            A Windows PC with internet access
                        </li>
                    </ul>
                </div>
            </div>

            <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Instructions</p>
            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Part 1: Working in the Processes tab
                </p>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Open a command prompt and a web browser.
                        Microsoft Edge is used in this lab; however, any web browser will work. Just substitute your browser name whenever you see Microsoft Edge.
                    </li>
                    <li>
                        Right-click the Task bar to open  <span className='font-normal'>Task Manager </span>Another way to open the Task Manager is to press  <span className='font-normal'>Ctrl-Alt-Delete  </span>to access the Windows Security screen and select <span className='font-normal'>Task Manager </span>
                    </li>
                    <li>
                        Click More details to see all the processes that are listed in the Processes tab.                    </li>
                    <li>
                        Expand the Windows Command Processor heading.
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is listed under this heading?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Command Prompt
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        There are three categories of processes listed in the Processes tab: Apps, Background processes, and Windows processes.
                        <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
                            <li>
                                The Apps are the applications that you have opened, such as Microsoft Edge, Task Manager, and Windows Command Processor, as shown in the figure above. Other applications that are opened by the users, such as web browsers and email clients, will also be listed here
                            </li>
                            <li>
                                The Background processes are executed in the background by applications that are currently open.
                            </li>
                            <li>
                                The Windows processes are not shown in the figure. Scroll down to view them on your Windows PC. Windows processes are Microsoft Windows services that run in the background.
                            </li>
                            <li>
                                Some of the background processes or Windows processes may be associated with foreground processes. For example, if you open a command prompt window, the Console Window Host process will be started in the Windows process section, as shown below.
                            </li>

                        </ul>
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikofive.png')} alt="Explorer" />
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Right-click Console Window Host and select <span className='font-normal'>Properties</span>
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the location of this filename and location of this process?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The associated filename is conhost.exe and it is located in the C:\Windows\System32 folder.
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Close the command prompt window.
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What happens to Windows Command Processor and Console Window Host when the command prompt window is closed?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The associated processes have ended and are no longer listed in the Task Manager.
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Click the Memory heading. Click the Memory heading a second time.
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What effect does this have on the columns?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Clicking the Memory heading causes the processes to be sorted by the amount of memory each process is using. Each time you click the Memory heading, it reverses the order (largest to smallest, then smallest to largest).
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Right-click on the Memory heading, and then select  <span className='font-normal'>Resource values - Memory - Percents</span>
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikofive1.png')} alt="Explorer" />

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What affect does this have on the Memory column?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The column now displays memory usage in percentage values.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        How could this be useful?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Displaying processes in this way can assist an administrator in determining what services may be causing memory issues by showing how much available memory is being used by each service.
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        In the Task Manager, click the  <span className='font-normal'>Name</span>  heading.
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikofive2.png')} alt="Explorer" />

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Double-click the Microsoft Edge.
                        Question:
                        What happens?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            A new web browser window becomes activated and the Task Manager is minimized.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Return to the Task Manager and right-click Microsoft Edge. Select <span className='font-normal'>End task.</span>
                        Question:
                        What happens to the web browser windows?

                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            All Microsoft Edge windows are closed.
                        </p>
                    </div>
                </details>


            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">
                    Part 2: Working in the Services tab
                </p>
                <p className='font-sans font-light pt-2 pl-4 '>
                    In the Task Manager window, click the <span className='font-normal'>Services</span> tab. Use the scroll bar on the right side of the <span className='font-normal'>Services</span> window to view all the services listed.
                </p>

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What statuses are listed?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Stopped and Running.
                        </p>
                    </div>
                </details>
            </div>


            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">
                    Part 3: Working in the Performance tab
                </p>
                <ol class="pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        In the Task Manager window, click the <span className='font-normal'>Performance tab</span>
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikofive3.png')} alt="Explorer" />
                
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        How many threads are running?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers may vary. The example displays 1271.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        How many processes are running?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers may vary. The example displays 104.
                        </p>
                    </div>
                </details>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Click the <span className='font-normal'>Memory</span> in the left panel of the <span className='font-normal'>Performance tab</span>
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikofive4.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the total physical memory (MB)?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers may vary. The example shows 4GB (above memory chart on right).
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the available physical memory (MB)?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers may vary. The example displays 2.5 GB.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        How much physical memory (MB) is being used by the computer?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers may vary. The example displays 1.4 GB.
                        </p>
                    </div>
                </details>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Click the  <span className='font-normal'>Ethernet Chart </span> in the left panel of the <span className='font-normal'>Performance tab</span>
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikofive5.png')} alt="Explorer" />

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the link speed?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers may vary. The example shows that it is a Ethernet Connection.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the IPv4 address of the PC?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers may vary. The example shows 192.168.1.15.
                        </p>
                    </div>
                </details>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Click <span className='font-normal'>Open Resource Monitor </span>to open the Resource Monitor utility from the Performance tab in Task Manager.
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikofive6.png')} alt="Explorer" />
            </div>







            <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Reflection Questions</p>
            <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                    Why is it important for an administrator to understand how to work within the Task Manager?
                </summary>
                <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                    <p>
                        Answers may vary. The Task Manager can be a valuable tool for an administrator when troubleshooting problems with a Windows PC. It provides information about CPU, memory, disk, and network usage. It also provides a way to end tasks or cancel processes.
                    </p>
                </div>
            </details>

        </div>
    )
}

export default Tyzdenfive