import React from "react";
import { Button, Container, Paper, Typography } from '@mui/material'; 
import { ArrowForward } from "@mui/icons-material";

interface ImageButtonProps {
    title: string;
    image: string;
}

const ImageButton: React.FC<{props: ImageButtonProps}> = ({props}) => {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    };    

    return (
        <>
            <Container sx={{mt: 10}}>
                <Paper elevation={1} sx={{p: 10}} style={styles.paperContainer}>
                    <Typography variant="h4" gutterBottom>{props.title}</Typography>
                    <Button variant="contained" startIcon={<ArrowForward />}></Button>
                </Paper>
            </Container>
        </>
    )
}
export default ImageButton;