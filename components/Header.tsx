export default function Header() {
    return (
        <header class='fixed navbar h-16 w-full bg-base-200'>
            <div class='navbar-start'>
                <a href='#hero' class='btn btn-ghost text-[1rem]'>
                    Thomas Jensen
                </a>
                <a href='#work' class='btn btn-ghost text-sm'>Work</a>
                <a href='#experience' class='btn btn-ghost text-sm'>
                    Experience
                </a>
                <a href='#projects' class='btn btn-ghost text-sm'>Projects</a>
            </div>
            <div class='navbar-end'>
                <button class='btn btn-ghost text-sm'>Contact Me</button>
            </div>
        </header>
    )
}
