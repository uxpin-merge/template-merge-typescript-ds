import React, { ReactNode } from 'react';
import '../../styles/styles.scss';

export default function UXPinWrapper({ children }: { children: ReactNode }) {
  return <div className="theme-provider">{children}</div>;
}
