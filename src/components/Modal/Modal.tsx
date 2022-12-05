type Props = {
  size?: "s" | "m";
  theme?: "dark" | "light";
};

/**
 * @uxpinuseportal
 * @uxpindocurl https://bestofjs2.org
 */
export const Modal = ({ size, theme }: Props) => {
  return (
    <div>
      Hello Modal! {size || "?"} {theme || "?"}
    </div>
  );
};
