import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    alias: {
      $components: "src/components",
      $lib: "src/lib",
      $routes: "src/routes",
    },
		adapter: adapter()
	}
};

export default config;
