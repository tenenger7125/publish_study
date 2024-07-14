const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/hooks/index.js'], // 입력 파일
  outdir: 'lib/hooks', // 출력 디렉토리
  bundle: true,
  loader: {
    '.jsx': 'jsx' // JSX 파일을 로드할 때 사용할 로더
  },
  format: 'esm', // ES 모듈 형식으로 출력
  jsx: 'preserve', // JSX 구문을 그대로 유지
  external: ['react', 'react-dom'], // 외부 패키지 설정
  // outExtension: { '.js': '.jsx' }, // 출력 파일의 확장자를 JSX로 설정
}).catch(() => process.exit(1));
