export function Navitgation() {
    const home = () => {
        const anchor = document.querySelector('#home')
        anchor.scrollIntoView({ behavior: 'smooth' })
    }
    const project = () => {
        const anchor = document.querySelector('#project')
        anchor.scrollIntoView({ behavior: 'smooth' })
    }
    const workexp = () => {
        const anchor = document.querySelector('#workexp')
        anchor.scrollIntoView({ behavior: 'smooth' })
    }
    const abaoutme = () => {
        const anchor = document.querySelector('#aboutme')
        anchor.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <nav class="sticky top-0 z-50 bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 border-b-2">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="#" class="flex items-center">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">Brian Luciano</span>
                </a>
                <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a onClick={home} class="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a onClick={project} class="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                        </li>
                        <li>
                            <a onClick={workexp} class="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Experience</a>
                        </li>
                        <li>
                            <a onClick={abaoutme} class="block py-2 pl-3 pr-4 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
