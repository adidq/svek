import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    adapter: adapter({
        // Configuration options
        fallback: 'index.html',
    }),
    alias: {
      $components: "src/components",
      $lib: "src/lib",
      $routes: "src/routes",
      $routes: "static",
    },
		adapter: adapter()
	}
};

export default config;
