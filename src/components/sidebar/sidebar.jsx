import React from 'react'
import { Box, Text,Avatar } from '@chakra-ui/react'
import { AiFillDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <Box  pt={20} pl={3} pr={3}>
            <Box rounded='lg' bg='lightgrey' mb={10} pl={4} pr={4} pt={4} pb={4} boxShadow="md" >
            <Avatar name='Luqman' backgroundColor='#7a9695' />
            </Box>
       <Link to='/'>    <Box display='grid' gridTemplateColumns='2rem auto' rounded='md' _hover={{
    background: "lightgrey",
    color: "teal.500",
  }} padding={4}  cursor='pointer' >
                    <AiFillDashboard />
                    <Text>Home</Text>
                
            </Box>
            </Link>
            <Link to='/dashboard/users'>        <Box display='grid' gridTemplateColumns='2rem auto' rounded='md' _hover={{
    background: "lightgrey",
    color: "teal.500",
  }} padding={3}  cursor='pointer' >
                    <AiFillDashboard />
                    <Text>Users</Text>
                
            </Box>
            </Link>
             <Link to='/dashboard/decisions'> 
            <Box display='grid' gridTemplateColumns='2rem auto' rounded='md' _hover={{
                background: "lightgrey",
                color: "teal.500",
            }} padding={3}  cursor='pointer' >
                    <AiFillDashboard />
                    <Text>Decisions</Text>
                
            </Box>
            </Link>
        </Box>  
    )
}

export default SideBar