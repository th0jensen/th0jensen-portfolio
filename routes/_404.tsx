import { Head } from '$fresh/runtime.ts'
import Footer from '~/components/Footer.tsx'

export default function Error404() {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
            </Head>
            <div class='flex flex-col h-screen items-center justify-center overflow-x-hidden'>
                <main class='flex-1 flex w-screen justify-center items-center'>
                    <div class='flex flex-col gap-4 justify-center items-center'>
                        <h1 class='text-4xl font-bold'>404 - Page not found</h1>
                        <p>
                            The page you were looking for doesn't exist.
                        </p>
                        <a href='/' class='underline'>Go back home</a>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
