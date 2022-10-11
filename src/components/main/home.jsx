import React from 'react'
import { Box,Avatar,Text,Stack } from '@chakra-ui/react'
import AvatarDropDown from './avatardropdown'

const Home = () => {
  return (
    <Box mr={6} mt={10} mb={10} ml={6}>
        <AvatarDropDown />
        <Text fontWeight='bold' fontSize={20} >Profile</Text>
       <Box mt={6}> <Text fontWeight='medium' fontSize={15  } >Dashboard</Text></Box>
       <Box  mt={10} backgroundColor='#659abf' pt={40} pb={3} pr={10} pl={10} rounded='md'  >
<Stack direction='row' >
<Avatar size='xl' name='Luqman' backgroundColor='#7a9695'  />
            <Stack direction='column'pt={3} gap={0} > 
            <Text fontWeight='bold'color='white' fontSize={18} >Luqman Tuke</Text>
            <Text fontWeight='medium' color='white' fontSize={14} >luqmantuke@gmail.com</Text>
            </Stack>
      
        </Stack>
       </Box>

    </Box>
  )
}

export default Home