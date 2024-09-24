using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PacMan.Server.Data;
using PacMan.Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PacMan.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FundInvestorController : ControllerBase
    {
        private readonly PacManDbContext _context;

        public FundInvestorController(PacManDbContext context)
        {
            _context = context;
        }

        [HttpGet("fund/{fundId}")]
        public async Task<ActionResult<IEnumerable<FundInvestorDTO>>> GetFundInvestors(int fundId)
        {
            try
            {
                var fundInvestors = await _context.FundInvestors   
                    .Include(f => f.Investor)
                    .Where(f => f.FundId == fundId)
                    .ToListAsync();

                if (fundInvestors == null || fundInvestors.Count == 0)
                {
                    return NotFound("No fund investors found for this fund.");
                }

                var fundInvestorDTOs = fundInvestors.Select(f => new FundInvestorDTO()
                {
                    FundId = f.FundId,
                    InvestorId = f.InvestorId,
                    InvestorName = f.Investor.Name,
                    Commitment = f.Commitment,
                    PaidIn = f.PaidIn,
                    Distribution = f.Distribution,
                    Profit = f.Profit,
                });

                return Ok(fundInvestorDTOs);
            }
            catch (Exception ex)
            {
                // Log the exception (optional)
                Console.WriteLine($"Error fetching fund investors: {ex.Message}");
                return StatusCode(500, "Internal server error. Please try again later.");
            }
        }

        [HttpGet("investor/{investorId}")]
        public async Task<ActionResult<IEnumerable<FundDTO>>> GetInvestorsFunds(int investorId)
        {
            var investorsFunds = await _context.FundInvestors
                .Include(f => f.Investor)
                .Where(f => f.InvestorId == investorId)
                .ToListAsync();

                if (investorsFunds == null || investorsFunds.Count == 0)
                {
                    return NotFound("No fund investors found for this fund.");
                }

                var fundIds = investorsFunds.Select(f => f.FundId).ToList();

                var funds = await _context.Funds
                    .Where(f => fundIds.Contains(f.Id))
                    .ToListAsync();

                var fundDTOs = funds.Where(fund => fundIds.Contains(fund.Id)).Select(f => new FundDTO()
                {
                        Id = f.Id,
                        Name = f.Name,
                        Description = f.Description,
                });

                return Ok(fundDTOs);
        }

    }
}
