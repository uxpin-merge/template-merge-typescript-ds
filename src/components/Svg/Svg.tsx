import React from 'react';
import logo from '../../shared/assets/svg/demo.svg';
export default function Svg(props: any) {
  return (
    <div style={{ display: 'grid' }}>
      <img src={logo} alt="A Rectangle Image with SVG" />
    </div>
  );
}
