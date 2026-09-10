import adapterNode from '@sveltejs/adapter-node';
import adapterVercel from '@sveltejs/adapter-vercel';

const useNode = process.env.BUILD_TARGET === 'node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: useNode ? adapterNode() : adapterVercel({ runtime: 'nodejs24.x' })
  }
};

export default config;