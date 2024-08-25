import React from "react";
import useInvestors from "../../hooks/useInvestors";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const InvestorsPage: React.FC = () => {
    const navigate = useNavigate();
    const { investors, loading, error } = useInvestors();

    if (loading) return( 
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color="inherit"/>
      </Box>
    );
    if (error) return <div>Error: {error}</div>;

    return (
        <TableContainer component={Paper}>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
          <Typography variant='h5' gutterBottom sx={{ color: 'black' }}>Investors</Typography>
          <Button onClick={() => navigate(-1)} >Go back</Button>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
        </TableHead>
        <TableBody>
          {investors.map((investor) => (
            <TableRow className='TableRow' key={investor.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Link className='Link' to={``}>{investor.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
    )
}
export default InvestorsPage;