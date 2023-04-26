import React from 'react';
import {
  TableElement,
  TableElementRootProps,
  useTableElementState,
} from '@udecode/plate-headless';
import { PlateTablePopover } from './PlateTablePopover';
import tw from 'tailwind-styled-components';

type RootProps = {
    $isSelectingCell: boolean;
}
const Root = tw(TableElement.Root)<RootProps>`
  table 
  table-fixed 
  w-full 
  h-px 
  my-4 
  ml-px 
  mr-0 
  border-collapse
  bg-neutral-500/50
`

export const PlateTableElement = (props: TableElementRootProps) => {
  const { as, children, ...rootProps } = props;

  const { colSizes, isSelectingCell } = useTableElementState();

  return (
    <Root
      $isSelectingCell={isSelectingCell}
      {...rootProps}
    >
      <TableElement.ColGroup>
        {colSizes.map((width: number, index: number) => (
          <TableElement.Col
            key={index}
            style={{
              minWidth: 48,
              width: width || undefined,
            }}
          />
        ))}
      </TableElement.ColGroup>

      <PlateTablePopover>
        <TableElement.TBody className={`min-w-full`}>{children}</TableElement.TBody>
      </PlateTablePopover>
    </Root>
  );
};