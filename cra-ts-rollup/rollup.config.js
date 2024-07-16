import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { dts } from "rollup-plugin-dts";
import { exec } from 'child_process';

const cleanDts = () => ({
  name: 'clean-dts',
  writeBundle() {
    exec('rm -rf ./lib/types', (err) => {
      if (err) console.error(`Error deleting files: ${err.message}`);
    });
  }
})

const rollup = [
  {
    input: './src/hooks/index.ts',
    output: {
      file: './lib/index.js',
      format: 'es',
    },
    plugins: [
      resolve(),
      commonjs(),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.build.json' }),
    ],
  },
  {
    input: "./lib/types/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "es" }],
    plugins: [dts(), cleanDts()],
  }
]

export default rollup