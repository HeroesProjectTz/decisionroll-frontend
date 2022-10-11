import React from 'react'
import AvatarDropDown from './avatardropdown'
import {AiFillDelete} from 'react-icons/ai'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Text,
  } from '@chakra-ui/react'
import InputField from './inputfield'
const Decision = () => {
  return (
    <Box mr={10} mt={10} mb={10}  >
        <AvatarDropDown />
        <InputField />
        <Box backgroundColor="#f3f3f3"  rounded='lg' pt={10} pl={10} pr={10} mr={4} ml={4} shadow='sm' mt={20}>
    <Text color='black' fontWeight='bold' fontSize={20}  >Candidates</Text>
    <Box mt={10}>

    <TableContainer>
  <Table variant='simple' align='left' pl={0} >
    <Thead  >
      <Tr>
        <Th fontWeight='bold' fontSize={15} >Title</Th>
        <Th fontWeight='bold' fontSize={15}>Weight</Th>
        <Th fontWeight='bold' fontSize={15}>Delete</Th>
 
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Testing</Td>
        <Td>10</Td>
        <Td><AiFillDelete color='red' size={20} cursor='pointer' /></Td>
      
  
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    
    </Box>    

    </Box>
    </Box>
  )
}

export default Decision