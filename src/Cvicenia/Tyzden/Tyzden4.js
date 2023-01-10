import React from 'react'

const Tyzden4 = () => {
    return (
        <div className='pl-6 pr-10 lg:pr-40 pl-20 '>
            <p className='font-sans text-2xl font-bold pb-2 pt-3'>
                Lab - Create User Accounts
            </p>
            <div>
                <p className='font-sans text-xl font-semibold pb-2'>Introduction</p>
                <p className='font-sans font-light pb-2 pl-4'>
                    Create User Accounts
                </p>
                <div className='pb-2 pl-2'>
                    <p className='font-sans '>
                        Part 1: Creating a New Local User Account
                    </p>
                    <p className='font-sans'>
                        Part 2: Reviewing User Account Properties
                    </p>
                    <p className='font-sans'>
                        Part 3: Modifying Local User Accounts
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
                    Part 1: Creating a New Local User Account
                </p>


                <div>
                    <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black"> Step 1: Open the User Account Tool.</p>
                    <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Log on to the Windows PC with an Administrator account. The account <span className='font-normal'>CyberOpsUser </span>is used in this example.
                        </li>
                        <li>
                            Click <span className='font-normal'>Start - search Control Panel </span>. Select <span className='font-normal'>User Accounts </span> in the Small icons view.
                            To change the view, select <span className='font-normal'>Small icons </span> in the View by drop down list.
                        </li>
                    </ol>
                </div>

                <div>
                    <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black">
                        Step 2: Create a user account..
                    </p>
                    <ol class="pl-8 pb-2 font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            In the <span className='font-normal'>User Accounts window </span>, click <span className='font-normal'>Manage another account </span>.
                        </li>
                    </ol>
                    <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cviko4.jpg')} alt="Explorer" />
                </div>
                <ol class="pl-8 pb-2 font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        In the <span className='font-normal'>Manage Accounts </span> window, click <span className='font-normal'>Add a new user in PC settings. </span>
                    </li>
                    <li>
                        In the <span className='font-normal'>Settings </span> window, click <span className='font-normal'>Add someone else to this PC. </span>
                    </li>
                    <li>
                        In the <span className='font-normal'>How will this person sign in? </span> window, click <span className='font-normal'>I don't have this person's sign-in information. </span>
                    </li>
                    <li>
                        In the <span className='font-normal'>Let's create your account </span> window opens, click <span className='font-normal'>Add a user without a Microsoft account</span>.
                    </li>
                    <li>
                        In the <span className='font-normal'>Create an account for this PC  </span> window, provide the necessary information to create the new user account named <span className='font-normal'>User1</span>.<span className='font-normal'>Click Next</span> to create
                        the new user account.
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        What type of user account did you just create?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>A local account with no administrative rights </p>
                    </div>
                </details>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Attempt to log into the newly created user account. It should be successful.
                    </li>
                    <li>
                        Navigate to  <span className='font-normal'>C:\Users  </span>folder. Right-click the <span className='font-normal'>User1</span>folder and select  <span className='font-normal'>Properties</span>and then the  <span className='font-normal'>Security </span> tab.
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Which groups or users have full control of this folder?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>Groups: SYSTEM, Administrators  Users: User1 </p>
                    </div>
                </details>


                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Open the folder that belongs to CyberOpsUser. Right-click the folder and click the <span className='font-normal'>Properties  </span>tab.
                    </li>

                </ol>

                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Were you able to access the folder? Explain.
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>You do not have permission to access this folder.</p>
                    </div>
                </details>
                <ol class="pl-8 pb-2 max-w-2xl space-y-1 font-light text-black-500 list-decimal list-inside dark:text-black-400">
                    <li>
                        Log out of User1 account. Log back in as CyberOpsUser
                    </li>
                    <li>
                        Navigate to  <span className='font-normal'>C:\Users  </span>folder. Right-click the folder and select <span className='font-normal'>Properties. </span> Click the <span className='font-normal'>Security</span> tab.
                    </li>
                </ol>
                <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                    <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                        Which groups or users have full control of this folder?
                    </summary>
                    <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                        <p>Groups: SYSTEM, Administrators  Users: CyberOpsUser</p>
                    </div>
                </details>

                <div>
                    <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">
                        Part 2: Reviewing User Account Properties
                    </p>
                    <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Click <span className='font-normal'>Start - </span>  Search for <span className='font-normal'>Control Panel </span> - Select <span className='font-normal'>Administrative Tools - </span>. Select <span className='font-normal'>Computer Management. </span>.
                        </li>
                        <li>
                            Select <span className='font-normal'>Local Users and Groups </span>  Click
                            the <span className='font-normal'>Users  </span> folder
                        </li>
                    </ol>
                    <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikost.jpg')} alt="Explorer" />
                    <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Right-click <span className='font-normal'>User1 </span> and selct <span className='font-normal'>Properties </span> .
                        </li>
                        <li>
                            Click the  <span className='font-normal'>Member of </span> tab.
                        </li>
                    </ol>

                    <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                        <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                            Which group is User1 is a member of?
                        </summary>
                        <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                            <p>
                                Users
                            </p>
                        </div>
                    </details>
                    <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                        <li>
                            Right click the account <span className='font-normal'>CyberOpsUser </span> and select  <span className='font-normal'>Properties </span>
                        </li>

                    </ol>
                    <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                        <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                            Which group is this user a member of?
                        </summary>
                        <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                            <p>
                                Administrators and Users
                            </p>
                        </div>
                    </details>






                    <div>
                        <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black">
                            Part 3: Modifying Local User Accounts
                        </p>
                        <p class="mb-2 text-lg font-semibold text-black-900 dark:text-black">
                            Step 1: Change the account type.
                        </p>
                        <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                            <li>
                                Navigate to the <span className='font-normal'>Control Panel </span>  and select <span className='font-normal'>User Accounts </span>. Click <span className='font-normal'>Manage another account </span>. Select <span className='font-normal'>User1 </span>.
                            </li>
                            <li>
                                In the Change an Account window, click the  <span className='font-normal'>User1 </span> account . Click
                                the <span className='font-normal'>Change the account type </span>
                            </li>
                            <li>
                                Select the Administrator radio button. Click Change Account Type
                            </li>
                            <li>
                                Now the account User1 has administrative rights.
                            </li>
                            <li>
                                Navigate to the <span className='font-normal'>Control Panel - Administrative Tools - Computer Management</span>  . Click <span className='font-normal'>Local </span>. Click <span className='font-normal'>Local Users and Groups - Users </span>.
                            </li>
                            <li>
                                Right-click <span className='font-normal'>User1 </span>  and select <span className='font-normal'>Properties </span>. Click <span className='font-normal'>Member of </span> tab
                            </li>
                        </ol>
                        <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                            <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                                Which groups does User1 belong to?
                            </summary>
                            <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                                <p>
                                    Administrators and Users
                                </p>
                            </div>
                        </details>

                        <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                            <li>
                                Select <span className='font-normal'>Administrators </span> and click  <span className='font-normal'>Remove </span> to remove User1 from the Administrative group. Click <span className='font-normal'>OK </span> to continue.
                            </li>
                        </ol>

                        <div>
                            <p class="mb-2 mt-2 text-lg font-semibold text-black-900 dark:text-black">Step 2: Delete the account.</p>

                            <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                                <li>
                                    To delete the account, right-click <span className='font-normal'>User1 </span> and select <span className='font-normal'>Delete</span>
                                </li>
                                <li>
                                    Click <span className='font-normal'>OK </span> to confirm the deletion.
                                </li>
                            </ol>
                            <img className="pb-4 pt-2 pl-5 shadow-none rounded max-w-full h-auto align-middle border-none" src={require('./../../assets/cvikostyry.jpg')} alt="Explorer" />
                            <ol class="pl-2 text-base font-light max-w-2xl space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
                                <li>
                                    Click <span className='font-normal'>OK </span> to confirm the deletion.
                                </li>
                            </ol>
                            <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                                <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                                    What is another way to delete a user account?
                                </summary>
                                <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                                    <p>
                                        Control Panel - User Accounts - Manage another account - Select User1 - Delete the account                                </p>
                                </div>
                            </details>

                        </div>
                    </div>

                    <p class="mb-2 text-xl font-semibold text-black-900 dark:text-black pt-2">Reflection Questions</p>
                    <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                        <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                            Why is it important to protect all accounts with strong passwords?
                        </summary>
                        <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                            <p>
                                No password or a weak password can allow access from almost anyone to steal data, or use the computer for unauthorized purposes.
                            </p>
                        </div>
                    </details>
                    <details class=" open:bg-white dark:open:bg-black-900 open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg" close>
                        <summary class=" font-normal font-sans text-base font-light leading-6 text-black-900 dark:text-black font-semibold select-none">
                            Why would you create a user with Standard privileges?
                        </summary>
                        <div class=" pt-3 font-normal font-sans text-base font-light leading-6 text-grey-600 dark:text-grey-400">
                            <p>
                                The Standard User cannot compromise the security of the computer or the privacy of other users.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default Tyzden4