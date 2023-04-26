import React from 'react';
import {
    TEditableProps, FloatingLink,
    LaunchIcon,
    LinkOffIcon,
    ShortTextIcon,
    useFloatingLinkSelectors,
} from '@udecode/plate-headless';
import { FloatingInputWrapper } from './FloatingInputWrapper';
import { FloatingIconWrapper } from './FloatingIconWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FloatingVerticalDivider } from './FloatingVerticalDivider';
import { plateButtonCls, plateFloatingButtonCls, floatingRootCls } from './FloatingStyles';

export const PlateFloatingLink = ({ readOnly }: TEditableProps) => {
    const isEditing = useFloatingLinkSelectors().isEditing();

    if (readOnly) return null;

    const input = (
        <div className="flex w-[330px] flex-col rounded bg-white text-black shadow-sm">
            <FloatingInputWrapper>
                <FloatingIconWrapper>
                    <FontAwesomeIcon icon={faLink} />
                </FloatingIconWrapper>

                <FloatingLink.UrlInput
                    className="h-8 grow border-none bg-transparent p-0 leading-5 focus:outline-none"
                    placeholder="Paste link"
                />
            </FloatingInputWrapper>

            <div className="h-px bg-gray-200" />

            <FloatingInputWrapper>
                <FloatingIconWrapper>
                    <ShortTextIcon width={18} />
                </FloatingIconWrapper>
                <FloatingLink.TextInput
                    className="h-8 grow border-none bg-transparent p-0 leading-5 focus:outline-none"
                    placeholder="Text to display"
                />
            </FloatingInputWrapper>
        </div>
    );

    const editContent = !isEditing ? (
        <div className="flex flex-row items-center rounded bg-white px-2 py-1 text-black shadow-sm">
            <FloatingLink.EditButton className={plateButtonCls}>
                Edit link
            </FloatingLink.EditButton>

            <FloatingVerticalDivider />

            <FloatingLink.OpenLinkButton className={plateFloatingButtonCls}>
                <LaunchIcon width={18} />
            </FloatingLink.OpenLinkButton>

            <FloatingVerticalDivider />

            <FloatingLink.UnlinkButton className={plateFloatingButtonCls}>
                <LinkOffIcon width={18} />
            </FloatingLink.UnlinkButton>
        </div>
    ) : (
        input
    );

    return (
        <>
            <FloatingLink.InsertRoot className={floatingRootCls}>
                {input}
            </FloatingLink.InsertRoot>

            <FloatingLink.EditRoot className={floatingRootCls}>
                {editContent}
            </FloatingLink.EditRoot>
        </>
    );
};