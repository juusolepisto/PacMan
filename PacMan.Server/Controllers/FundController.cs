using Microsoft.AspNetCore.Mvc;
using PacMan.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace PacMan.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FundController : Controller
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
            new() {
                Id = 3,
                Name = "Fund B",
                Investors = Investors,
            }
        ];

        [HttpGet(Name = "GetFunds")]
        public async Task<IEnumerable<Fund>> GetFunds()
        {
            return await Task.FromResult(Funds);
        }
    }
}
