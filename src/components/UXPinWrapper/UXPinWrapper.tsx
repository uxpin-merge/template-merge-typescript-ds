import React, { ReactNode } from 'react';
import '../../shared/style.scss';

export default function UXPinWrapper({ children }: { children: ReactNode }) {
  return <div className="theme-provider">{children}</div>;
}
