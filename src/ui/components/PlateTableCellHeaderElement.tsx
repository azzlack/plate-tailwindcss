import React from 'react';
import {
  TableCellElement,
  useTableCellElementState,
} from '@udecode/plate-headless';
import { PlateTableCellElementProps } from './PlateTableCellElement';
import tw from 'tailwind-styled-components';

type RootProps = {
    $selected: boolean;
    $hideBorder: boolean;
}
const TableCellElementRoot = tw(TableCellElement.Root)<RootProps>`
  relative 
  p-0 
  overflow-visible 
  border-none
  ${({$hideBorder}: RootProps) => $hideBorder ? "before:border-none" : "before:content-[''] before:box-border before:absolute before:-left-px before:-top-px before:border before:border-solid before:select-none before:border-neutral-400" }
  ${({$selected}: RootProps) => $selected && "before:border-blue-600 before:z-10 before:bg-blue-200"}
`

type HandleProps = {
    $hovered: boolean;
    $readOnly: boolean;
}
const TableCellElementHandle = tw(TableCellElement.Handle)<HandleProps>`
    absolute 
    z-[15] 
    w-1
    -top-3
    -right-1
    h-[calc(100% + 12px)]
    ${({$hovered, $readOnly}: HandleProps) => !$readOnly && $hovered && "bg-blue-400" }
`

export const PlateTableCellHeaderElement = (
  props: PlateTableCellElementProps
) => {
  const { as, children, hideBorder, ...rootProps } = props;

  const { colIndex, rowIndex, readOnly, selected, hovered } = useTableCellElementState();

  return (
    <TableCellElementRoot
      as="th"
      $selected={selected}
      $hideBorder={hideBorder}
      {...rootProps}
    >
      <TableCellElement.Content
        className={`z-1 relative box-border h-full px-3 py-2`}
      >
        {children}
      </TableCellElement.Content>

      <TableCellElement.ResizableWrapper
        className={`group absolute top-0 h-full w-full select-none`}
        colIndex={colIndex}
      >
        <TableCellElement.Resizable rowIndex={rowIndex} colIndex={colIndex} readOnly={readOnly} />

        <TableCellElementHandle
          $hovered={hovered}
          $readOnly={readOnly}
        />
      </TableCellElement.ResizableWrapper>
    </TableCellElementRoot>
  );
};