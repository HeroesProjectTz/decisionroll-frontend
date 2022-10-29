import * as React from 'react'
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { Box, ChakraProvider } from '@chakra-ui/react'
import SideBar from './components/sidebar/sidebar'
import {Decision,Decisions,Vote,Users,Home,LoginPage,VerifyLoginLInk} from './components/index'
import { AuthProvider } from './contexts/JWTContext';
import { CookiesProvider } from "react-cookie";
import AuthGuard from './guards/authguard';


const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/login", element: <LoginPage /> },
    { path: "/verify-login-email", element: <VerifyLoginLInk /> },
    {
      path: "",
      element:
      <AuthGuard>
      <Box display='grid' gridTemplateColumns='17rem auto'>
        <SideBar />
        <Home />
        </Box>
        </AuthGuard>
    },
    {
      path: "dashboard/users",
      element:
      <AuthGuard>
      <Box display='grid' gridTemplateColumns='17rem auto'    >
        <SideBar />
        <Users />
        </Box>
        </AuthGuard>
    },
    {
      path: "dashboard/decisions",
      element:
      <AuthGuard>
      <Box display='grid' gridTemplateColumns='17rem auto'    >
        <SideBar />
        <Decisions />
        </Box>
        </AuthGuard>
    },
    {
      path: "dashboard/decision/:id",
      element:
      <AuthGuard>
      <Box display='grid' gridTemplateColumns='17rem auto'    >
        <SideBar />
        <Decision />
        </Box>
        </AuthGuard>
    },
    {
      path: "dashboard/vote/:id",
      element:
      <AuthGuard>
      <Box display='grid' gridTemplateColumns='17rem auto'    >
        <SideBar />
        <Vote />
        </Box>
        </AuthGuard>
    },
    // ...
  ]);
  return routes;
};

function App() {
  return (
    <CookiesProvider>
    <Router>
      <AuthProvider>
        <ChakraProvider>
            <AppWrapper />
        </ChakraProvider>
      </AuthProvider>
    </Router>
  </CookiesProvider>
  );
}

export default App;
