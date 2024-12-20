import type { PageProps } from '$fresh/server.ts'
import Header from '~/islands/Header.tsx'
import Footer from '~/components/Footer.tsx'

export default function Layout({ Component }: PageProps) {
	return (
		<div class='flex flex-col'>
			<Header />
			<div class='flex-1'>
				<Component />
			</div>
			<Footer />
		</div>
	)
}
