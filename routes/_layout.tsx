import type { PageProps } from '$fresh/server.ts'
import Header from '~/islands/Header.tsx'
import Footer from '~/components/Footer.tsx'

export default function Layout({ Component }: PageProps) {
    return (
        <div class='flex flex-col w-screen overflow-x-hidden'>
            <Header />
            <div class='flex-1 overflow-x-hidden'>
                <Component />
            </div>
            <Footer />
        </div>
    )
}
