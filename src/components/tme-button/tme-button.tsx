import './tme-button.scss';

import React, { ReactNode, useState } from 'react';

import { Button, Icon } from 'semantic-ui-react';

import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

/* eslint-disable-next-line */

import caretRightBrand from '../shared/assets/caret-right/caret-right-brand.svg';

import caretRightWhite from '../shared/assets/caret-right/caret-right-white.svg';

import caretRightNew from '../shared/assets/caret-right/caret-right-new.svg';

import caretRightGray5 from '../shared/assets/caret-right/caret-right-gray5.svg';

import caretRightGray9 from '../shared/assets/caret-right/caret-right-gray9.svg';

export interface TmeButtonProps {
  children: ReactNode;

  buttonType?:
    | 'button-primary'
    | 'button-secondary'
    | 'button-link'
    | 'button-primary-inverted'
    | 'button-secondary-inverted'
    | 'button-link-inverted';

  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;

  id?: string;

  icon?: SemanticICONS;

  type?: 'submit' | 'reset' | 'button';

  disabled?: boolean;

  loader?: boolean;

  className?: string;

  active?: boolean;

  size?: 'medium' | 'small' | '';
}

export default function TmeButton(props: TmeButtonProps) {
  const { onClick, id, type, disabled, icon, buttonType, children, loader, className, active, size } = props;

  const Styles: string[] = [
    'button-primary',
    'button-secondary',
    'button-link',
    'button-primary-inverted',
    'button-secondary-inverted',
    'button-link-inverted',
  ];

  const sizes = {
    medium: 'btn-medium',

    small: 'btn-small',
  };

  const checkButtonStyle = buttonType && Styles.includes(buttonType) ? buttonType : Styles[0];

  const [isHover, setIsHover] = useState(false);

  let checkButtonActive, checkButtonDisabled;

  if (checkButtonStyle === Styles[0]) {
    checkButtonDisabled = disabled && 'disabled-primary';

    checkButtonActive = active && 'active-primary';
  } else if (checkButtonStyle === Styles[1]) {
    checkButtonDisabled = disabled && 'disabled-secondary';

    checkButtonActive = active && 'active-secondary';
  } else if (checkButtonStyle === Styles[2]) {
    checkButtonDisabled = disabled && 'disabled-link';

    checkButtonActive = active && 'active-link';
  } else if (checkButtonStyle === Styles[3]) {
    checkButtonDisabled = disabled && 'disabled-primary-inverted';

    checkButtonActive = active && 'active-primary-inverted';
  } else if (checkButtonStyle === Styles[4]) {
    checkButtonDisabled = disabled && 'disabled-secondary-inverted';

    checkButtonActive = active && 'active-secondary-inverted';
  } else if (checkButtonStyle === Styles[5]) {
    checkButtonDisabled = disabled && 'disabled-link-inverted';

    checkButtonActive = active && 'active-link-inverted';
  }

  const renderCaretIcon = () => {
    let displayedCaret = caretRightBrand;

    if (checkButtonStyle === Styles[2]) {
      if (active === true || isHover) {
        displayedCaret = caretRightNew;
      } else if (disabled === true) {
        displayedCaret = caretRightGray5;
      } else {
        displayedCaret = caretRightBrand;
      }

      return <img src={displayedCaret} className={`right-caret-icon`} alt="caret-icon" />;
    } else if (checkButtonStyle === Styles[5]) {
      if (active === true || isHover) {
        displayedCaret = caretRightNew;
      } else if (disabled === true) {
        displayedCaret = caretRightGray9;
      } else {
        displayedCaret = caretRightWhite;
      }

      return <img src={displayedCaret} className={`right-caret-icon`} alt="caret-icon" />;
    } else {
      return null;
    }
  };

  const checkButtonSize = size ? (size === 'medium' && sizes.medium) || (size === 'small' && sizes.small) : '';

  return (
    <Button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onFocus={() => setIsHover(true)}
      onBlur={() => setIsHover(false)}
      className={`${className} btn ${checkButtonStyle}

        ${checkButtonDisabled} ${checkButtonActive} ${checkButtonSize}`}
      id={id}
      loading={loader}
      onClick={onClick}
      type={type}
      disabled={disabled}
      active={active}
    >
      {icon && <Icon name={icon} />}

      {children}

      {renderCaretIcon()}
    </Button>
  );
}
