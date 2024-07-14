using Microsoft.AspNetCore.Mvc;
using PacMan.Server.Models;

namespace PacMan.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FundInvestorController : Controller
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

        private static readonly List<Fund> Funds =
        [
            new()
            {
                Id = 1,
                Name = "Fund A",
                Investors = Investors,
            },
            new()
            {
                Id = 2,
                Name = "Fund B",
                Investors = Investors,
            },
            new()
            {
                Id = 3,
                Name = "Fund B",
                Investors = Investors,
            }
        ];

        private static readonly List<FundInvestor> FundInvestors =
        [
            new ()
            {
                Id = 1,
                Investor = Investors.Where(i => i.Id == 1).Single(),
                Commitment = 1000000,
                PaidIn = 800000,
                Distribution = 200000,
                Profit = 50000
            },
            new ()
            {
                Id = 2,
                Investor = Investors.Where(i => i.Id == 2).Single(),
                Commitment = 2000000,
                PaidIn = 1500000,
                Distribution = 500000,
                Profit = 150000
            },
            new ()
            {
                Id = 3,
                Investor = Investors.Where(i => i.Id == 3).Single(),
                Commitment = 1500000,
                PaidIn = 1300000,
                Distribution = 300000,
                Profit = 100000
            }
        ];

        [HttpGet(Name = "GetFundInvestors")]
        public async Task<IEnumerable<FundInvestor>> GetFundInvestors()
        {
            return await Task.FromResult(FundInvestors);
        }
    }
}
