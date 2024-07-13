# Hello NPM

Print 'Hello, npm!' in the console.

## Why use Babel with Typescript?
### 최신 JavaScript 기능 지원
- Babel은 최신 ECMAScript(ES) 기능을 지원하는 다양한 플러그인을 제공하여 최신 자바스크립트 기능을 사용할 수 있다.

### 빠른 트랜스파일링 속도
- Babel은 타입 검사를 무시하고 코드 트랜스파일을 하기 때문에 빌드속도를 단축한다.
- typescript 명령어를 통해 타입 검사 및 타입 파일을 생성한다.

### 트리셰이킹
- Babel은 Webpack과 같은 번들러와 함께 사용하면 트리 셰이킹을 지원하여 사용되지 않는 코드를 제거하고 번들 크기를 줄일 수 있습니다.

## 알게된 점
### 타입스크립트와 바벨을 함께 사용하면 더 편하다.
- 타입스크립트 명령어로는 d.ts 파일을 생성하고, 바벨의 경우에는 오로지 빌드만 했기 때문에 빠른 빌드가 가능하다.

## 오류
### babel.config.js 파일과 ECMAScript
- `package.json`에 type을 module로 했고 build를 진행했을 때 특정 파일에서 CommonJs를 쓰고 있으니 ECMAScript를 써야한다는 오류가 나왔다.
- 처음에는 빌드할 파일에 문제가 있는 줄 알았는데, 알고보니 `babel.config.js`이 module.exports 를 사용하고 있어서 오류가 발생했다.
- `babel.config.js`파일을 export default로 내보내거나, `babel.config.json` 파일로 변경해서 사용해서 해결할 수 있다.

### dist/index.js가 dist/main.js를 읽어오지 못한다.
- `tsconfig.json` 파일에서 상대 경로 및 확장자를 생략하는 속성을 추가했다.(baseUrl) 
- 그리고 `babel.config.js` 파일에서 상대 경로 및 타게팅 파일 확장자 속성을 가진 플러그인을 추가했다.(module.resolver)
- 배포를 했더니 트랜스파일링된 `dist/index.js`가 `dist/main.js`를 읽어오지 못한다는 오류가 발생했다.
- 알고보니 typescript는 javascript를 따르기 때문에 기존 자바스크립트 처럼 확장자를 붙여야 한다고 한다.
- https://github.com/microsoft/TypeScript/issues/42151

## Why Webpack use?
### 하나의 파일로 번들링하기
- 여러개의 파일들을 하나의 파일로 번들링할 수 있다. js, json 뿐만아니라 지원되는 loader를 추가하면 css, assets 등 loader에 따라 모든 형식의 파일을 번들링할 수 있다.

### webpack 설정으로 편리하게 관리
- `webpack.config.js` 파일에 tsconfig, babel 등 loader의 설정을 하여 편리하게 관리할 수 있다.


## 오류
### typescript emitted no output for ~
- typescript 파일이 트랜스파일링되는 파일이 없다고 오류가 발생했다.
- 처음에는 d.ts 파일을 emit 하는데 왜 그럴까 생각을 했다.
- 알고보니 d.ts 파일이 아닌 트랜스파일링되는 파일을 반환해야된다는 것을 알고나서 `emitDeclarationOnly` 를 주석처리했더니 성공했다.