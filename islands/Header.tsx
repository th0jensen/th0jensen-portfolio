import { useEffect, useState } from 'preact/hooks'
import { Button, Link } from '~/components/ui/button.tsx'
import { Menu, X, Sun, Moon } from 'lucide-preact'

export default function Header() {
	const [displayNav, setDisplayNav] = useState<boolean>(false)
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		// Check initial theme preference
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
			document.documentElement.classList.add('dark')
		}

		// Listen for theme changes
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
			'change',
			(event) => {
				const newTheme = event.matches ? 'dark' : 'light'
				setTheme(newTheme)
				if (event.matches) {
					document.documentElement.classList.add('dark')
				} else {
					document.documentElement.classList.remove('dark')
				}
			},
		)
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		if (newTheme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}

	return (
		<header className='fixed top-0 left-0 right-0 h-16 backdrop-blur-sm bg-card/90 shadow-md z-50'>
			<div className='container h-full mx-auto px-4 flex justify-between items-center'>
				<nav className='flex items-center'>
					<div className='md:hidden'>
						<Button
							variant='ghost'
							size='sm'
							onClick={() => setDisplayNav(!displayNav)}
						>
							{!displayNav ? <Menu /> : <X />}
						</Button>
					</div>
					<div className={`${displayNav ? 'hidden' : 'block'} md:block mr-4`}>
						<Link variant='ghost' size='sm' href={'#hero'}>
							Thomas Jensen
						</Link>
					</div>
					<div className={`${displayNav ? 'block' : 'hidden'} md:flex md:space-x-2`}>
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
				<div className='flex items-center space-x-2'>
					<Link variant='ghost' size='sm' href={'#work'}>
						Contact Me
					</Link>
					<Button
						variant='ghost'
						size='sm'
						onClick={toggleTheme}
						title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
						className="p-2"
					>
						{theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
					</Button>
				</div>
			</div>
		</header>
	)
}
