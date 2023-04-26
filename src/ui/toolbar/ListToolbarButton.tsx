import React from 'react';
import {
  focusEditor,
} from '@udecode/plate-headless';
import { ELEMENT_UL, getListItemEntry, toggleList } from '@udecode/plate-headless';
import { BlockToolbarButton } from './BlockToolbarButton';
import { ToolbarButtonProps } from './ToolbarButton';
import { useMyPlateEditorRef } from '../../types';

export const ListToolbarButton = ({
  type = ELEMENT_UL,
  ...props
}: ToolbarButtonProps & { type?: string }) => {
  const editor = useMyPlateEditorRef();

  const res = !!editor?.selection && getListItemEntry(editor);

  return (
    <BlockToolbarButton
      active={!!res && res.list[0].type === type}
      type={type}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        toggleList(editor, { type });
        focusEditor(editor);
      }}
      {...props}
    />
  );
};