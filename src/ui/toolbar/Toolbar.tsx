import React, { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
    flex
    justify-start
    md:justify-center
    items-center
    px-4
    py-2
    w-full
    overflow-x-auto
    border-b-[1px]
    border-b-neutral-400
    mb-2
`

export const Toolbar: React.FC<{children?: ReactNode}> = ({ children }) => {
    return <Wrapper>
        {children}
    </Wrapper>
}