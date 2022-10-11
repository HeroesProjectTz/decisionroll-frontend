import React from 'react'
import AvatarDropDown from './avatardropdown'
import InputField from './inputfield'
import { Link } from 'react-router-dom'
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
    Button
  } from '@chakra-ui/react'

const Decisions = () => {
  return (
    <Box mr={6} mt={10}  mb={6} ml={6}>
 <AvatarDropDown />

 <InputField />
 <Box backgroundColor="#f3f3f3"  rounded='lg' pt={10} pl={10} pr={10} mr={4} ml={4} shadow='sm' mt={20}>
    <Text color='black' fontWeight='bold' fontSize={20}  >Decisions</Text>
    <Box mt={10}>

    <TableContainer>
  <Table variant='simple' align='left' pl={0} >
    <Thead  >
      <Tr>
        <Th fontWeight='bold' fontSize={15} >Decision</Th>
        <Th fontWeight='bold' fontSize={15}>Created At</Th>
        <Th fontWeight='bold' fontSize={15}>State</Th>
        <Th fontWeight='bold' fontSize={15}>Created by</Th>
        <Th fontWeight='bold' fontSize={15}>View</Th>
        <Th fontWeight='bold' fontSize={15}>Vote</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Testing</Td>
        <Td>29-09-2022 1021</Td>
        <Td>Open</Td>
        <td>Luqman Tuke</td>
        <td > <Link to='/dashboard/decision/1'> <Button colorScheme='teal' variant='solid' size='md'>
       View
     </Button></Link></td>
     <td > <Link to='/dashboard/vote/1'> <Button colorScheme='blue' variant='solid' size='md'>
       Vote
     </Button></Link></td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    
    </Box>    

    </Box>
    </Box>
  )
}

export default Decisions