import {
    MARK_BOLD,
    MARK_CODE,
    MARK_ITALIC,
    MARK_STRIKETHROUGH,
    MARK_SUBSCRIPT,
    MARK_SUPERSCRIPT,
    MARK_UNDERLINE,
    ELEMENT_BLOCKQUOTE,
    ELEMENT_CODE_BLOCK,
    ELEMENT_CODE_LINE,
    KEY_EMOJI,
    MARK_SEARCH_HIGHLIGHT,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6,
    MARK_HIGHLIGHT,
    MARK_KBD,
    ELEMENT_LINK,
    ELEMENT_LI,
    ELEMENT_OL,
    ELEMENT_TODO_LI,
    ELEMENT_UL,
    ELEMENT_IMAGE, 
    ELEMENT_MEDIA_EMBED,
    ELEMENT_MENTION, 
    ELEMENT_MENTION_INPUT,
    ELEMENT_PARAGRAPH,
    ELEMENT_TABLE,
    ELEMENT_TD,
    ELEMENT_TH,
    ELEMENT_TR,
  } from '@udecode/plate-headless';
  
  export type DefaultPlatePluginKey =
    | typeof ELEMENT_BLOCKQUOTE
    | typeof ELEMENT_CODE_BLOCK
    | typeof ELEMENT_CODE_LINE
    | typeof KEY_EMOJI
    | typeof ELEMENT_H1
    | typeof ELEMENT_H2
    | typeof ELEMENT_H3
    | typeof ELEMENT_H4
    | typeof ELEMENT_H5
    | typeof ELEMENT_H6
    | typeof ELEMENT_IMAGE
    | typeof ELEMENT_LI
    | typeof ELEMENT_LINK
    | typeof ELEMENT_MEDIA_EMBED
    | typeof ELEMENT_MENTION
    | typeof ELEMENT_MENTION_INPUT
    | typeof ELEMENT_OL
    | typeof ELEMENT_PARAGRAPH
    | typeof ELEMENT_TABLE
    | typeof ELEMENT_TD
    | typeof ELEMENT_TH
    | typeof ELEMENT_TODO_LI
    | typeof ELEMENT_TR
    | typeof ELEMENT_UL
    | typeof MARK_BOLD
    | typeof MARK_CODE
    | typeof MARK_HIGHLIGHT
    | typeof MARK_ITALIC
    | typeof MARK_KBD
    | typeof MARK_SEARCH_HIGHLIGHT
    | typeof MARK_STRIKETHROUGH
    | typeof MARK_SUBSCRIPT
    | typeof MARK_SUPERSCRIPT
    | typeof MARK_UNDERLINE;