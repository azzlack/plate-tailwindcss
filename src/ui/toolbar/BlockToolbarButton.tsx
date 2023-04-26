import React from 'react';
import {
  focusEditor,
  someNode,
  toggleNodeType,
} from '@udecode/plate-headless';
import { ToolbarButton, ToolbarButtonProps } from './ToolbarButton';
import { useMyPlateEditorRef } from '../../types';

export interface BlockToolbarButtonProps extends ToolbarButtonProps {
  type: string;
  inactiveType?: string;
}

/**
 * Toolbar button to toggle the type of elements in selection.
 */
export const BlockToolbarButton = ({
  type,
  inactiveType,
  active: _active,
  ...props
}: BlockToolbarButtonProps) => {
  const editor = useMyPlateEditorRef();

  const active =
    _active ?? (!!editor?.selection && someNode(editor, { match: { type } }));

  return (
    <ToolbarButton
      active={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        toggleNodeType(editor, { activeType: type, inactiveType });
        focusEditor(editor);
      }}
      {...props}
    />
  );
};