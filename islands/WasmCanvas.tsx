import { useEffect, useRef } from 'preact/hooks'
import init, { run_bevy_app } from 'wasmModule'

export default function WasmCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		async function loadWasm() {
			await init('/wasm/rs_lib_bg.wasm')
			if (canvasRef.current) {
				canvasRef.current.height = 400
				canvasRef.current.width = 400
				run_bevy_app()
			}
		}
		loadWasm()
	}, [])

	return (
		<canvas
			id='bevy-canvas'
			ref={canvasRef}
			class='outline-0 w-[400px] h-[400px]'
		/>
	)
}
