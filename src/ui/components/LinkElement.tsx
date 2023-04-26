import React from 'react';
import { Link, LinkRootProps } from '@udecode/plate-headless';

export const LinkElement: React.FC<LinkRootProps> = (props) => {

  return <Link.Root {...props}/>;
};