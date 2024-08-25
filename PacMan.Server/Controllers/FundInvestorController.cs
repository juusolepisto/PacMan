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

        [HttpGet(Name = "GetFundInvestors")]
        public async Task<ActionResult<IEnumerable<FundInvestor>>> GetFundInvestors(int fundId)
        {
            try
            {
                var fundInvestors = await _context.FundInvestors   
                    .Include(f => f.Investor)  // Include the related Investor data
                    .Where(f => f.FundId == fundId)
                    .ToListAsync();

                if (fundInvestors == null || fundInvestors.Count == 0)
                {
                    return NotFound("No fund investors found for this fund.");
                }

                return Ok(fundInvestors);
            }
            catch (Exception ex)
            {
                // Log the exception (optional)
                Console.WriteLine($"Error fetching fund investors: {ex.Message}");
                return StatusCode(500, "Internal server error. Please try again later.");
            }
        }
    }
}
