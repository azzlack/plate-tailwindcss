import React from 'react';
import {
  getPluginType,
  someNode,
  ELEMENT_LINK,
  triggerFloatingLink,
} from '@udecode/plate-headless';
import { ToolbarButton, ToolbarButtonProps } from './ToolbarButton';
import { useMyPlateEditorRef } from '../../types';

export interface LinkToolbarButtonProps extends ToolbarButtonProps {
  /**
   * Default onClick is getting the link url by calling this promise before inserting the image.
   */
  getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
}

export const LinkToolbarButton: React.FC<LinkToolbarButtonProps> = ({
  ...props
}: LinkToolbarButtonProps) => {
  const editor = useMyPlateEditorRef();

  const type = getPluginType(editor, ELEMENT_LINK);
  const isLink = !!editor?.selection && someNode(editor, { match: { type } });

  return (
    <ToolbarButton
      tooltip="Link"
      active={isLink}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        triggerFloatingLink(editor, { focused: true });
      }}
      {...props}
    />
  );
};