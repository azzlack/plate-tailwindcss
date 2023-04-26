import React from 'react';
import {
    focusEditor,
    isMarkActive,
    toggleMark,
    Value,
    ToggleMarkPlugin,
    WithPlatePlugin,
} from '@udecode/plate-headless';
import { ToolbarButton, ToolbarButtonProps } from './ToolbarButton';
import { useMyPlateEditorRef } from '../../types';

export interface MarkToolbarButtonProps<V extends Value> extends ToolbarButtonProps,
    Pick<WithPlatePlugin<V>, 'type'>,
    Pick<ToggleMarkPlugin, 'clear'> {
}

/**
 * Toolbar button to toggle the mark of the leaves in selection.
 */
export const MarkToolbarButton = <V extends Value>({
    type,
    clear,
    ...props
}: MarkToolbarButtonProps<V>) => {
    const editor = useMyPlateEditorRef();

    return (
        <ToolbarButton
            active={!!editor?.selection && isMarkActive(editor, type!)}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                toggleMark(editor, { key: type!, clear });
                focusEditor(editor);
            }}
            {...props}
        />
    );
};
