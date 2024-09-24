import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetchInvestorFunds from "../../hooks/useFetchInvestorFunds";

const InvestorFundsPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const investorId = parseInt(id!, 10);
    const { investorFunds, loading, error } = useFetchInvestorFunds(investorId);

    if (loading) return( 
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color="inherit"/>
        </Box>
    );
    if (error) return <div>Error: {error}</div>;


    return(
        <TableContainer component={Paper} sx={{p: 1, backgroundColor: '#008080'}}>
            <Paper elevation={4} sx={{m:1}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
                    <Typography variant='h5' gutterBottom sx={{ color: 'black' }}>Investor's Funds</Typography>
                    <Button onClick={() => navigate(-1)} >Go back</Button>
                </div>
            </Paper>
            <Paper elevation={4} sx={{m: 1}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead >
              </TableHead>
              <TableBody>
                {investorFunds.map((fund) => (
                  <TableRow className='TableRow' key={fund.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <Link className='Link' to={``}>{fund.name}</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </Table>
          </Paper>

        </TableContainer>
    )
}
export default InvestorFundsPage;