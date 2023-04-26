import React from 'react';
import { ElementPopover, PopoverProps, useElement } from '@udecode/plate-headless';
import RemoveNodeButton from './RemoveNodeButton';

export const PlateTablePopover = ({ children, ...props }: PopoverProps) => {
  const element = useElement();

  return (
    <ElementPopover
      content={
        <div className="z-[10000] flex flex-col rounded bg-white px-3 py-2 text-black shadow-sm">
          <RemoveNodeButton
            element={element}
            className="px-0 py-1 text-neutral-900 hover:text-neutral-600"
            contentEditable={false}
          />
        </div>
      }
      {...props}
    >
      {children}
    </ElementPopover>
  );
};