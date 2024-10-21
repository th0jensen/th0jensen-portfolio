type LangListProps = {
    label: string
    data: string[]
}

export default function LangList({ label, data }: LangListProps) {
    return (
        <p>
            {`${label}: `}
            {data.map((lang, index) => {
                if (index < data.length - 1) {
                    return lang.toLowerCase() + ', '
                } else {
                    return lang.toLowerCase()
                }
            })}
        </p>
    )
}
