export default {
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-typescript"
  ],
  plugins: [
    // 필요한 Babel 플러그인 추가
    ["module-resolver", {
      "root": ["./src"],
      "extensions": [".js", ".ts"],
      "alias": {
        "@": "./src"
      },
    }]
  ]
};