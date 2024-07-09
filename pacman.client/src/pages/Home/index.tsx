import React from "react";
import { Button, Container, Grid } from "@mui/material";

const HomePage: React.FC = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{pt: 10}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button>Funds</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Investors</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Companies</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default HomePage;