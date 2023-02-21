- Add your webpack to uxpin.config.js file:
     wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
     webpackConfig: 'webpack.config.js',
- Add your Component, Button.tsx for example:
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

Please take a look at [TS-Merge-Supported-Component-Syntax](https://github.com/uxpin-merge/Typescript-component-examples) for more examples.