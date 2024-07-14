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
import { Button, Typography } from '@mui/material';
import useFunds from '../../hooks/useFunds';

const FundsPage: React.FC = () => {
  const navigate = useNavigate();
  const {funds, loading, error} = useFunds();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <TableContainer component={Paper}>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
          <Typography variant='h5' gutterBottom >Funds</Typography>
          <Button onClick={() => navigate(-1)} >Go back</Button>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
        </TableHead>
        <TableBody>
          {funds.map((fund) => (
            <TableRow className='TableRow' key={fund.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Link className='Link' to={`/funds/${fund.id}`}>{fund.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FundsPage;
