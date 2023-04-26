import React from 'react';
import {
  TableCellElement,
  TableCellElementRootProps,
  useTableCellElementState,
} from '@udecode/plate-headless';
import tw from 'tailwind-styled-components';

export interface PlateTableCellElementProps extends TableCellElementRootProps {
  hideBorder?: boolean;
}

type RootProps = {
    $selected: boolean;
    $hideBorder: boolean;
}
const TableCellElementRoot = tw(TableCellElement.Root)<RootProps>`
    relative 
    p-0 
    overflow-visible 
    border-none
    before:w-[calc(100%_+_1px)]
    before:h-[calc(100%_+_1px)]
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
    -top-[12px]
    -right-[1.5px]
    h-[calc(100%_+_12px)]
    ${({$hovered, $readOnly}: HandleProps) => !$readOnly && $hovered && "bg-blue-400" }
`

export const PlateTableCellElement = (props: PlateTableCellElementProps) => {
  const { as, children, hideBorder, ...rootProps } = props;

  const { colIndex, rowIndex, readOnly, selected, hovered } = useTableCellElementState();

  return (
    <TableCellElementRoot
      $selected={selected}
      $hideBorder={hideBorder}
      {...rootProps}
    >
      <TableCellElement.Content
        className={`relative z-10 box-border h-full px-3 py-2`}
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