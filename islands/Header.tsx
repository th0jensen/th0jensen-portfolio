import { useEffect } from 'preact/hooks'
import { Button } from '~/components/ui/button.tsx'

export default function Header() {
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
        <header className='fixed top-0 left-0 right-0 h-16 w-full bg-white dark:bg-gray-800 shadow-md z-50'>
            <div className='container h-full mx-auto px-4 flex items-center justify-between'>
                <nav className='flex items-center space-x-4'>
                    <a
                        href='#hero'
                        className='text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                        Thomas Jensen
                    </a>
                    <a
                        href='#work'
                        className='text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                        Work
                    </a>
                    <a
                        href='#experience'
                        className='text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                        Experience
                    </a>
                    <a
                        href='#projects'
                        className='text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                        Projects
                    </a>
                </nav>
                <div className='flex items-center space-x-4'>
                    <Button variant='ghost' size='sm'>
                        Contact Me
                    </Button>
                </div>
            </div>
        </header>
    )
}
