import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



export default function MUI() {
    return (
        <>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        width: 600,
                        height: 200,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
            </Container>



        </>
    )
}