import LangList from '../components/LangList.tsx'
import { portfolioData as data } from '../data.ts'

export default function Bio() {
    // const sequence = [
    //     'hiya!',
    //     3000,
    //     '!שלום',
    //     3000,
    //     'hallo!',
    //     3000,
    //     'hei!',
    //     3000,
    // ]

    const background_url =
        'https://images.unsplash.com/photo-1659194507091-83f10f748133?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <div
            id='about-me'
            className='flex w-screen flex-col overflow-hidden'
            style={{
                backgroundImage: `url(${background_url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className='text-primary flex min-h-screen w-full flex-col justify-center gap-5 p-10 text-3xl font-bold'>
                <div className='z-20 flex max-w-xl flex-col gap-10 rounded-2xl p-10 backdrop-blur-2xl'>
                    <div className='text-sm'>
                        <LangList
                            label='human languages'
                            data={data.about.humanLanguages}
                        />
                        <LangList
                            label='computer languages'
                            data={data.about.computerLanguages}
                        />
                    </div>
                </div>
                {
                    /* <div className='col z-20 flex max-w-xl flex-col gap-5 rounded-2xl p-10 backdrop-blur-2xl'>
                    <h1 className='flex-row text-4xl font-bold'>socials</h1>
                    <div className='flex gap-5'>
                        <SocialButton
                            social='github'
                            link={'https://www.github.com/th0jensen'}
                        />
                        <SocialButton
                            social='linkedin'
                            link={'https://www.linkedin.com/in/thomas-jensen-75a488208/'}
                        />
                        <SocialButton
                            social='instagram'
                            link={'https://www.instagram.com/baecien'}
                        />
                    </div>
                </div> */
                }
            </div>
            <img
                className='absolute bottom-0 right-0 z-10 hidden max-h-full max-w-xl md:block xl:max-h-screen xl:max-w-full'
                src='thomas_face_upscaled.png'
                alt='my face'
            />
        </div>
    )
}
