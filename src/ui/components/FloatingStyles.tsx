import tw from "tailwind-styled-components"

export const plateButtonCls = tw`
    relative 
    inline-flex 
    justify-center 
    items-center 
    text-center 
    max-w-full 
    p-0 
    border-0 
    font-medium 
    cursor-pointer 
    bg-white 
    hover:bg-neutral-100 
    active:bg-neutral-200 
    px-2.5 
    py-1
`

export const plateFloatingButtonCls = tw`
    relative 
    inline-flex 
    justify-center 
    items-center 
    text-center 
    max-w-full 
    p-0 
    border-0 
    font-medium 
    cursor-pointer 
    bg-white 
    hover:bg-neutral-100 
    active:bg-neutral-200 
    px-1
    py-1
`

export const floatingRootCls = tw`
    bg-white 
    !z-[9999]
    w-auto
    rounded-md
    shadow-md
`