import dts from 'rollup-plugin-dts';
import { defineConfig } from 'rollup';
import { exec } from 'child_process';

const cleanDts = () => ({
  name: 'clean-dts',
  writeBundle() {
    exec('rm -rf ./lib/types', (err) => {
      if (err) console.error(`Error deleting files: ${err.message}`);
    });
  }
})

export default defineConfig({
  input: './lib/types/index.d.ts',
  output: {
    file: './lib/index.d.ts',
    format: 'es'
  },
  plugins: [dts({tsconfig: './tsconfig.build.json'}), cleanDts()]
})