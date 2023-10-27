export function LeftContainer(props) {
    const bgColor = props.bgColor ?? 'bg-white';
    const fontColor = props.fontColor ?? 'text-gray-900';
    const { title, subtitle } = props;
    return (
        <div className={bgColor + " w-full p-10 border border-gray-200 shadow  dark:bg-gray-800 dark:border-gray-700"}>
            <h5 className={fontColor + " mb-2 text-3xl font-bold dark:text-white"}>{title}</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{subtitle}</p>
            {props.children}
        </div>
    )
}