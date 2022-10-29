import {useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import {Text,Box,Button,Center} from '@chakra-ui/react'
import { io } from 'socket.io-client';

const VerifyLoginLink = () => {

    const socket = io('https://decisionrollbackend.herokuapp.com/verify-login-email');
    const [verifyParms] = useSearchParams();

  const email = verifyParms.get("email");
  const [verified, setverified] = useState(false)
const [isVerifying, setisVerifying] = useState(false)

const [isConnected, setIsConnected] = useState(socket.connected);

    function handleVerify() {
        setisVerifying(true);
        verifyEmail()

    }
    function verifyEmail() {
        socket.on('connect', (connectResponse) => {
            setIsConnected(true);
            console.log(connectResponse)
          });
      
          socket.on('disconnect', () => {
            setIsConnected(false);
          });
            socket.emit('loginlinkverification',{"email": email})
         socket.on('loginlinkverification', (response) => {
            console.log(response)

           var responseStatus = response['status']
            console.log(responseStatus)
            responseStatus === 'success' && setverified(true)
            
          });
          
     }
     if(verified === true){
      return(    <Box mt={8} mb={8} ml={3} mr={3}>
         <Text fontSize={16} mt={4}><b>Verified Successfully</b>. Go back 
        to your application and you should be logged in automaticatally.</Text>
      </Box>
        )  
     }
  return (
    <Box mt={8} mb={8} ml={3} mr={3}>
       
        <Text f fontSize={18}>Hello <b>{email}</b></Text>
        
        <Text fontSize={16} mt={4}>Welcome to <b>DecisionRoll</b>. Click the <b>Verify</b> button below and once verified, go back 
        to your application and you should be logged in automaticatally.</Text>
        <Center mt={5}>
            
        {isVerifying===false ? <Button onClick={handleVerify} colorScheme='telegram' size='md' variant='solid'>
    Verify
    </Button> :  <Button
        isLoading
        loadingText='verifying'
        colorScheme='teal'
        variant='outline'>
            Submit
         </Button>}
    </Center>
 
    </Box>
  )
}

export default VerifyLoginLink