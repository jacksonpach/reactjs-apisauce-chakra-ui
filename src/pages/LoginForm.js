import React, { useState } from 'react';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, CircularProgress, Text } from '@chakra-ui/react';
import Login from '../services/Api'
import ErrorMessage from '../components/errorMessage';

export default function LoginForm() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [err, setErr] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async event => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const response = await Login({ email, password })
            if(response.ok) {
                setIsLoggedIn(true)
                setIsLoading(false)
                setToken(response.data.token)
            }
            else {
                setErr('Invalid username or password');
                setIsLoading(false)
                setIsLoading(false)
                setEmail('')
                setPassword('')
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box p={2}>
                    <Box textAlign="center">
                        <Heading>Login</Heading>
                    </Box>

                    {
                        isLoggedIn ? (
                        <Box textAlign="center">
                            <Text>Your token: {token}</Text>
                            <Button
                                variantcolor="orange"
                                variant="outline"
                                width="full"
                                mt={4}
                                onClick={() => setIsLoggedIn(false)}
                            >
                                Sign out
                            </Button>
                        </Box>
                    ) : (
                        <Box my={4} textAlign="left">
                            <form onSubmit={handleSubmit}>
                                {err && <ErrorMessage message={err} />}
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="eve.holt@reqres.in"
                                        size="lg"
                                        onChange={event => setEmail(event.currentTarget.value)}
                                    />
                                </FormControl>
                                <FormControl mt={6} isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="cityslicka"
                                        size="lg"
                                        onChange={event => setPassword(event.currentTarget.value)}
                                    />
                                </FormControl>
                                <Button
                                    type="submit"
                                    variant="outline"
                                    width="full" mt={4}>
                                    {isLoading ? (
                                        <CircularProgress isIndeterminate size="24px" colorscheme="blue" />
                                    ) : (
                                        'Sign In'
                                    )}
                                </Button>
                            </form>
                        </Box>)
                    }
                </Box>
            </Box>
        </Flex>
    )
}