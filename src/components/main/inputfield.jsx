import React from 'react'
import { Box,Stack,Input,Button } from '@chakra-ui/react'

const InputField = () => {
  return (
    <Box  backgroundColor="#f3f3f3"  borderRadius='lg' rounded='lg' pt={10} pl={5}  pr={5} ml={8} mr={8}  shadow='sm' mt={6} pb={7}>
    <Input placeholder='large size' size='lg'  backgroundColor='white' variant='filled' pt={8} pb={8} />
    <Stack direction='row' align='right' justify='flex-end' mt={6}>
     <Button colorScheme='teal' variant='solid'>
       Button
     </Button>
     </Stack>
    </Box>
  )
}

export default InputField