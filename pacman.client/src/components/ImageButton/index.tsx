import React from "react";
import { Container, Paper, Typography } from '@mui/material'; 
import { ArrowForward } from "@mui/icons-material";
import './ImageButton.css';
import { Link } from "react-router-dom";

interface ImageButtonProps {
    title: string;
    image: string;
    url: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({title, image, url}) => {
    return (
        <>
            <Container sx={{ mt: 10 }}>
                <Link to={url} className="imageButtonLink">
                    <Paper 
                        className="imageButtonPaper" 
                        elevation={5} 
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <Typography 
                            variant="h4"
                            id="title"
                            >
                                {title}
                        </Typography>
                    </Paper>
                </Link>
            </Container>
        </>
    )
}

export default ImageButton;
