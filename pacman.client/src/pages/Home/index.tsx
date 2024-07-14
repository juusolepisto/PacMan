import React from "react";
import { Container, Grid } from "@mui/material";
import ImageButton from "../../components/ImageButton";
import InverstorsImage from '../../assets/investor-stockphoto.jpg';
import FundsImage from '../../assets/funds-stockphoto.jpg';

const HomePage: React.FC = () => {
    const imageButtons = [
        {
            title: 'Funds',
            image: FundsImage,
            url: 'funds'
        }, 
        {
            title: 'Inverstors',
            image: InverstorsImage,
            url: 'inverstors'
        }
    ]

    return (
        <>
            <Container 
                maxWidth="lg" 
                sx={{pt: 10}}>
                <Grid 
                    container 
                    spacing={2} 
                    sx={{justifyContent: 'center'}}
                    >
                    {imageButtons.map((imagebutton, index) => (
                        <Grid item xs={4} key={index}>
                            <ImageButton {...imagebutton}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}
export default HomePage;