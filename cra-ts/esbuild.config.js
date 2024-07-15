const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/hooks/index.ts'],
  outdir: 'lib',
  bundle: true,
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
  },
  format: 'esm',
  external: ['react', 'react-dom'],
  jsx: 'preserve',
})