import React from "react";
import { Container, Grid } from "@mui/material";
import ImageButton from "../../components/ImageButton";
import InvestorsImage from '../../assets/investor-stockphoto.jpg';
import FundsImage from '../../assets/funds-stockphoto.jpg';

const HomePage: React.FC = () => {
    const imageButtons = [
        {
            title: 'Funds',
            image: FundsImage,
            url: 'funds'
        }, 
        {
            title: 'Investors',
            image: InvestorsImage,
            url: 'investors'
        }
    ]

    return (
        <>
            <Container 
                maxWidth="lg" 
                sx={{p: 5}}>
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