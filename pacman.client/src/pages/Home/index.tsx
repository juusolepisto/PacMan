import React from "react";
import { Button, Container, Grid } from "@mui/material";
import ImageButton from "../../components/ImageButton";
import InverstorsImage from '../../assets/investor-stockphoto.jpg';
import FundsImage from '../../assets/funds-stockphoto.jpg';

const HomePage: React.FC = () => {
    const imageButtons = [
        {
            title: 'Funds',
            image: FundsImage
        }, 
        {
            title: 'Inverstors',
            image: InverstorsImage
        }
    ]

    return (
        <>
            <Container maxWidth="lg" sx={{pt: 10}}>
                <Grid container spacing={2}>
                    {imageButtons.map((imagebutton, index) => (
                        <Grid item xs={4} key={index}>
                            <ImageButton props={imagebutton}/>
                        </Grid>
                    ))};
                </Grid>
            </Container>
        </>
    )
}
export default HomePage;