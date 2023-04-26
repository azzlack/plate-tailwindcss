import React from 'react';
import {
  TableRowElement,
  TableRowElementRootProps,
} from '@udecode/plate-headless';
import tw from 'tailwind-styled-components';

export interface PlateTableRowElementProps extends TableRowElementRootProps {
  hideBorder?: boolean;
}

type RootProps = {
    $hideBorder: boolean;
}
const TableRowElementRoot = tw(TableRowElement.Root)<RootProps>`
    ${({$hideBorder}: RootProps) => $hideBorder && "border-none" }
`

export const PlateTableRowElement = (props: PlateTableRowElementProps) => {
  const { as, children, hideBorder, ...rootProps } = props;

  return (
    <TableRowElementRoot {...rootProps}>
      {children}
    </TableRowElementRoot>
  );
};