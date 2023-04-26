import React, { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

const Blockquote = tw.blockquote`
    border-l-2
    pt-3
    pr-5
    pb-3
    pl-4
`

export const BlockquoteElement: React.FC<{
    className?: string;
    children?: ReactNode;
}> = ({ className, children }, props) => {

    return (
        <Blockquote
            {...props}
            className={className}
        >
            {children}
        </Blockquote>
    );
};