export function TimelineItem(props) {
    const { date, title, description } = props;
    const description1 = props.description1
    const description2 = props.description2
    const description3 = props.description3
    return (
        <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
            <h3 class="text-lg font-semibold text-white dark:text-white">{title}</h3>
            <p class="mb-4 text-base font-normal text-slate-300 dark:text-gray-400">{description}</p>
            <p class="mb-4 text-base font-normal text-slate-300 dark:text-gray-400">{description1}</p>
            <p class="mb-4 text-base font-normal text-slate-300 dark:text-gray-400">{description2}</p>
            <p class="mb-4 text-base font-normal text-slate-300 dark:text-gray-400">{description3}</p>
        </li>
    )
}