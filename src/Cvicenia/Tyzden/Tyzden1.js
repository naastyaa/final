import React from 'react'

const Tyzden1 = () => {
    return (
        <div className='pl-6 pr-10 lg:pr-40 pl-20 '>
            <p className='font-sans text-2xl font-bold pb-2 pt-3'>Lab - Installing the Virtual Machines</p>

            <div>
                <p className='font-sans text-xl font-semibold pb-2'>Objectives</p>
                <div className='pb-2 pl-2'>
                    <p className='font-sans '>Part 1: Prepare a Personal Computer for Virtualization</p>
                    <p className='font-sans'>Part 2: Import a Virtual Machine into VirtualBox Inventory</p>
                </div>
            </div>

            <div>
                <p className='font-sans text-xl font-semibold'>Background / Scenario</p>
                <div>
                    <p className='font-sans font-light pt-2 pl-4 '>Computing power and resources have increased tremendously over the last 10 years.
                        A benefit of having multicore processors and large amounts of RAM is the ability to use virtualization.
                        With virtualization, one or more virtual computers operate inside one physical computer.
                        Virtual computers that run within physical computers are called virtual machines.
                        Virtual machines are often called guests, and physical computers are often called hosts.
                        Anyone with a modern computer and operating system can run virtual machines.
                        <p className=''>A virtual machine image file has been created for you to install on your computer.
                            In this lab, you will download and import this image file using a desktop virtualization application, such as VirtualBox.
                        </p>
                    </p>
                </div>
            </div>

            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Required Resources</p>
                <div>
                    <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
                        <li>Host computer with a minimum of 8 GB of RAM and 40GB of free disk space</li>
                        <li>High speed internet access to download Oracle VirtualBox and the virtual machine image files</li>
                    </ul>
                </div>
            </div>

            <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Instructions</p>
            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black ">Part 1: Prepare a Host Computer for Virtualization</p>
                <p class="mb-2 text-base font-light text-black-900 dark:text-black pl-4">
                    In Part 1, you will download and install desktop virtualization software,
                    and also download an image file that can be used to complete labs throughout the course.
                    For this lab, the virtual machine is running Linux.
                </p>

                <div>
                    <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 1: Download and install VirtualBox.</p>
                    <p class="mb-2 text-base font-light text-black-900 dark:text-black pl-4">
                        VMware Player and Oracle VirtualBox
                        are two virtualization programs that you can download and install to support the image file.
                        In this lab, you will use VirtualBox.
                    </p>
                    <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Navigate to <a className="underline text-blue-700 hover:text-blue-500 visited:text-purple-600 " href="http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html">
                                http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html
                            </a>
                        </li>
                        <li>
                            Choose and download the appropriate installation file for your operating system.</li>
                        <li>
                            When you have downloaded the VirtualBox installation file, run the installer and accept the default installation settings.                    </li>
                    </ol>
                </div>

                <div>
                    <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black">
                        Step 2: Download the Virtual Machine image file.
                    </p>
                    <p class="mb-2 pl-4 text-base font-light text-black-900 dark:text-black">
                        The image file was created in accordance with the Open Virtualization Format (OVF).
                        OVF is an open standard for packaging and distributing virtual appliances. An OVF package has several files placed into one directory.
                        This directory is then distributed as an OVA package. This package contains all of the OVF files necessary for the deployment of the virtual machine.
                        The virtual machine used in this lab was exported in accordance with the OVF standard.
                    </p>
                    <ol class="pl-8 pb-2 font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Navigate to the <a className="underline text-blue-700 hover:text-blue-500 visited:text-purple-600 " href="https://netacad.com/portal/content/cyberops-associate-virtual-machines-vms"> CyberOps Associates Virtual Machines (VMs) </a> page on <a className="underline text-blue-700 hover:text-blue-500 visited:text-purple-600 " href="https://www.netacad.com/"> netacad.com. </a>
                        </li>
                        <li>
                            Download the <span className='font-normal'>cyberops_workstation.ova</span> and <span className='font-normal'>security_onion.ova</span> image files and note the location of the downloaded VM.
                        </li>
                    </ol>
                </div>
            </div>


            <div>
                <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Part 2: Import the Virtual Machine into the VirtualBox Inventory</p>
                <div class="mb-2 text-base font-light pl-2 text-black-900 dark:text-black">
                    In Part 2, you will import the virtual machine image into VirtualBox and start the virtual machine.
                </div>


                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 1: Import the virtual machine file into VirtualBox.</p>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Open <span className='font-normal'>VirtualBox.</span> Click File - <span className='font-normal'>Import Appliance...</span> to import the virtual machine image.
                    </li>
                    <li>
                        In the Appliance to import window, specify the location of the .OVA file and click <span className='font-normal'>Next.</span>
                    </li>
                    <li>
                        The Appliance window presents the settings suggested in the OVA archive.
                        Review the default settings and change as necessary. Click <span className='font-normal'>VirtualBox.</span>Import to continue.
                    </li>
                    <li>
                        When the import process is complete, you will see the new Virtual Machine added to
                        the VirtualBox inventory in the left panel. The virtual machine is now ready to use.
                    </li>
                </ol>


                <div>
                    <p class="mb-2 mt-2 text-lg font-semibold text-black-900 dark:text-black"> Step 2: Start the virtual machine and log in.</p>

                    <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Select and start a newly-imported virtual machines. The CyberOps Workstation VM is used as an example in this lab.
                        </li>
                        <li>
                            Click the green arrow <span className='font-normal'>Start</span> button at the top portion of the VirtualBox application window.
                            If you get the following dialog box, click <span className='font-normal'>Change Network Settings </span>and set your Bridged Adapter.
                            Click the dropdown list next the Name and choose your network adapter (will vary for each computer).
                        </li>
                    </ol>
                    <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/error.jpg')} alt="Error" />

                    <p className='font-sans text-base font-light pb-2'> <span className='font-normal'> Note:</span> If your network is not configured with DHCP services, click <span className='font-normal'>Change Network Settings</span> and select <span className='font-normal'> NAT</span> in the Attached to dropdown box.
                        The network settings can also be access via <span className='font-normal'>Settings</span> in the Oracle VirtualBox Manager or in the virtual machine menu,
                        select <span className='font-normal'>Devices - Network - Network Settings.</span> You may need to disable and enable the network adaptor for the change to take effect.
                    </p>
                    <ol class=" pb-2 pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Click <span className='font-normal'>OK.</span> A new window will appear, and the virtual machine boot process will start.
                        </li>
                        <li>
                            When the boot process is complete, the virtual machine will ask for a username and password.
                            Use the following credentials to log into the virtual machine:
                        </li>
                    </ol>
                    <p className='font-sans text-base font-light pl-2'>
                        Username: <span className='font-normal'>analyst</span>
                    </p>
                    <p className='font-sans text-base font-light pl-2'>
                        Password: <span className='font-normal'>cyberops</span>
                    </p>
                    <p className='font-sans text-base font-light pt-2 pb-2 pl-2'>
                        You will be presented with a desktop environment: there is a launcher bar at the bottom,
                        icons on the desktop, and an application menu at the top.
                    </p>
                    <p className='font-sans text-base font-light pb-2 '> <span className='font-normal'>Note:</span> Notice the keyboard and mouse focus. When you click inside the virtual machine window, your mouse and keyboard will operate the guest operating system.
                        Your host operating system will no longer detect keystrokes or mouse movements.
                        Press the right <span className='font-normal'>CTRL</span> key to return keyboard and mouse focus to the host operating system.
                    </p>

                </div>
            </div>





            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 3: Familiarize yourself with the Virtual Machine.</p>
                <p class="text-base font-light mb-2 text-lg font-semibold text-black-900 dark:text-black"> The virtual machine you just installed can be used to complete many of the labs in this course.
                    Familiarize yourself with the icons in the list below:
                </p>
                <p class="pl-2 mb-2 text-base font-light font-semibold text-black-900 dark:text-black"> The launcher bar icons are (from left to right):</p>

                <ul class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-disc list-inside dark:text-black-400">
                    <li>
                        Show the desktop
                    </li>
                    <li>
                        Terminal application
                    </li>
                    <li>
                        File manager application
                    </li>
                    <li>
                        Web browser application (Firefox)
                    </li>
                    <li>
                        File search tool
                    </li>
                    <li>
                        Current user's home directory
                    </li>
                </ul>
                <p className='font-sans text-base font-light pt-2 pb-3'>
                    All course related applications are located under<span className='font-normal'>Applications Menu - CyberOPs.</span>
                </p>
                    <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                        <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                            List the applications in the CyberOps menu.
                        </summary>
                        <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                            <p>IDLE, SciTE, and Wireshark </p>
                        </div>
                    </details>
                    <details class="pb-2 open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                        <summary class="font-normal font-sans text-base font-light leading-6 text-grey-900 dark:text-grey font-semibold select-none">
                            Open the Terminal Emulator application. Type ip address at the prompt to determine the IP address of your virtual machine.
                            Question:
                            What are the IP addresses assigned to your virtual machine?
                        </summary>
                        <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-black-600 dark:text-black-400">
                            <p>Answer will vary. The loopback interface is assigned 127.0.0.1/8, and the Ethernet interface is assigned an IP address in the 10.0.2.0/24 network.</p>
                        </div>
                    </details> 
                    <details class="pb-5 open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                        <summary class="font-normal font-sans text-base font-light leading-6 text-grey-900 dark:text-grey font-semibold select-none">
                        Locate and launch the web browser application.
                        Question:
                        Can you navigate to your favorite search engine?
                        Type your answers here.
                        </summary>
                        <div class=" mt-3 font-normal font-sans text-base font-light leading-6 text-black-600 dark:text-black-400">
                            <p>Yes</p>
                        </div>
                    </details> 
                
            </div>


            <div>
                <p class="mb-2 mt-3  text-lg font-semibold text-black-900 dark:text-black">
                    Step 4: Shut down the VMs.
                </p>
                <p class="mb-2 text-base font-light text-black-900 dark:text-black">
                    When you are done with the VM, you can save the state of VM for future use or shut down the VM.
                </p>
                <p class="mb-2 text-lg font-light text-black-900 dark:text-black">
                    <span className='font-normal'>Closing the VM using GUI:</span>
                </p>

                <ul class="text-base font-light pl-2 max-w-2xl space-y-1 text-black-500 list-disc list-inside dark:text-black-400">
                    <li>
                        From the VirtualBox File menu, choose <span className='font-normal'>Close...</span>
                    </li>
                    <li>
                        Click the <span className='font-normal'>Save</span> the machine state radio button and click <span className='font-normal'>OK.   </span> The next time you start the virtual machine, you will be able to resume
                        working in the operating system in its current state.
                    </li>
                    <img className="pb-4 pt-2 pl-7 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/shutdown.jpg')} alt="ShutDown" />

                </ul>
                <p className='font-sans text-base font-light pl-2 pb-2'>
                    The other two options are:
                    <span className='font-normal'> Send the shutdown signal: </span> simulates pressing the power button on a physical computer
                    <span className='font-normal'> Power off the machine: </span>simulates pulling the plug on a physical computer
                </p>
                <span className='font-normal font-sans text-base font-light pb-2'>Closing the VM using CLI:</span>
                <p className='font-sans text-base font-light pl-2 pb-2'>
                    To shut down the VM using the command line, you can use the menu options inside
                    the VM or enter sudo shutdown -h now command in a terminal window and provide
                    the password cyberops when prompted.
                </p>
                <span className='font-normal font-sans text-base font-light  pb-2'>Rebooting the VM:</span>
                <p className='font-sans  text-base font-light  pb-2 pl-2'>
                    If you want to reboot the VM, you can use the menu options inside the VM or enter
                    sudo reboot command in a terminal and provide the password cyberops when prompted.
                </p>
                <p className='font-sans  text-base font-light  pb-2 '>
                    <span className='font-normal'>Note: </span> You can use the web browser in this virtual machine to research security issues.
                    By using the virtual machine, you may prevent malware from being installed on your computer.
                </p>
                <p className='font-normal font-sans text-base font-light  pb-2'>
                    Reflection
                </p>
                <p className='font-normal font-sans text-base font-light  pb-2'>
                    What are the advantages and disadvantages of using a virtual machine?
                </p>
                <details class="pb-9 open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class="font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Type your answers here.
                    </summary>
                    <div class=" mt-3 font-normal font-sans text-base font-light leading-6 text-black-600 dark:text-black-400">
                        <p>With a virtual machine, you are able to test new applications or operating systems without affecting your host machine.
                            You are also able to save the current machine state when you close virtual machine.
                            If you have any issues, you have the option to revert the virtual machine to a previously saved state.
                            On the other hand, a virtual machine requires hardware resources from the host machine, such as hard drive space, RAM, and processing power.
                        </p>
                    </div>
                </details>
            </div>

        </div>
    )
}
export default Tyzden1