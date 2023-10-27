export function Timeline(props) {
    return (
        <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-20"> 
            {props.children}
        </ol>
    )
}