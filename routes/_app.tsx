import { type PageProps } from '$fresh/server.ts'
export default function App({ Component }: PageProps) {
    return (
        <html>
            <head>
                <meta charset='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <script type='text/javascript' src='/darkMode.js' />
                <script type='application/wasm' src='/wasm/rs_lib_bg.wasm' />
                <title>Thomas Jensen</title>
                <link rel='stylesheet' href='/styles.css' />
            </head>
            <body>
                <Component />
            </body>
        </html>
    )
}
