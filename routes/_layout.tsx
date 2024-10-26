import type { PageProps } from '$fresh/server.ts'
import Header from '~/components/Header.tsx'
import Footer from '~/components/Footer.tsx'

export default function Layout({ Component }: PageProps) {
    return (
        <div class='flex flex-col w-screen overflow-x-hidden'>
            <Header />
            <div class='flex-1'>
                <Component />
            </div>
            <Footer />
        </div>
    )
}
