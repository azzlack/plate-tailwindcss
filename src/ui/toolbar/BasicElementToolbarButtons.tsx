import {
    ELEMENT_BLOCKQUOTE,
    ELEMENT_H2,
    ELEMENT_H3,
    getPluginType,
    useEventPlateId
} from '@udecode/plate-headless';
import { useMyPlateEditorRef } from '../../types';
import { faH2, faH3, faQuotes } from '@fortawesome/free-solid-svg-icons';
import { BlockToolbarButton } from './BlockToolbarButton';

export const BasicElementToolbarButtons: React.FC = () => {
    const editor = useMyPlateEditorRef();

    return (
        <div className="mr-2 flex border-r-[1px] border-r-neutral-500/50">
            <BlockToolbarButton
                tooltip={"Heading 2"}
                type={getPluginType(editor, ELEMENT_H2)}
                icon={faH2}
            />
            <BlockToolbarButton
                tooltip={"Heading 3"}
                type={getPluginType(editor, ELEMENT_H3)}
                icon={faH3}
            />
            <BlockToolbarButton
                tooltip={"Block Quote (⌘+⇧+.)"}
                type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
                icon={faQuotes}
            />
        </div>
    );
};