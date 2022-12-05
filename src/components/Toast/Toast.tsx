import { forwardRef } from "react";

type Props = {
  message: string;
  position?: "top-right" | "bottom-right";
};

/**
 * @uxpinuseportal
 */
export const Toast = forwardRef(
  ({ position, message }: Props) => {
    return (
      <div
        style={{
          position: "fixed",
          padding: 10,
          minWidth: 300,
          backgroundColor: "#ca8a04",
          color: "white",
          fontSize: 20,
          zIndex: 100, // to be above Preview top bar
          ...getPositionStyle(position),
        }}
      >
        {message}
      </div>
    );
  }
);

function getPositionStyle(position: Props["position"]) {
  const margin = 20;
  const styles = {
    "top-right": {
      top: margin,
      right: margin,
    },
    "bottom-right": {
      bottom: margin,
      right: margin,
    },
  };
  return styles[position || "bottom-right"];
}
