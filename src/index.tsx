import React, { useEffect, useState, useMemo } from 'react';
import tw from 'tailwind-styled-components';
import {
  Plate,
  PlateProvider,
  TEditableProps,
  createPlateEditor,
} from '@udecode/plate-headless';
import { MyParagraphElement, MyValue } from './types';
import { BasicElementToolbarButtons } from './ui/toolbar/BasicElementToolbarButtons';
import { BasicMarksToolbarButtons } from './ui/toolbar/BasicMarksToolbarButtons';
import { ListToolbarButtons } from './ui/toolbar/ListToolbarButtons';
import { TableToolbarButtons } from './ui/toolbar/TableToolbarButtons';
import { Toolbar } from './ui/toolbar/Toolbar';
import plugins from './plugins';
import { LinkToolbarButton } from './ui/toolbar/LinkToolbarButton';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Wrapper = tw.div`
`

const InputWrapper = tw.div`
  rounded-xl
  dark:text-white
  dark:bg-neutral-700
  border-b-2
`

export const editableProps: TEditableProps<MyValue> = {
  spellCheck: false,
  autoFocus: false,
  placeholder: 'Write something...',
  className: "px-4 pt-2 pb-4"
};

const defaultValue = [
  {
    type: 'p',
    children: [
      {
        text: '',
      },
    ],
  } as MyParagraphElement,
];

const RichtextEditor: React.FC<{
  id: string;
  className?: string;
  initialValue?: MyValue;
  readOnly?: boolean;
  onChange?: (value: MyValue) => void
}>
  = ({ id, className, initialValue, readOnly, onChange }) => {
    const [internalValue, setInternalValue] = useState<MyValue>(initialValue || defaultValue);

    const editor = useMemo(() => 
      createPlateEditor({
        id: id,
        plugins: plugins
      }), [id])

    const onEditorChanged = (v: MyValue) => {
      setInternalValue(v);

      if (onChange) {
        onChange(v);
      }
    }

    useEffect(() => {
      setInternalValue(initialValue || defaultValue);
      editor.children = (initialValue || defaultValue);
    }, [initialValue])

    if (readOnly) {
      return <Wrapper className={className}>
        <PlateProvider<MyValue> initialValue={internalValue} readOnly={readOnly}>
          <Plate<MyValue> editableProps={editableProps} />
        </PlateProvider>
      </Wrapper>
    }

    return (
      <Wrapper className={className}>
        <InputWrapper>
          <PlateProvider<MyValue> editor={editor} plugins={plugins} initialValue={internalValue} onChange={onEditorChanged}>
            <Toolbar>
              <BasicElementToolbarButtons />
              <BasicMarksToolbarButtons />
              <LinkToolbarButton icon={faLink}/>
              <ListToolbarButtons />
              <TableToolbarButtons />
            </Toolbar>

            <Plate<MyValue> editableProps={editableProps} />
          </PlateProvider>
        </InputWrapper>
      </Wrapper>
    );
  };

export default RichtextEditor;
