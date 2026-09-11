module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        // targets를 여기에 고정한 이유: 비워두면 browserslist 기본 해석이 적용되는데,
        // 그 결과가 node_modules 구조에 따라 달라진다 — caniuse-lite 사본이 여러 벌 깔리는
        // 설치 트리에서는 babel이 자기 밑의 옛 사본을 참조해, 같은 소스에서 다른 다운레벨
        // 결과가 나온다. 값을 적어두면 설치 구조와 무관하게 산출물이 고정된다.
        //
        // 유지 제약: JS 다운레벨 범위는 여기서 정해지고, CSS 쪽은 `.browserslistrc`를
        // postcss가 읽는다. 지원 범위를 넓히거나 좁힐 때 두 곳을 같이 본다.
        //
        // 제거 조건: 이 고정은 pnpm 이관 시점의 JS 산출물을 그대로 보존하려는 임시 조치다.
        // 지원 브라우저 정책을 새로 정해 `.browserslistrc` 한 곳으로 관리하기로 하면
        // 이 블록을 지우고 browserslist 해석에 맡긴다.
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
