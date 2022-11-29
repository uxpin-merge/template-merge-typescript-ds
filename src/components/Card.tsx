import React from "react";
import Button from "~/components/Button/Button";

type Props = {
  children: React.ReactNode;
};
export default function Card(props: Props) {
  return (
    <div style={{ borderRadius: 8, border: "1px solid #bbb", padding: 10 }}>
      <div>{props.children}</div>
      <Button label="Push me" />
    </div>
  );
}
