interface NameProps {
	firstName: string
	lastName: string
}

export default function Name(props: NameProps) {
	return (
		<span className='bg-black font-bold px-4 text-white'>
			{props.firstName} {props.lastName}
		</span>
	)
}
