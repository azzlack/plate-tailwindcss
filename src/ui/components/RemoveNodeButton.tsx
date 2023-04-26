import React from 'react';
import {
  findNodePath,
  removeNodes,
  TElement,
  useEditorRef,
} from '@udecode/plate-headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RemoveNodeButton: React.FC<{
  className?: string;
  element: TElement;
  contentEditable?: boolean;
}> = ({className, element, contentEditable}, props) => {
  const editor = useEditorRef();

  return (
    <button
      className={className}
      contentEditable={contentEditable}
      onClick={() => {
        const path = findNodePath(editor, element);
        removeNodes(editor, { at: path });
      }}
      {...props}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default RemoveNodeButton;