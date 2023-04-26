import React from 'react';
import {
    ELEMENT_OL,
    ELEMENT_UL,
    getPluginType,
} from '@udecode/plate-headless';
import { faList, faListOl } from '@fortawesome/free-solid-svg-icons';
import { useMyPlateEditorRef } from '../../types';
import { ListToolbarButton } from './ListToolbarButton';

export const ListToolbarButtons: React.FC = () => {
    const editor = useMyPlateEditorRef();

    return (
        <div className="mr-2 flex border-r-[1px] border-r-neutral-500/50">
            <ListToolbarButton
                tooltip={'Bullet List'}
                type={getPluginType(editor, ELEMENT_UL)}
                icon={faList}
            />
            <ListToolbarButton
                tooltip={'Ordered List'}
                type={getPluginType(editor, ELEMENT_OL)}
                icon={faListOl}
            />
        </div>
    );
};
