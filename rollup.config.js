import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import bundleSize from "rollup-plugin-bundle-size";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
const packageJson = require("./package.json");

export default {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      exports: "named",
      sourcemap: false
    },
    {
      file: packageJson.module,
      format: "es",
      exports: "named",
      sourcemap: false
    }
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript(
      {
        useTsconfigDeclarationDir: true,
        exclude: ["**/__tests__/**", "src/setupTests.ts"],
        clean: true
      }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true
    }),
    terser(),
    bundleSize()
  ]
};