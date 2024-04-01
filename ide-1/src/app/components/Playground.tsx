'use client';

import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

interface ICode {
  code: string;
}
import { LiveProvider, LivePreview } from "react-live";
const Playground = ({ code: startcode }: ICode) => {
  const [code, setCode] = useState(startcode);

  const handleOnChnage = (value?: string) => {
    console.log('value', value)
    setCode(value || '');

  }
  return (
    <div className='container'>
      <Editor
        width='50vw'
        height='100vh'
        defaultLanguage='javascript'
        defaultValue={code}
        theme='vs-dark'
        options={{
          fontSize: 14,
          minimap: {
            enabled: false
          },
          contextmenu: false
        }}
        onChange={handleOnChnage}
      />
      <div className='result'>
        <LiveProvider code={code}>
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  )
}

export default Playground;