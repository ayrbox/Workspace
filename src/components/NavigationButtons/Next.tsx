import React, { FC } from 'react';
import { buttonStyle } from './styles';
import { NavigationButtonProp } from './types';


const Next: FC<NavigationButtonProp> = ({
  onClick,
}: NavigationButtonProp) => (
  <button
    type="button"
    className={buttonStyle}
    onClick={onClick}
  >
    <svg
      className="MuiSvgIcon-root jss966"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="presentation"
    >
      <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
      <path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z" />
    </svg>
  </button>
);

export default Next;
