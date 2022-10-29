import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Text
  } from '@chakra-ui/react'
import AvatarDropDown from './avatardropdown'


const Users = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    console.log(users)
    const sse = new EventSource('https://chuomall.xyz/users/', {
      method: 'POST',
    });

    function handleStream(e) {
      let resp = e.data;
      let result = resp.substring(0, resp.length - 1);
      setUsers(JSON.parse(result));
      // console.log(JSON.parse(result));
    }

    sse.onmessage = (e) => {
      handleStream(e);
    };

    sse.onerror = (e) => {
      //GOTCHA - can close stream and 'stall'
      sse.close();
    };

    return () => {
      sse.close();
    };
  });

  return (

    <Box mt={14} mr={4}> 
        <AvatarDropDown/>
    <Box backgroundColor="#f3f3f3"  rounded='lg' pt={10} pl={10} pr={10} mr={4} ml={4} shadow='sm' mt={20}>
    <Text color='black' fontWeight='bold' fontSize={20}  >Users</Text>
    <Box mt={10}>

    <TableContainer>
  <Table variant='simple' align='left' pl={0} >
    <Thead  >
      <Tr>
        <Th fontWeight='bold' fontSize={15} >Username</Th>
        <Th fontWeight='bold' fontSize={15}>Email</Th>
        <Th fontWeight='bold' fontSize={15}>Created At</Th>
        <Th fontWeight='bold' fontSize={15}>Last SignIn</Th>
      </Tr>
    </Thead>
    <Tbody>
      {users ? users.map((row, i)=>( <Tr  key={i}>
        <Td>{row.username}</Td>
        <Td>{row.email}</Td>
        <Td>{row.createdAt}</Td>
        <Td>{row.lastSignIn}</Td>
      </Tr>)
      ) :                         <div>There no any data yet</div>

      }
     
    </Tbody>
  </Table>
</TableContainer>
    
    </Box>    

    </Box>
    </Box>
  )
  
}

export default Users