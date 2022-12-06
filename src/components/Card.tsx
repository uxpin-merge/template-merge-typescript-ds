import React from "react";
import Button from "~/components/Button/Button";
import { Size } from "~/types";

type Props = {
  children: React.ReactNode;
  size: Size;
};
export default function Card(props: Props) {
  return (
    <div
      style={{
        borderRadius: 8,
        border: "1px solid #bbb",
        padding: props.size === "large" ? 15 : 10,
      }}
    >
      <div>{props.children}</div>
      <Button label="Push me" />
    </div>
  );
}
