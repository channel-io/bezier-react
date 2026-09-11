module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        // 이관 시점 산출물을 보존하려는 임시 고정. browserslist 해석은 caniuse-lite 사본이
        // 어디 깔리느냐에 따라 달라져, 설치 구조가 바뀌면 다운레벨 결과도 바뀐다.
        // css 타겟은 `.browserslistrc`에 있다 — 지원 범위를 바꿀 땐 두 곳을 같이 본다.
        targets: {
          android: '121',
          chrome: '77',
          edge: '105',
          firefox: '121',
          ios: '15.4',
          opera: '91',
          safari: '15.4',
          samsung: '20',
        },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
}
