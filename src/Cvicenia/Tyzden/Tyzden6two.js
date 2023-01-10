import React from 'react'
import Tyzdensix from './Tyzdensix'

const Tyzden6two = () => {
  return (
    <div>
      <div>
        <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black">Step 5: Redirect and Append to a Text File.</p>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.7.png')} alt="Explorer" />
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            What happened to the text file? Explain.
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              The new message was appended to the end of the file, keeping the original contents intact.
            </p>
          </div>
        </details>
      </div>


      <div>
        <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black">Step 6: Work with hidden files in Linux.</p>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.7.png')} alt="Explorer" />
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            How many files are displayed?
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              Answer may vary based on the user’s prior lab activities and interactions in the CyberOps Workstation VM. Make sure to also count the directories (displayed by ls in blue).
            </p>
          </div>
        </details>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.8.png')} alt="Explorer" />
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            How many more files are displayed than before? Explain.
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              Many more as ls -la displays, in addition to regular files, all the hidden files in folder.
            </p>
          </div>
        </details>
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            Is it possible to hide entire directories by adding a dot before its name as well? Are there any directories in the output of ls -la above?
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              Yes, there are many hidden directories in the output.
            </p>
          </div>
        </details>
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            Give three examples of hidden files shown in the output of ls -la above.
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              .config, .bash_history, .xinitrc
            </p>
          </div>
        </details>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.9.png')} alt="Explorer" />
      </div>

      <div>
        <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">Part 2: Copying, Deleting, and Moving Files</p>
        <div class="mb-2 text-base font-light pl-2 text-black-900 dark:text-black">
          Step 1: Copying Files
        </div>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.10.png')} alt="Explorer" />
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            What are the source and destination files? (use full paths to represent the parameters)
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              Source: /home/analyst/some_text_file.txt. Destination: /home/analyst/cyops_folder2/some_text_file.txt
            </p>
          </div>
        </details>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.11.png')} alt="Explorer" />

        <div class="mb-2 text-base font-light pl-2 text-black-900 dark:text-black">
          Step 2: Deleting Files and Directories
        </div>
        <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
          <li>
            Use the rm command to remove files. Issue the command below to remove the file some_text_file.txt from the home directory. The ls command is then used to show that the file some_text_file.txt has been removed from the home directory:
          </li>
        </ol>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.12.png')} alt="Explorer" />
        <div class="mb-2 text-base font-light pl-2 text-black-900 dark:text-black">
          Step 3: Moving Files and Directories
        </div>
        <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko6.13.png')} alt="Explorer" />
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            What command did you use to accomplish the task?
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              rm -r cyops_folder2/
            </p>
          </div>
        </details>
      </div>
      <div>
        <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Reflection Questions</p>
        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
          <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
            What are the advantages of using the Linux command line?
          </summary>
          <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
            <p>
              Answers may vary. The command line allows the users more options and control over the graphical interface. As the users become more experienced with the command line, the users may combine these commands in scripts to perform routine tasks. The command line interface uses fewer resources when users administrate the computers remotely.
            </p>
          </div>
        </details>
      </div>
      <div>
        <Tyzdensix />
      </div>
    </div>
  )
}

export default Tyzden6two