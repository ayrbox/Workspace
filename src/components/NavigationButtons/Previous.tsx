import React, { FC, ReactElement } from 'react';
import { buttonStyle } from './styles';
import { NavigationButtonProp } from './types';

const Previous: FC<NavigationButtonProp> = ({ onClick }: NavigationButtonProp): ReactElement => 
  <button type="button" className={buttonStyle} onClick={onClick}>
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
      <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
      <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
    </svg>
  </button>
;

export default Previous;
