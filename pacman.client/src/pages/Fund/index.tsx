import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

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

const funds: Fund[] = [
    {
        id: 1, name: 'Frozen yoghurt',
        details: [
            { investor: 'Investor A', commitments: 100000, paidIn: 50000, distribution: 20000, profit: 30000 },
            { investor: 'Investor B', commitments: 150000, paidIn: 100000, distribution: 40000, profit: 60000 }
        ]
    },
    {
        id: 2, name: 'Ice cream sandwich',
        details: [
            { investor: 'Investor C', commitments: 200000, paidIn: 150000, distribution: 70000, profit: 80000 },
            { investor: 'Investor D', commitments: 250000, paidIn: 200000, distribution: 90000, profit: 110000 }
        ]
    },
    {
        id: 3, name: 'Eclair',
        details: [
            { investor: 'Investor E', commitments: 300000, paidIn: 250000, distribution: 120000, profit: 130000 },
            { investor: 'Investor F', commitments: 350000, paidIn: 300000, distribution: 150000, profit: 170000 }
        ]
    },
    {
        id: 4, name: 'Cupcake',
        details: [
            { investor: 'Investor G', commitments: 400000, paidIn: 350000, distribution: 180000, profit: 220000 },
            { investor: 'Investor H', commitments: 450000, paidIn: 400000, distribution: 210000, profit: 240000 }
        ]
    },
    {
        id: 5, name: 'Gingerbread',
        details: [
            { investor: 'Investor I', commitments: 500000, paidIn: 450000, distribution: 230000, profit: 270000 },
            { investor: 'Investor J', commitments: 550000, paidIn: 500000, distribution: 260000, profit: 290000 }
        ]
    }
];

const FundPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const fund = funds.find(f => f.id === parseInt(id!));

    if (!fund) {
        return <div>Fund not found</div>;
    }

    return (
        <>
            <Container>
                <Paper>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
                        <Typography variant='h5' gutterBottom >{fund.name}</Typography>
                        <Button onClick={() => navigate(-1)} >Go back</Button>
                    </div>
                    <TableContainer component={Paper} sx={{p: 1}}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Investors</TableCell>
                                    <TableCell>Commitments</TableCell>
                                    <TableCell>Paid-In</TableCell>
                                    <TableCell>Distribution</TableCell>
                                    <TableCell>Profit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fund.details.map((detail, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {detail.investor}
                                        </TableCell>
                                        <TableCell>{detail.commitments}</TableCell>
                                        <TableCell>{detail.paidIn}</TableCell>
                                        <TableCell>{detail.distribution}</TableCell>
                                        <TableCell>{detail.profit}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
        </>
    );
}

export default FundPage;
