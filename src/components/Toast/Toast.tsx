type Props = {
  message: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

/**
 * @uxpinuseportal
 */
export const Toast = ({ position, message }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        padding: 10,
        minWidth: 300,
        backgroundColor: "#ca8a04",
        color: "white",
        fontSize: 20,
        ...getPositionStyle(position),
      }}
    >
      {message}
    </div>
  );
};

function getPositionStyle(position: Props["position"]) {
  const margin = 20;
  const styles = {
    "top-left": {
      top: margin,
      left: margin,
    },
    "top-right": {
      top: margin,
      right: margin,
    },
    "bottom-left": {
      bottom: margin,
      left: margin,
    },
    "bottom-right": {
      bottom: margin,
      right: margin,
    },
  };
  return styles[position || "bottom-right"];
}
