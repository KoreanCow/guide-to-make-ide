import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Output = () => {
  return (
    <Box w='50%'>
      <Text mb={2} fontSize='lg'>
        Output
      </Text>
      <Button
        variant='outline'
        colorScheme='green'
        mb={4}
      >
        RunCode
      </Button>
      <Box
        height='75vh'>


      </Box>
    </Box>
  )
}

export default Output
