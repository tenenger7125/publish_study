module.exports = {
  presets: [
    ["@babel/preset-env", {modules: false}],
    "@babel/preset-typescript"
  ],
  plugins: [
    // 필요한 Babel 플러그인 추가
    // "@babel/plugin-transform-modules-commonjs"
  ],
};
