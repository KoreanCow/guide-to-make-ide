import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import { useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../contants';
import Output from './Output';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState<string>('');
  const [language, setLanguage] = useState<string>('javascript');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  }

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  }
  return (
    <Box>
      <HStack spacing={4}>
        <Box w='50%'>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height='75vh'
            theme='vs-dark'
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value || '')}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  )
}

export default CodeEditor
