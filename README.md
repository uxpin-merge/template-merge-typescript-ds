[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Template Merge TypeScript DS

- Add UXPin Merge to the project
  `yarn add @uxpin/merge-cli`

- Add [uxpin.config.js](https://github.com/uxpin-merge/template-merge-typescript-ds/blob/master/uxpin.config.js)

- Add your webpack to the `webpackConfig` field in `uxpin.config.js` file:

```js
@@ -4,12 +4,12 @@ module.exports = {
       {
         name: 'General',
         include: [
+          'src/components/Button/Button.tsx',
         ],
       },
     ],
     wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
     webpackConfig: 'webpack.config.js',
   },
-  name: 'Example Design System'
+  name: 'TypeScript Design System'
 };
```

- Add `UXPinWrapper.tsx` [UXPinWrapper.tsx](https://github.com/uxpin-merge/template-merge-typescript-ds/blob/master/src/components/UXPinWrapper/UXPinWrapper.tsx):

- Add your Component, [Button.tsx](https://github.com/uxpin-merge/template-merge-typescript-ds/blob/master/src/components/Button/Button.tsx) for example:

```tsx
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { onClick, disabled, label } = props;

  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
```

- Make sure to add your component to the `include` array in [uxpin.config.js](https://github.com/uxpin-merge/template-merge-typescript-ds/blob/52d17ce3d005d47df12f10fb9a4c59b1eff2e344/uxpin.config.js#L7)

- run experimental mode: `npx uxpin-merge --disable-tunneling`

Please take a look at the following links for more information and examples:
* [TS-Merge-Supported-Component-Syntax](https://github.com/uxpin-merge/Typescript-component-examples)
* [Integrating Your Own Components](https://www.uxpin.com/docs/merge/integrating-your-own-components/#integration-with-wrappers-for-components)
