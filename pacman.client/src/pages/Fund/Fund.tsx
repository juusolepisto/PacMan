import { Box, Button, CircularProgress, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFunds from "../../hooks/useFetchFunds";
import useFundInvestors from "../../hooks/useFetchFundInvestors";

interface Fund {
    id: number,
    name: string;
    details: FundDetail[];
}

interface FundDetail {
    investor: string;
    commitments: number;
    paidIn: number;
    distribution: number;
    profit: number;
}

const FundPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const fundId = parseInt(id!, 10);
    const { funds } = useFunds();
    const { fundInvestors, loading, error } = useFundInvestors(fundId);

    console.log(fundInvestors);
    console.log(fundId);

    const fund = funds.find(f => f.id === parseInt(id!));

    if (!fund) {
        return <div>Fund not found</div>;
    }
    
    if (loading) return( 
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color="inherit"/>
        </Box>
      );
      if (error) return <div>Error: {error}</div>;
    
    return (
        <>
            <Container>
                <Paper elevation={4} sx={{p: 1, backgroundColor: '#008080'}}>
                    <Paper elevation={4} sx={{m: 1}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
                            <Typography variant='h5' gutterBottom style={{ color: 'black'}}>{fund.name}</Typography>
                            <Button onClick={() => navigate(-1)} >Go back</Button>
                        </div>
                    </Paper>
                    <Paper elevation={4} sx={{m: 1}}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell style={{ color: 'black'}}>Investors</TableCell>
                                        <TableCell style={{ color: 'black'}}>Commitments</TableCell>
                                        <TableCell style={{ color: 'black'}}>Paid-In</TableCell>
                                        <TableCell style={{ color: 'black'}}>Distribution</TableCell>
                                        <TableCell style={{ color: 'black'}}>Profit</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fundInvestors.map((detail, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" style={{ color: 'black'}}>
                                                {detail.investor.name}
                                            </TableCell>
                                            <TableCell style={{ color: 'black'}}>{detail.commitment}</TableCell>
                                            <TableCell style={{ color: 'black'}}>{detail.paidIn}</TableCell>
                                            <TableCell style={{ color: 'black'}}>{detail.distribution}</TableCell>
                                            <TableCell style={{ color: 'black'}}>{detail.profit}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Paper>
            </Container>
        </>
    );
}

export default FundPage;
