import React, { ReactElement, useContext } from 'react';
import { style } from 'typestyle';
import { color } from 'csx';

import AdminViewContext from '../AdminContext';
import { WORKSPACES, WorkspaceType } from '../../../constants';

const workspaceList = style({
  padding: '20px',
  margin: '20px auto',
  textAlign: 'center'
});

const workspaceListItemStyle = {
  display: 'inline-block',
  padding: '16px',
  cursor: 'pointer'
};

const Workspaces = (): ReactElement => {
  const {
    workspace: { key: selectedWorkspacekey },
    selectWorkspace
  } = useContext(AdminViewContext);

  const handleSelectWorkspace = (w: WorkspaceType) => (): void => {
    selectWorkspace(w);
  };

  return (
    <ul className={workspaceList}>
      {WORKSPACES.map(workspace => {
        const { key, description, color: backColor } = workspace;
        const selected: boolean = selectedWorkspacekey === key;
        const bgColor = color(backColor);

        const itemClass = style({
          ...workspaceListItemStyle,
          backgroundColor: bgColor.toHexString(),
          border: `5px solid ${selected ? bgColor.darken('20%') : 'transparent'}`,
        });
        return (
          <li
            role="menuitem"
            key={key}
            className={itemClass}
            onClick={handleSelectWorkspace(workspace)}
            onKeyUp={(): void => {}}>
            {description}
          </li>
        );
      })}
    </ul>
  );
};

export default Workspaces;
