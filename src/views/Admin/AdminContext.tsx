import React from 'react';
import { WorkspaceType, UNKNOWN_WORKSPACE } from '../../constants';

type AdminViewContext = {
  workspace: WorkspaceType;
  selectWorkspace: (workspace: WorkspaceType) => void;
};

export default React.createContext<AdminViewContext>({
  workspace: UNKNOWN_WORKSPACE,
  selectWorkspace: () => undefined,
});
