export function Container(props) {
    const bgColor = props.bgColor ?? 'bg-white';
    const fontColor = props.fontColor ?? 'text-gray-900';
    const padding = props.padding ?? 'p-64';
    const { title, subtitle } = props;
    return (
        <div className={`${bgColor} ${padding} w-full p-4 text-center  border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700`}>
            <h5 className={`${fontColor} mb-2 text-3xl font-bold dark:text-white"`}>{title}</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{subtitle}</p>
            {props.children}
        </div>
    )
}