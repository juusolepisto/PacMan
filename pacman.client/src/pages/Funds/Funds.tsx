import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import './Funds.css';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import useFunds from '../../hooks/useFetchFunds';

const FundsPage: React.FC = () => {
  const navigate = useNavigate();
  const {funds, loading, error} = useFunds();

  if (loading) return( 
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="inherit"/>
    </Box>
  );
  if (error) return <div>Error: {error}</div>;

  console.log(funds);

  return (
    <TableContainer component={Paper} sx={{p: 1, backgroundColor: '#008080'}}>
      <Paper elevation={4} sx={{m: 1}}>
          <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
            <Typography variant='h5' gutterBottom style={{color: 'black'}} >Funds</Typography>
            <Button onClick={() => navigate(-1)} >Go back</Button>
        </div>
      </Paper>
      <Paper elevation={4} sx={{m: 1}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
          </TableHead>
          <TableBody>
            {funds.map((fund) => (
              <TableRow className='TableRow' key={fund.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Link className='Link' to={`/funds/${fund.id}`}>{fund.name}</Link>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: 'black' }} gutterBottom>{fund.description}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
};

export default FundsPage;
