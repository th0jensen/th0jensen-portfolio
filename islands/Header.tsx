import { useEffect, useState } from 'preact/hooks'
import { Button, Link } from '~/components/ui/button.tsx'
import { Menu, X } from 'lucide-preact'

export default function Header() {
	const [displayNav, setDisplayNav] = useState<boolean>(false)

	useEffect(() => {
		globalThis.matchMedia('(prefers-color-scheme: dark)').addEventListener(
			'change',
			(event) => {
				if (event.matches) {
					document.documentElement.classList.add('dark')
				} else {
					document.documentElement.classList.remove('dark')
				}
			},
		)
	})

	return (
		<header className='fixed top-0 left-0 right-0 h-16 backdrop-blur-sm bg-card/90 shadow-md z-50'>
			<div className='container h-full mx-auto px-4 flex items-center justify-between'>
				<nav className='flex items-center'>
					<div class='block md:hidden'>
						<Button
							variant='ghost'
							size='sm'
							onClick={() => setDisplayNav(!displayNav)}
						>
							{!displayNav ? <Menu /> : <X />}
						</Button>
					</div>
					<div class={`${displayNav ? 'hidden' : 'block'} md:block`}>
						<Link variant='ghost' size='sm' href={'#hero'}>
							Thomas Jensen
						</Link>
					</div>
					<div class={`${displayNav ? 'block' : 'hidden'} md:block`}>
						<Link variant='ghost' size='sm' href={'#work'}>
							Work
						</Link>
						<Link variant='ghost' size='sm' href={'#experience'}>
							Experience
						</Link>
						<Link variant='ghost' size='sm' href={'#projects'}>
							Projects
						</Link>
					</div>
				</nav>
				<div
					class={`${
						displayNav ? 'hidden' : 'block'
					} md:block flex items-center space-x-4`}
				>
					<Link variant='ghost' size='sm' href={'#work'}>
						Contact Me
					</Link>
				</div>
			</div>
		</header>
	)
}
