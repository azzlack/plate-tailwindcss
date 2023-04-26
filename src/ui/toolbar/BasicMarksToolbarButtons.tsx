import React from 'react';
import {
    getPluginType,
    MARK_BOLD,
    MARK_ITALIC,
    MARK_STRIKETHROUGH,
    MARK_UNDERLINE,
} from '@udecode/plate-headless';
import { useMyPlateEditorRef } from '../../types';
import { faBold, faItalic, faStrikethrough, faUnderline } from '@fortawesome/free-solid-svg-icons';
import { MarkToolbarButton } from './MarkToolbarButton';

export const BasicMarksToolbarButtons: React.FC = () => {
    const editor = useMyPlateEditorRef();

    return (
        <div className="mr-2 flex border-r-[1px] border-r-neutral-500/50">
            <MarkToolbarButton
                tooltip={'Bold (⌘+B)'}
                type={getPluginType(editor, MARK_BOLD)}
                icon={faBold}
            />
            <MarkToolbarButton
                tooltip={'Italic (⌘+I)'}
                type={getPluginType(editor, MARK_ITALIC)}
                icon={faItalic}
            />
            <MarkToolbarButton
                tooltip={"Underline (⌘+U)"}
                type={getPluginType(editor, MARK_UNDERLINE)}
                icon={faUnderline}
            />
            <MarkToolbarButton
                tooltip={"Strikethrough (⌘+⇧+M)"}
                type={getPluginType(editor, MARK_STRIKETHROUGH)}
                icon={faStrikethrough}
            />
        </div>
    );
};