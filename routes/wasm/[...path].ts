import { HandlerContext } from "$fresh/server.ts";

export const handler = async (req: Request, ctx: HandlerContext) => {
  const path = ctx.params.path;
  try {
    const file = await Deno.readFile(`./static/wasm/${path}`);
    return new Response(file, {
      headers: {
        "content-type": path.endsWith(".wasm") ? "application/wasm" : "application/javascript",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response("File not found", { status: 404 });
  }
};
