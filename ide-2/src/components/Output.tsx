/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { executeCode } from '../api';

const Output = ({ editorRef, language }: any) => {
  const toast = useToast();
  const [output, setOutput] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setisLoading(true)
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (e: any) {
      console.error(e);
      toast({
        title: 'An error occurred',
        description: e.message || 'Unable to run code',
        status: 'error',
        duration: 6000
      })
    } finally {
      setisLoading(false);
    }

  }
  return (
    <Box w='50%'>
      <Text mb={2} fontSize='lg'>
        Output
      </Text>
      <Button
        variant='outline'
        colorScheme='green'
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        RunCode
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {
          output ? output : 'CLick "Run Code" to see the output here'
        }
      </Box>
    </Box>
  )
}

export default Output
