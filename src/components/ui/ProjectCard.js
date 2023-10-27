export function ProjectCard(props) {
    const { title, subtitle, bgColor } = props;
    return (
        <div className={ bgColor + " w-full shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"}>
            <h5 className="mb-2 text-3xl font-bold text-white dark:text-white">{title}</h5>
            <p className="mb-5 text-base text-white sm:text-lg dark:text-gray-400">{subtitle}</p>
            <div className=" space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex items-center font-medium text-white hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                    Have a look
                    <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}