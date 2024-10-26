import type { ComponentChildren } from 'preact'

export interface LayoutProps {
    children: ComponentChildren
}

export default function HeroLayout({ children }: LayoutProps) {
    const backgroundImage =
        'https://images.unsplash.com/photo-1716143168876-077e9b8120d7?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <div
            id='hero'
            class='min-h-screen w-screen p-4 justify-center items-center flex bg-base-300'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
            }}
        >
            {children}
        </div>
    )
}
