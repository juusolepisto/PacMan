import { Box, Button, CircularProgress, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
    const [ edit, setEdit ] = useState(false);
    const fund = funds.find(f => f.id === parseInt(id!));

    const handleEditClick = () => {
        if (edit === true){
            setEdit(false);
        } else if (edit === false) {
            setEdit(true);
        }
    }

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
                            <Button onClick={() => navigate(-1)} variant="contained">Go back</Button>
                        </div>
                    </Paper>
                    <Paper elevation={4} sx={{m: 1}}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell style={{ color: 'black', fontWeight: 'bold'}}>Investors</TableCell>
                                        <TableCell style={{ color: 'black', fontWeight: 'bold'}}>Commitments</TableCell>
                                        <TableCell style={{ color: 'black', fontWeight: 'bold'}}>Paid-In</TableCell>
                                        <TableCell style={{ color: 'black', fontWeight: 'bold'}}>Distribution</TableCell>
                                        <TableCell style={{ color: 'black', fontWeight: 'bold'}}>Profit</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fundInvestors.map((detail, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" style={{ color: 'black'}}>
                                                {detail.investorName}
                                            </TableCell>
                                            <TableCell style={{ color: 'black'}}>{detail.commitment}</TableCell>
                                            <TableCell style={{ color: 'black'}}>{detail.paidIn}</TableCell>
                                            <TableCell style={{ color: 'black'}}>{detail.distribution}</TableCell>
                                            <TableCell style={{ color: 'black'}}>{detail.profit}</TableCell>
                                            <TableCell style={{ color: 'black'}}>
                                                <Link to={`/funds/${id}/edit/${index}`}>
                                                    <Button onClick={handleEditClick} variant="outlined">Edit</Button>
                                                </Link>
                                            </TableCell>
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
