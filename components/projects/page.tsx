import Layout from '~/components/ComponentLayout.tsx'
import WasmCanvas from '~/islands/WasmCanvas.tsx'
import * as React from 'react'
import { Card, CardContent, CardHeader } from '~/components/ui/card.tsx'

export default function Projects() {
	return (
		<Layout id='projects'>
			<div className='container px-4 py-8 md:px-8 lg:px-16 justify-center items-center flex flex-col'>
				<h2 className='text-2xl font-bold mb-6 md:mb-8'>Projects</h2>
				<div className='flex flex-wrap gap-6 md:gap-8 max-w-[750px]'>
					<ShowcaseCard />
				</div>
			</div>
		</Layout>
	)
}

const ShowcaseCard: React.FC = () => {
	return (
		<Card className='overflow-hidden'>
			<CardContent className='p-0'>
				<CardHeader>Rust/Bevy as WASM</CardHeader>
				<WasmCanvas />
			</CardContent>
		</Card>
	)
}
