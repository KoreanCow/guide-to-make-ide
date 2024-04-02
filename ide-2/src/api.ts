import axios from 'axios'
import { LANGUAGE_VERSIONS } from './contants';

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const executeCode = async (language: string, sourceCode: any) => {
  const response = await API.post('/execute', {
    'language': language,
    'version': LANGUAGE_VERSIONS[language],
    'files': [
      {
        'content': sourceCode
      }
    ]
  });
  return response.data;

}