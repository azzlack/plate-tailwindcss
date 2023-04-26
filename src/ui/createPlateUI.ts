import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_LI,
  ELEMENT_LINK,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TODO_LI,
  ELEMENT_TR,
  ELEMENT_UL,
  MARK_BOLD,
  MARK_CODE,
  MARK_COMMENT,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_KBD,
  MARK_SEARCH_HIGHLIGHT,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  PlatePluginComponent,
  withProps,
} from '@udecode/plate-headless';
import tw from 'tailwind-styled-components';
import { DefaultPlatePluginKey } from '../types/DefaultPlatePluginKey';
import BaseElement from './components/BaseElement';
import BaseLeaf from './components/BaseLeaf';
import { BlockquoteElement } from './components/BlockquoteElement';
import { LinkElement } from './components/LinkElement';
import { PlateTableCellElement } from './components/PlateTableCellElement';
import { PlateTableCellHeaderElement } from './components/PlateTableCellHeaderElement';
import { PlateTableElement } from './components/PlateTableElement';
import { PlateTableRowElement } from './components/PlateTableRowElement';
  
export const createPlateUI = <T extends string = string>(
  overrideByKey?: Partial<
    Record<DefaultPlatePluginKey | T, PlatePluginComponent>
  >
) => {
  const components = {
    [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
    // [ELEMENT_CODE_BLOCK]: CodeBlockElement,
    // [ELEMENT_CODE_LINE]: CodeLineElement,
    // [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
    // [ELEMENT_HR]: HrElement,
    [ELEMENT_H1]: withProps(BaseElement, {
      as: 'h1',
      className: 'mt-8 mx-0 mb-2 text-2xl'
    }),
    [ELEMENT_H2]: withProps(BaseElement, {
      as: 'h2',
      className: 'mt-5 mx-0 mb-1 text-xl text-bold'
    }),
    [ELEMENT_H3]: withProps(BaseElement, {
      as: 'h3',
      className: 'mt-4 mx-0 mb-1 text-lg text-bold'
    }),
    [ELEMENT_H4]: withProps(BaseElement, {
      as: 'h4',
      className: 'mt-3 mx-0 mb-0 text-lg'
    }),
    [ELEMENT_H5]: withProps(BaseElement, {
      as: 'h5',
      className: 'mt-3 mx-0 mb-0 text-base text-bold'
    }),
    [ELEMENT_H6]: withProps(BaseElement, {
      as: 'h6',
      className: 'mt-3 mx-0 mb-0 text-base'
    }),
    // [ELEMENT_IMAGE]: ImageElement,
    [ELEMENT_LI]: withProps(BaseElement, { 
      as: 'li',
      className: ""
    }),
    // [ELEMENT_TODO_LI]: TodoListElement,
    [ELEMENT_LINK]: LinkElement,
    // [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
    // [ELEMENT_MENTION]: MentionElement,
    // [ELEMENT_MENTION_INPUT]: MentionInputElement,
    [ELEMENT_UL]: withProps(BaseElement, {
      as: 'ul',
      className: 'm-0 pl-8 list-disc'
    }),
    [ELEMENT_OL]: withProps(BaseElement, {
      as: 'ol',
      className: 'm-0 pl-8 list-decimal'
    }),
    [ELEMENT_PARAGRAPH]: withProps(BaseElement, {
      as: 'p',
      className: 'px-0 py-1 m-0'
    }),
    [ELEMENT_TABLE]: PlateTableElement,
    [ELEMENT_TD]: PlateTableCellElement,
    [ELEMENT_TH]: PlateTableCellHeaderElement,
    [ELEMENT_TR]: PlateTableRowElement,
    [MARK_BOLD]: withProps(BaseLeaf, { as: 'strong' }),
    [MARK_CODE]: withProps(BaseLeaf, {
      as: 'code',
      className: tw`whitespace-pre-wrap text-sm font-mono bg-neutral-200 rounded-sm px-2 py-1`
    }),
    [MARK_HIGHLIGHT]: withProps(BaseLeaf, {
      as: 'mark',
      className: "bg-yellow-100"
    }),
    [MARK_ITALIC]: withProps(BaseLeaf, { as: 'em' }),
    [MARK_KBD]: withProps(BaseLeaf, {
      as: 'kbd',
      className: 'whitespace-pre-wrap text-sm font-monospace bg-white border-[1px] border-black radius-[3px] px-2 py-1 mr-2'
    }),
    [MARK_SEARCH_HIGHLIGHT]: withProps(BaseLeaf, {
      as: 'span',
      className: "bg-yellow-200"
    }),
    [MARK_STRIKETHROUGH]: withProps(BaseLeaf, { as: 's' }),
    [MARK_SUBSCRIPT]: withProps(BaseLeaf, { as: 'sub' }),
    [MARK_SUPERSCRIPT]: withProps(BaseLeaf, { as: 'sup' }),
    [MARK_UNDERLINE]: withProps(BaseLeaf, { as: 'u' }),
  };
  
  if (overrideByKey) {
    Object.keys(overrideByKey).forEach((key) => {
      (components as any)[key] = (overrideByKey as any)[key];
    });
  }

  return components as Record<DefaultPlatePluginKey | T, PlatePluginComponent>;
};