import {React,useState} from 'react'
import { Box, Text,Flex,Center,Input,Button,Avatar, FormControl} from '@chakra-ui/react'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const { login } = useAuth();
  const [username, setusername] = useState('')
  const handleOnChange = (e)=>setusername(e.target.value);
  const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };
  const onSubmitData = async () => {
    try {
      const data = await login(username);
      console.log(data.status)
      if(data.status == 201){
        navigateHome();

      }

    } catch (error) {
      console.error(error);
      
    }
  };


  return (

   <FormControl>
   <Box>  
       <Flex direction='column' justify='center' justifyContent='center' align='center' mt='10%' >
        <Text fontWeight='bold' fontSize={20}>Sign In To Decision Roll</Text>
        <Text mt={3} fontWeight='600' fontSize={14}>Enter your details below</Text>
        <Input value={username} placeholder="username" onChange={handleOnChange}  height='1.3375em'  borderRadius='12' alignContent='center' width='30%' mt={3} backgroundColor='white' borderColor='#4c688f' variant='filled' pt={8} pb={8} />
        <Button colorScheme='teal' variant='solid' mt={10} width="30%" height='6vh' onClick={onSubmitData} >
       Login
     </Button>
     <Text mt={3} fontWeight='600' fontSize={14}>Or</Text>
     <Button colorScheme='yellow' variant='solid' mt={10} width="30%" type='submit'  height='6vh'>
       Sign In With Google
     </Button>
      </Flex>
      </Box>
      </FormControl>
  )
}

export default LoginPage