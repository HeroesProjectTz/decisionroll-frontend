import React from 'react'
import AvatarDropDown from './avatardropdown'
import InputField from './inputfield'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Stack,
    Input,
    Text,
    Button
  } from '@chakra-ui/react'

const Decisions = () => {
  const [decisions, setDecisions] = useState([]);
  const { user } = useAuth();
  const [openOne, setOpenOne] = useState(false);
  const [Error, setError] = useState('')
  const [decisionTitle, setdecisionTitle] = useState('')

  useEffect(() => {
    const sse = new EventSource('https://chuomall.xyz/decisions/', {
      method: 'POST',
    });

    function handleStream(e) {
      const resp = e.data;
      const result = resp.substring(0, resp.length - 1);
      setDecisions(JSON.parse(result));
      // console.log(JSON.parse(result));
    }

    sse.onmessage = (e) => {
      handleStream(e);
    };

    sse.onerror = (e) => {
      // GOTCHA - can close stream and 'stall'
      sse.close();
    };

    return () => {
      sse.close();
    };
  });

  const handleOnChange = (e)=>setdecisionTitle(e.target.value);

  setTimeout(() => {
    setOpenOne(false);
  }, 6500);

  const newDecision = () => {
    if(decisionTitle !== ''){
      axios
      .post('https://chuomall.xyz/create-pull/', {
        decisionTitle,
        user_id: user.user_id.toString(),
      })
      .then((res) => {
        const message = res.data;
        setdecisionTitle('')
        setOpenOne(true);
        // orderData();
        setTimeout();
      })
      .catch((e) => {
        console.log(e);

      });
    }
    
  };

  // const UpdateUserSchema = Yup.object().shape({
  //   title: Yup.string().required('Title is required'),
  // });


  // const methods = useForm({
  //   resolver: yupResolver(UpdateUserSchema),
  //   defaultValues,
  // });

  // const {
  //   setError,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitting },
  // } = methods;

  // const onSubmit = (name) => {
  //   try {
  //     newDecision(name.title);
  //     reset();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const linkOf = (id) => `/dashboard/decision/${id}`;


  const linkOfVote = (id) => `/dashboard/vote/${id}`;
  return (
    <Box mr={6} mt={10}  mb={6} ml={6}>
 <AvatarDropDown />

 <Box  backgroundColor="#f3f3f3"   borderRadius='lg' rounded='lg' pt={10} pl={5}  pr={5} ml={8} mr={8}  shadow='sm' mt={6} pb={7}>
    <Input placeholder='Decision' value={decisionTitle}  onChange={handleOnChange}   size='lg'  backgroundColor='white' variant='filled' pt={8} pb={8} />
    <Stack direction='row' align='right' justify='flex-end' mt={6}>
     <Button colorScheme='teal'  onClick={newDecision}  variant='solid'>
       Button
     </Button>
     </Stack>
    </Box>
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
        {decisions ? decisions.map((row, i) => (<Tr key={i}>
        <Td>{row.title}</Td>
        <Td>{row.createdAt}</Td>
        <Td>{row.state}</Td>

        <td> {row.username}</td>
        <td > <Link to={linkOf(row.id)}> <Button colorScheme='teal' variant='solid' size='md'>
       View
     </Button></Link></td>
     <td > <Link to={linkOfVote(row.id)}> <Button colorScheme='blue' variant='solid' size='md'>
       Vote
     </Button></Link></td>
      </Tr>)) :                         <div>No Decisions</div>
}
     
    </Tbody>
  </Table>
</TableContainer>
    
    </Box>    

    </Box>
    </Box>
  )
}

export default Decisions