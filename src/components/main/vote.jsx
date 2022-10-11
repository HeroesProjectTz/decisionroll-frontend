import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Flex,
    Button,
    Text,
  } from '@chakra-ui/react'
import InputField from './inputfield'
import AvatarDropDown from './avatardropdown'

const Vote = () => {
  return (
    <Box margin={10}>
   <AvatarDropDown />     
    <Box backgroundColor="#f3f3f3"  rounded='lg' pt={10} pl={10} pr={10} mr={4} ml={4} shadow='sm' mt={15}pb={15}>
    <Box backgroundColor='#FFC107' borderRadius='8px' maxWidth='60px' mb={15}>
        <Text color='white' align='center'>Init</Text>
    </Box>
   <Flex justify='space-between' mt={15}> 
    <Text>Participants</Text>
    <Text>10</Text>
   </Flex>
   <Flex justify='space-between' mt={15} > 
    <Text>Voting Power</Text>
    <Text>10</Text>
   </Flex>
    </Box>
    <Box backgroundColor="#f3f3f3"  rounded='lg' pt={10} pb={10} pl={10} pr={10} mr={4} ml={4} shadow='sm' mt={20}>
    <Text color='black' fontWeight='bold' fontSize={20}  >Candidates</Text>
    <Box mt={10}>

    <TableContainer>
  <Table variant='simple' align='left' pl={0} >
    <Thead  >
      <Tr>
        <Th fontWeight='bold' fontSize={15} >Title</Th>
        <Th fontWeight='bold' fontSize={15}>Weight</Th>
        <Th fontWeight='bold' fontSize={15}>Vote</Th>
        <Th fontWeight='bold' fontSize={15}>Increase</Th>
        <Th fontWeight='bold' fontSize={15}>Decrease</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Testing</Td>
        <Td>50</Td>
        <Td>4</Td>
        <td ><Button colorScheme='teal' variant='solid' size='md'>
       Increase
     </Button></td>
     <td ><Button colorScheme='red' variant='solid' size='md'>
       Decrease
     </Button></td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    
    </Box>    

    </Box>
    <InputField/>
    </Box>
  )
}

export default Vote