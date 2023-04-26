import {
  focusEditor,
  getPluginType,
  someNode,
} from '@udecode/plate-headless';
import { ELEMENT_TABLE } from '@udecode/plate-headless';
import { ToolbarButton, ToolbarButtonProps } from './ToolbarButton';
import { MyEditor, useMyPlateEditorRef } from '../../types';

export interface TableToolbarButtonProps extends ToolbarButtonProps {
  header?: boolean;
  transform: (editor: MyEditor, options: { header?: boolean }) => void;
}

export const TableToolbarButton: React.FC<TableToolbarButtonProps> = ({
  transform,
  header,
  ...props
}) => {
  const editor = useMyPlateEditorRef();
  
  const type = getPluginType(editor, ELEMENT_TABLE);
  const active = !!editor?.selection && someNode(editor, { match: { type } });

  return (
    <ToolbarButton
      active={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        transform(editor, { header });

        focusEditor(editor);
      }}
      {...props}
    />
  );
};