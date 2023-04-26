import React from 'react';

import {
  deleteColumn,
  deleteRow,
  insertTable,
  insertTableColumn,
  insertTableRow,
  useEventPlateId,
  someNode,
  getPluginType,
  ELEMENT_TABLE} from '@udecode/plate-headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTable, faTableColumns, faTableRows, faTrash, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useMyPlateEditorRef } from '../../types';
import { TableToolbarButton } from './TableToolbarButton';

const AddRowIcon = () => {
  return <div className="fa-stack">
    <FontAwesomeIcon className="fa-stack-1x" transform="up-2 left-2" icon={faTableRows} />
    <FontAwesomeIcon className="fa-stack-1x" transform="shrink-1 down-6 right-6" icon={faPlusCircle} />
  </div>
}

const RemoveRowIcon = () => {
  return <div className="fa-stack">
    <FontAwesomeIcon className="fa-stack-1x" transform="up-2 left-2" icon={faTableRows} />
    <FontAwesomeIcon className="fa-stack-1x" transform="shrink-1 down-6 right-6" icon={faXmarkCircle} />
  </div>
}

const AddColumnIcon = () => {
  return <div className="fa-stack">
    <FontAwesomeIcon className="fa-stack-1x" transform="up-2 left-2" icon={faTableColumns} />
    <FontAwesomeIcon className="fa-stack-1x" transform="shrink-1 down-6 right-6" icon={faPlusCircle} />
  </div>
}

const RemoveColumnIcon = () => {
  return <div className="fa-stack">
    <FontAwesomeIcon className="fa-stack-1x" transform="up-2 left-2" icon={faTableColumns} />
    <FontAwesomeIcon className="fa-stack-1x" transform="shrink-1 down-6 right-6" icon={faXmarkCircle} />
  </div>
}

export const TableToolbarButtons: React.FC = () => {
  const editor = useMyPlateEditorRef();

  const type = getPluginType(editor, ELEMENT_TABLE);
  const isInTable = (!!editor?.selection && someNode(editor, { match: { type } }));

  return <>
    {!isInTable &&
      <TableToolbarButton
        active={false}
        tooltip={'Table'}
        icon={faTable}
        transform={insertTable}
      />}
    {isInTable && <>
      <TableToolbarButton
        active={false}
        tooltip={'Add Table Row'}
        icon={<AddRowIcon />}
        transform={insertTableRow}
      />
      <TableToolbarButton
        active={false}
        tooltip={'Remove Table Row'}
        icon={<RemoveRowIcon />}
        transform={deleteRow}
      />
      <TableToolbarButton
        active={false}
        tooltip={'Add Table Column'}
        icon={<AddColumnIcon />}
        transform={insertTableColumn}
      />
      <TableToolbarButton
        active={false}
        tooltip={'Remove Table Column'}
        icon={<RemoveColumnIcon />}
        transform={deleteColumn}
      />
    </>}
  </>
};
