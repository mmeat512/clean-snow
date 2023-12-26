# clean-snow

항해 플러스 제2회 코육대 눈닦기

## 프로젝트 생성

- Vite를 이용하여 프로젝트 생성

```
yarn create vite --teamplte react-ts
```

- package.json 설치

```
yarn install
```

- 프로젝트 시작

```
yarn dev
```

## 미션

1. 눈이 계속 쌓여 하얀 화면을 구현합니다.
2. 마우스 커서/터치에 따라 하얗게 쌓인 눈이 닦이는 웹을 구현하세요.
3. 닦인 화면에도 눈이 쌓이고 다시 하얗게 변합니다.

## 입력&출력

- 눈에 계속해서 내리고 쌓입니다.
- 마우스 커서로 눈을 치울 수 있습니다.

## 제약 사항

- 눈은 랜덤으로 계속해서 내립니다.
- 마우스 커서보다 넓은 범위로 눈이 닦여도 괜찮습니다.

## 기능 구현 목록

- [ ] 눈이 계속해서 내리고 쌓인다.
  - [ ] 눈을 생성한다.
    - [ ] 눈은 랜덤으로 생성한다. (left)
  - [ ] 눈을 화면에 노출시킨다.
    - [ ] 위에서 아래로 이동한다. (translateY)
    - [ ] 이때 눈은 없어지지 않는다.
    - [ ] 눈이 페이지 끝에 도착할 시 더이상 움직이지 않고 고정된다.
    - [ ] 눈이 끝에 도착할 시 기존의 눈이 있다면 겹치지 않고 위에 고정된다.
- [ ] 마우스 커서/터치 시 눈이 닦인다.
  - [ ] 마우스 클릭을 하면 눈이 사라진다.
  - [ ] 마우스 커서가 닿으면 눈이 사라진다.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
