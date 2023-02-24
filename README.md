# Create React/TypeScript DS
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

- Create a new React app with TypeScript as the template
  `npx create-react-app typescript-ds --template typescript`

- Add UXPin Merge to the project
  `yarn add @uxpin/merge-cli`

- Run the uxpin-merge init command (for JS)
  `npx uxpin-merge init`

- Add your webpack to uxpin.config.js file:
```
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

- Install a TypeScript loader:
  `yarn add ts-loader --dev`

- Add your Component, Button.tsx for example:
```
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { onClick, disabled, label } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
```

Please take a look at [TS-Merge-Supported-Component-Syntax](https://github.com/uxpin-merge/Typescript-component-examples) for more examples.
