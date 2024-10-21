import { useSignal } from '@preact/signals'
import _Bio from '../islands/Bio.tsx'
import AboutMe from '../islands/AboutMe.tsx'
import Footer from '../components/Footer.tsx'

export default function Home() {
    const _count = useSignal(3)
    return (
        <div class='flex flex-col items-center justify-center overflow-x-hidden'>
            <main class='flex-1 min-h-screen w-screen justify-center items-center'>
                <AboutMe />
            </main>
            <Footer />
        </div>
    )
}
