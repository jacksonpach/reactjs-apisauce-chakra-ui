import React from 'react';
import { useColorMode, Box, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box textAlign="right" py={4} mr={12}>
            <Button onClick={toggleColorMode} variant="outline" mt={4}>
                {
                    colorMode === "light" ? <MoonIcon/> : <SunIcon/>
                }
            </Button>
        </Box>
    );
}