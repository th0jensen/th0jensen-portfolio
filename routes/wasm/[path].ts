// routes/static/[...path].ts
import { HandlerContext } from '$fresh/server.ts'

export const handler = async (req: Request, ctx: HandlerContext) => {
	const { path } = ctx.params

	// Check if the requested file is a WASM file
	if (path.endsWith('.wasm')) {
		const wasmFile = await Deno.readFile(`./static/${path}`)
		return new Response(wasmFile, {
			headers: {
				'content-type': 'application/wasm',
			},
		})
	}

	// For other static files, let Fresh handle them normally
	return ctx.next()
}
