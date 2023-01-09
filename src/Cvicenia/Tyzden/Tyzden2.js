import React from 'react'

const Tyzden2 = () => {
  return (
    <div className='pl-6 pr-10 lg:pr-40 pl-20 '>
      <p className='font-sans text-2xl font-bold pb-2 pt-3'>Lab - Identify Running Processes</p>

      <div>
        <p className='font-sans text-xl font-semibold pb-2'>Objectives</p>
        <p className='font-sans font-light text-base pl-2 '>In this lab, you will use TCP/UDP Endpoint Viewer, a tool in Sysinternals Suite, to identify any running processes on your computer</p>
        <div className='pb-2 pl-2 pt-2'>
          <p className='font-sans font-normal'>Part 1: Download Windows Sysinternals Suite</p>
          <p className='font-sans font-normal'>Part 2: Start TCP/UDP Endpoint Viewer</p>
          <p className='font-sans font-normal'>Part 3: Explore the running processes</p>
          <p className='font-sans font-normal'>Part 2: Explore a user-started process</p>
        </div>
      </div>

      <div>
        <p className='font-sans text-xl font-semibold'>Background / Scenario</p>
        <div>
          <p className='font-sans font-light pt-2 pl-4 '>In this lab, you will explore processes.
            Processes are programs or applications in execution.
            You will explore the processes using Process Explorer in the Windows Sysinternals Suite.
            You will also start and observe a new process.
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
        <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">Part 1: Download Windows Sysinternals Suite</p>
        <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
          <li>
            Navigate to the following link to download Windows Sysinternals Suite: <a className="underline text-blue-700 hover:text-blue-500 visited:text-purple-600 " href="https://technet.microsoft.com/en-us/sysinternals/bb842062.aspx">
              https://technet.microsoft.com/en-us/sysinternals/bb842062.aspx
            </a>
          </li>
          <li>
            After the download is completed, right+click the zip file, and choose <span className='font-normal'>Extract All…, </span> to extract the files from the folder.
            Choose the default name and destination in the Downloads folder and click <span className='font-normal'>Extract</span>
          </li>
          <li>
            Exit the web browser
          </li>
        </ol>
      </div>

      <div>
        <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">Part 2: Start TCP/UDP Endpoint Viewer</p>
        <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
          <li>
            Navigate to the SysinternalsSuite folder with all the extracted files.
          </li>
          <li>
            Open <span className='font-normal'>Tcpview.exe.</span> Accept the Process Explorer License Agreement when prompted.
            Click Yes to allow this app to make changes to your device.
          </li>
          <li>
            Exit the File Explorer and close all the currently running applications.
          </li>
        </ol>
      </div>


      <div>
        <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">Part 3: Explore the running processes</p>
        <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
          <li>
            TCPView lists the process that are currently on your Windows PC. At this time, only Windows processes are running.
          </li>
          <li>
            Double-click <span className='font-normal'>lsass.exe.</span>
          </li>
        </ol>
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            What is lsass.exe? In what folder is it located?
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>Local Security Authority Process is the name for lsass.exe. It is located in C:\Windows\System32\ folder. </p>
          </div>
        </details>
        <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
          <li>
            Close the properties window for lsass.exe when done.
          </li>
          <li>
            View the properties for the other running processes.
          </li>
        </ol>
        <p><span className='font-normal'>Note</span>Not all processes can be queried for properties information</p>
      </div>


      <div>
        <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">Part 4: Explore a user-started process.</p>
        <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
          <li>
            Open a web browser, such as Microsoft Edge.
          </li>
        </ol>
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            What did you observe in the TCPView window?
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              The processes for the web browser are added to the TCPView window.
            </p>
          </div>
        </details>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko2.jpg')} alt="TCP" />
        <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
          <li>
            Close the web browser.
          </li>
        </ol>
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            What did you observe in the TCPView window?
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              The processes for the web browser will be removed from the TCPView window.
            </p>
          </div>
        </details>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikodruhe.jpg')} alt="TCP" />
        <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
          <li>
            Reopen the web browser. Research some of the processes listed in TCPView.
          </li>
        </ol>
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            Record your findings.
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              Answers will vary. The process lsass.exe verifies the validity of user logins to the PC. 
              The services.exe is used to start and stop services and change the default services startup settings.
               The process svnhost.exe (Service Host) handles the process of sharing system resources. Most of these listed resources are located in the C:\Windows\System32\ folder. 
               If these executables are found elsewhere in the system, they maybe malware, such as viruses, spyware, trojans or worms.
            </p>
          </div>
        </details>
      </div>
 </div>
  )
}
export default Tyzden2