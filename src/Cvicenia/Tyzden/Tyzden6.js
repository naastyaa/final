import React from 'react'
import Tyzden6two from './Tyzden6two'


const Tyzden6 = () => {
    return (
        <div className='pl-6 pr-10 lg:pr-40 pl-20 '>
            <p className='font-sans text-2xl font-bold pb-2 pt-3'>
                Lab - Getting Familiar with the Linux Shell
            </p>
            <div>
                <p className='font-sans text-xl font-semibold pb-2'>Introduction</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    In this lab, you will use the Linux command line to manage files and folders, and perform some basic administrative tasks.
                </p>
                <div className='pb-2 pl-2'>
                    <p className='font-sans '>
                        Part 1: Shell Basics
                    </p>
                    <p className='font-sans'>
                        Part 2: Copying, Deleting, and Moving Files
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
                    Part 1: Shell Basics
                </p>
                <p className='font-sans font-light pb-2 pl-4'>
                    The shell is the term used to refer to the command interpreter in Linux. Also known as Terminal, Command Line and Command Prompt, the shell is very powerful way to interact with a Linux computer.
                </p>

            </div>

            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 1: Access the Command Line</p>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Enter <span className='font-normal'>dir</span> at the prompt in both windows.
                    </li>
                    <li>
                        Enter <span className='font-normal'>dir</span> at the prompt in both windows.
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.1.png')} alt="Explorer" />
            </div>
            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 2: Access the Command Line</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    You can display command line help using the man command. A man page, short for manual page, is a built-in documentation of the Linux commands. A man page provides detailed information about a given command and all its available options.
                </p>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        To learn more about the man page, type:
                        [analyst@secOps ~]$ <span className='font-normal'>man man</span>
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Name a few sections that are included in a man page.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            A few sections in a man page are: Name, Synopsis, Configuration, Description, Options, Exit status, Return value, Errors, Environment, Files, Versions, Conforming to, Notes, Bugs, Example, Authors, and See also
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Type <span className='font-normal'>q</span> to exit the main page.
                    </li>
                    <li>
                        Use the <span className='font-normal'>man</span> command to learn more about the <span className='font-normal'>cp</span> [analyst@secOps ~]$  <span className='font-normal'>man cp</span>
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the function of the cp command?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Copy files from one location to another location in the local filesystem.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What command would you use to find out more information about the pwd command? What is the function of the pwd command?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The man pwd command is used to access the man page about pwd. The pwd command prints the name of the current or working directory.
                        </p>
                    </div>
                </details>
            </div>

            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 3: Create and change directories.</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    In this step, you will use the change directory (cd), make directory (mkdir), and list directory (ls) commands.
                    Note: A directory is another word for folder. The terms directory and folder are used interchangeably throughout this lab.
                </p>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Type <span className='font-normal'>pwd</span> at the prompt.[analyst@secOps ~]$ <span className='font-normal'>pwd</span> /home/analyst
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What is the current directory?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Answers may vary. The current directory is /home/analyst in this example.
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Navigate to the  <span className='font-normal'>/home/analyst </span> directory if it is not your current directory. Type <span className='font-normal'>cd /home/analyst </span> [analyst@secOps ~]$  <span className='font-normal'>cd /home/analyst </span>
                    </li>
                    <li>
                        Type <span className='font-normal'>ls -l</span> at the command prompt to list the files and folders that are in the current folder. Standing for list, the -l option displays file size, permissions, ownership, date of creation and more.
                        [analyst@secOps ~]$ <span className='font-normal'>ls -l</span>
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.png')} alt="Explorer" />

                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        In the current directory, use the mkdir command to create three new folders: cyops_folder1, cyops_folder2, and cyops_folder3. Type mkdir cyops_folder1 and press Enter. Repeat these steps to create cyops_folder2 and cyops_folder3.
                        [analyst@secOps ~]$ <span className='font-normal'>mkdir cyops_folder1 </span>
                        [analyst@secOps ~]$ <span className='font-normal'>mkdir cyops_folder2 </span>
                        [analyst@secOps ~]$ <span className='font-normal'>mkdir cyops_folder3 </span>
                        [analyst@secOps ~]$
                    </li>
                    <li>
                        Type <span className='font-normal'>ls -l</span> to verify that the folders have been created:
                        [analyst@secOps ~]$ <span className='font-normal'> ls -l</span>
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.1.png')} alt="Explorer" />
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Type <span className='font-normal'>cd /home/analyst/cyops_folder3 </span> at the command prompt and press Enter.
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.2.png')} alt="Explorer" />

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Which folder are you in now?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            In this example, the current directory is /home/analyst/cyops_folder3 as indicated by cyops_folder3 at the prompt.
                        </p>
                    </div>
                </details>
                <p className='font-sans font-light pb-2 pl-4'>
                    Note: In the [analyst@secOps ~]$ prompt above: The tilde symbol ~ represents the current user’s home directory. In this example, the current user’s home directory is /home/analyst. After the cd /home/analyst/cyops_folder3 command, the current user’s home directory is now /home/analyst/cyops_folder3.
                </p>
                <p className='font-sans font-light pb-2 pl-4'>
                    Note: $ (dollar sign) indicates regular user privilege. If a ‘#’ (hashtag or pound sign) is displayed at the prompt, it indicates elevated privilege (root user).
                </p>
                <p className='font-sans font-light pb-2 pl-4'>
                    Note: While these symbols, conventions and main concepts remain the same, the prompt of a terminal window is highly customizable in Linux. Therefore, the prompt structure seen in the CyberOps Workstation VM will likely differ from the prompt in other Linux installations.
                </p>
                <p className='font-sans font-light pb-2 pl-4'>
                    The shell is the term used to refer to the command interpreter in Linux. Also known as Terminal, Command Line and Command Prompt, the shell is very powerful way to interact with a Linux computer.
                </p>
                <p className='font-sans font-light pb-2 pl-4'>
                    Challenge: Type the command cd ~ and describe what happens.
                </p>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Why did this happen?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The directory is changed to the home directory. Because the shell interprets the ~ as a shortcut for the current user’s home directory, cd ~ changes to the current user’s home.
                        </p>
                    </div>
                </details>
                <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Use the <span className='font-normal'>mkdir</span> command to create a new folder named <span className='font-normal'>cyops_folder4</span> inside the <span className='font-normal'>cyops_folder3 </span> folder:
                        [analyst@secOps ~]$ <span className='font-normal'>mkdir /home/analyst/cyops_folder3/cyops_folder4</span>
                        [analyst@secOps ~]$
                    </li>
                    <li>
                        Use the <span className='font-normal'>ls -l</span> command to verify the folder creation.
                        [analyst@secOps ~]$ <span className='font-normal'>ls –l /home/analyst/cyops_folder3</span> total 4
                        drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:04 cyops_folder4
                    </li>
                </ol>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.3.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What happens?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Apparently nothing but the command interpreter has changed the directory to the current directory itself.
                        </p>
                    </div>
                </details>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.4.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What happens?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The directory was changed to /home/analyst, which is the directory immediately above cyops_folder3, also known as parent directory.
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What would be the current directory if you issued the cd .. command at [analyst@secOps ~]$?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            /home
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What would be the current directory if you issued the cd .. command at [analyst@secOps home]$?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            / (backslash), the root of the filesystem
                        </p>
                    </div>
                </details>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What would be the current directory if you issued the cd .. command at [analyst@secOps /]$?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            / (backslash), the root of the filesystem. Because this is the highest level, no upward change is done as the root directory has no parent directory.
                        </p>
                    </div>
                </details>
            </div>

            <div>
                <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 4: Redirect Outputs.</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    Another powerful command line operator in Linux is known as redirect. Represented by the - symbol, this operator allows the output of a command to be redirected to some location other the current terminal window (the default).
                </p>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.5.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        No output was shown. Question: Is that expected? Explain.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            Yes. The output was redirected to the some_text_file.txt file.
                        </p>
                    </div>
                </details>
                <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.6.png')} alt="Explorer" />
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What happened to the text file? Explain.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>
                            The text file was completely replaced by the new message. The - operator destroyed the contents of the txt file before writing the message echoed by echo.
                        </p>
                    </div>
                </details>
            </div>


           <Tyzden6two/>
        </div>

    )
}

export default Tyzden6