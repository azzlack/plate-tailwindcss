import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { HTMLProps, ReactNode } from 'react';
import { PlateId } from "@udecode/plate-headless"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'tailwind-styled-components';

export interface ToolbarButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'id' | 'as' | 'type'> {
  /**
   * Is it active.
   */
  active?: boolean;

  /**
   * Icon of the button.
   */
  icon: IconDefinition | ReactNode;

  tooltip?: string;

  /**
   * Handler to use to actionate the button.
   * @default onClick
   */
  actionHandler?: 'onClick' | 'onMouseDown';
}

type ButtonProps = {
    $active: boolean;
}
const Button = tw.button<ButtonProps>`
    flex 
    justify-center 
    items-center 
    select-none 
    cursor-pointer 
    align-middle
    w-[32px] 
    h-[32px]
    mr-1
    bg-transparent 
    border-none
    outline-none 
    hover:bg-neutral-800/50 
    transition-colors
    text-current
    rounded
    ${({$active}: ButtonProps) => $active && "bg-neutral-800 hover:bg-neutral-800"}
`

export const ToolbarButton = (props: ToolbarButtonProps) => {
  const {
    active,
    icon,
    className,
    tooltip,
    onClick,
    ...buttonProps
  } = props;

  return (
    <Button
      $active={active}
      className={className}
      onClick={onClick}
      data-testid="ToolbarButton"
      type="button"
      aria-label={tooltip}
      {...buttonProps}
    >
      {(icon as IconDefinition).iconName ? <FontAwesomeIcon icon={icon as IconDefinition} /> : icon}
    </Button>
  );
};