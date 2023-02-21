import { jsx as _jsx } from "react/jsx-runtime";
export default function Button(props) {
    return (_jsx("button", Object.assign({ onClick: props.onClick, disabled: props.disabled }, { children: props.label }), void 0));
}
