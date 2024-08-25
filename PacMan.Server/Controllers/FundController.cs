using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PacMan.Server.Data;
using PacMan.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace PacMan.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FundController(PacManDbContext context) : Controller
    {
        private readonly PacManDbContext _context = context;

        [HttpGet(Name = "GetFunds")]
        public async Task<IEnumerable<Fund>> GetFunds()
        {
            return await _context.Funds
                .ToListAsync();
        }
    }
}
