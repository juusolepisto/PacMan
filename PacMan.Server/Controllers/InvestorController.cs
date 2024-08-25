﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PacMan.Server.Data;
using PacMan.Server.Models;

namespace PacMan.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InvestorController(PacManDbContext context) : Controller
    {
        private readonly PacManDbContext _context = context;

        [HttpGet(Name = "GetInvestors")]
        public async Task<IEnumerable<Investor>> GetInvestors()
        {
            return await _context.Investors.ToListAsync();
        }
    }
}
