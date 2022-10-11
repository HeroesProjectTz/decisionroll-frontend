import { createContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// utils
import axios from '../utils/axios';
import { useCookies } from 'react-cookie'



// ----------------------------------------------------------------------

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const url = "https://chuomall.xyz/"

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;
        return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
        };
    },
    LOGIN: (state, action) => {
        const { user } = action.payload;

        return {
        ...state,
        isAuthenticated: true,
        user,
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
    REGISTER: (state, action) => {
        const { user } = action.payload;

        return {
        ...state,
        isAuthenticated: true,
        user,
        };
    },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
    ...initialState,
    method: 'jwt',
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [cookies, setCookie, removeCookie] = useCookies(['decision_roll_users']);
    

    useEffect(() => {
      
        const initialize = async () => {

        try {
          const user_cookie = cookies.decision_roll_users

            if (user_cookie) {
                // const user_data = JSON.parse(user_cookie);

                const user = { name: user_cookie.name, user_id: user_cookie.user_id };

                

                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                    isAuthenticated: true,
                    user,
                    },
                });
                } else {
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                    isAuthenticated: false,
                    user: null,
                    },
                });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                type: 'INITIALIZE',
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
                });
            }
    };

        initialize();
    }, []);

    const login = async (username) => {
        try {
          const data = await axios.post(`${url}/authentication/`, {
            user: {
              username,
            },
            googleId: 'googleAuthId',
            sign_type: 'signin',
            email: 'None',
          });
          if (data.data.message === 'Login success') {
            setCookie('decision_roll_users', JSON.stringify(data.data), { path: '/' });
            setCookie('accessToken', JSON.stringify(data.data), { path: '/' });
            dispatch({
              type: 'LOGIN',
              payload: {
                user: data.data,
              },
            });
          } else {
            console.error('Sukker');
          }
    
          return data;
        } catch (e) {
          console.log(e);
        }
    
      };
    
      function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
    
        return JSON.parse(jsonPayload);
      }
    
      const register = async (username, googleAuthId, email) => {
        try {
          const data = await axios.post(`${url}authentication/`, {
            user: {
              username,
            },
            googleId: 'googleAuthId',
            sign_type: 'signin',
            email: email,
          });
          setCookie('decision_roll_users', JSON.stringify(data.data), { path: '/' });
          setCookie('accessToken', JSON.stringify(data.data), { path: '/' });
        
         
       
          
          return data;
        } catch (e) {
        }
      };
    
      const googleLog = (data) => {
        let userData = parseJwt(data.credential);
        const { user_id } = userData.sub;
        console.log(userData);
    
        register(userData.name, user_id, userData.email);
        dispatch({
          type: 'LOGIN',
          payload: {
            user: userData,
          },
        });
      };
    
      const logout = async () => {
        dispatch({ type: 'LOGOUT' });
      };
    

    return (
        <AuthContext.Provider
        value={{
            ...state,
            method: 'jwt',
            login,
            logout,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };