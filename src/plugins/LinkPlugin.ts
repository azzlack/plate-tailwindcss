import { LinkPlugin, RenderAfterEditable } from '@udecode/plate-headless';
import { MyPlatePlugin, MyValue } from '../types';
import { PlateFloatingLink } from '../ui/components/PlateFloatingLink';

export const linkPlugin: Partial<MyPlatePlugin<LinkPlugin>> = {
  renderAfterEditable: PlateFloatingLink as RenderAfterEditable<MyValue>,
};
