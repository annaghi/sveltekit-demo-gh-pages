import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: "index.html",
            pages: "build",
        }),

        paths: {
            base: "/sveltekit-demo-gh-pages",
        },

        prerender: {
            handleHttpError: ({ message }) => {
                throw new Error(message);
            },
        },
    },
};

export default config;
