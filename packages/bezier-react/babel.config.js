module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        /**
         * 타겟을 명시하는 이유: yarn 트리에는 caniuse-lite 사본이 5개 있었고(최상위 30001716 ·
         * browserslist 30001705 · core-js-compat 30001727 · webpack 30001667 ·
         * @babel/helper-compilation-targets 30001667) babel은 자기 밑의 30001667을 참조했다.
         * pnpm은 사본을 하나로 모으므로 그 구조를 재현할 수 없고, 그대로 두면 babel이 최신
         * 데이터를 보면서 chrome 타겟이 77에서 105로 올라가 옵셔널 체이닝 다운레벨이 사라진다
         * (실측: 빌드 산출물 315개의 지문이 갈렸다).
         * 이관으로 인한 산출물 변화를 없애기 위해 이관 전 실측 타겟을 여기에 고정한다.
         * 값 출처: as-is 빌드의 @babel/preset-env `debug: true` 출력.
         */
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
