import type { Data } from '~/lib/data/types.ts'
import Layout from '~/components/ComponentLayout.tsx'
import { Card, CardContent } from '~/components/ui/card.tsx'
import { Link } from '~/components/ui/button.tsx'
import { ArrowRight, Github, Linkedin } from 'lucide-preact'

function calculateAge(birthday: string): number {
	const [month, day, year] = birthday.split('-').map(Number)
	const birthDate = new Date(year, month - 1, day)
	const today = new Date()

	let age = today.getFullYear() - birthDate.getFullYear()
	const monthDiff = today.getMonth() - birthDate.getMonth()

	if (
		monthDiff < 0 ||
		(monthDiff === 0 && today.getDate() < birthDate.getDate())
	) {
		age--
	}

	return age
}

export default function Hero({ about }: { about: Data['about'] }) {
	const age = calculateAge(about.birthday)

	return (
		<Layout id='hero'>
			<section className='relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-primary/10 to-secondary/20 dark:from-background dark:via-primary/5 dark:to-secondary/10'>
				<div className='absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]' />
				<div className='container relative mx-auto px-8 py-24 lg:py-32'>
					<div className='flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-around'>
						<div className='mb-8 lg:mb-0 lg:w-1/2'>
							<img
								src='/headshot.jpg'
								alt={`${about.firstName} ${about.lastName}`}
								className='rounded-2xl ring-2 w-72 md:w-96 ring-primary/20 dark:ring-primary/10'
								style='box-shadow: hsl(var(--ring)) 0px 0px 15px 5px;'
							/>
						</div>
						<InfoCard about={about} age={age} />
					</div>
				</div>
				<div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent'>
				</div>
			</section>
		</Layout>
	)
}

const InfoCard = (
	{ about, age }: { about: Data['about']; age: number },
) => {
	return (
		<Card className='lg:w-1/2 bg-background/80 backdrop-blur-sm dark:bg-background -translate-y-24 relative md:block md:translate-y-0'>
			<CardContent className='p-6 md:p-8'>
				<h1 className='mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
					{about.firstName} {about.lastName}
				</h1>
				<p className='mb-6 text-xl text-muted-foreground md:text-2xl'>
					{age} year old Software Developer
				</p>
				<p className='mb-8 text-lg md:text-xl'>
					{'Passionate about backend, services, and optimisation.'}
				</p>
				<div class='flex w-full gap-4'>
					<Link href={'/#work'}>
						View My Work
						<ArrowRight className='ml-2 h-4 w-4 transition-transform' />
					</Link>
					<div class='flex gap-2'>
						<Link
							variant={'ghost'}
							href={'https://github.com/th0jensen'}
						>
							<Github /> Github
						</Link>
						<Link
							variant={'ghost'}
							href={'https://www.linkedin.com/in/thomas-jensen-75a488208/'}
						>
							<Linkedin /> LinkedIn
						</Link>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
