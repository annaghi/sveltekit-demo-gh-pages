import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),

    paths: {
      base: "/sveltekit-demo-gh-pages",
    },
  },
};

export default config;
