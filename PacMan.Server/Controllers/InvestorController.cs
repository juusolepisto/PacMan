using Microsoft.AspNetCore.Mvc;
using PacMan.Server.Models;

namespace PacMan.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InvestorController : Controller
    {
        private static readonly List<Investor> Investors =
        [
            new()
            {
                Id = 1, 
                Name = "Investor 1",
            },
            new()
            {
                Id = 2,
                Name = "Investor 2",
            },
            new()
            {
                Id = 3,
                Name = "Investor 3"
            },
            new()
            {
                Id = 4,
                Name = "Investor 4"
            }
        ];

        [HttpGet(Name = "GetInvestors")]
        public async Task<IEnumerable<Investor>> GetInvestors()
        {
            var investorList = Investors.ToArray();
            
            return await Task.FromResult(investorList);
        }
    }
}
