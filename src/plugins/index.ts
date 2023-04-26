import { createMyPlugins, MyPlatePlugin } from '../types';
import { createPlateUI } from '../ui/createPlateUI';
import {
  AnyObject,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createHeadingPlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createParagraphPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createUnderlinePlugin,
} from '@udecode/plate-headless';
import { linkPlugin } from './LinkPlugin';

const plugins: MyPlatePlugin<AnyObject>[] = createMyPlugins(
  [
    createLinkPlugin(linkPlugin),
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),
    createParagraphPlugin(),
    createBoldPlugin(),
    createCodePlugin(),
    createItalicPlugin(),
    createStrikethroughPlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createUnderlinePlugin(),
    createListPlugin(),
    createTablePlugin()
  ],
  {
    components: createPlateUI(),
  },
);

export default plugins;
