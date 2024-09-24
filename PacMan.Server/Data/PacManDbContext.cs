using Microsoft.EntityFrameworkCore;
using PacMan.Server.Models;

namespace PacMan.Server.Data
{
    public class PacManDbContext : DbContext
    {
        public PacManDbContext(DbContextOptions<PacManDbContext> options) : base(options)
        { }

        public DbSet<Investor> Investors { get; set; }
        public DbSet<Fund> Funds { get; set; }
        public DbSet<FundInvestor> FundInvestors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed Funds (make sure this runs first)
            modelBuilder.Entity<Fund>().HasData(
                new Fund { Id = 1, Name = "Tech Growth Fund", Description = "A fund focusing on tech startups" },
                new Fund { Id = 2, Name = "Healthcare Innovation Fund", Description = "A fund focusing on healthcare innovations" },
                new Fund { Id = 3, Name = "Green Energy Fund", Description = "A fund focusing on renewable energy" }
            );

            // Seed Investors (make sure this runs second)
            modelBuilder.Entity<Investor>().HasData(
                new Investor { Id = 1, Name = "John Doe" },
                new Investor { Id = 2, Name = "Jane Smith" },
                new Investor { Id = 3, Name = "Bob Johnson" },
                new Investor { Id = 4, Name = "Alice Davis" },
                new Investor { Id = 5, Name = "Michael Brown" },
                new Investor { Id = 6, Name = "Laura Wilson" },
                new Investor { Id = 7, Name = "Chris Evans" },
                new Investor { Id = 8, Name = "Olivia Taylor" },
                new Investor { Id = 9, Name = "David Harris" }
            );

            // Seed FundInvestors (this must run last after Funds and Investors are seeded)
            modelBuilder.Entity<FundInvestor>().HasData(
                // Fund 1 Investors
                new FundInvestor { Id = 1, FundId = 1, InvestorId = 1, Commitment = 1000000, PaidIn = 500000, Distribution = 200000, Profit = 300000 },
                new FundInvestor { Id = 2, FundId = 1, InvestorId = 2, Commitment = 2000000, PaidIn = 1000000, Distribution = 400000, Profit = 600000 },
                new FundInvestor { Id = 3, FundId = 1, InvestorId = 3, Commitment = 1500000, PaidIn = 750000, Distribution = 300000, Profit = 450000 },

                // Fund 2 Investors
                new FundInvestor { Id = 4, FundId = 2, InvestorId = 4, Commitment = 1200000, PaidIn = 600000, Distribution = 240000, Profit = 360000 },
                new FundInvestor { Id = 5, FundId = 2, InvestorId = 5, Commitment = 2500000, PaidIn = 1250000, Distribution = 500000, Profit = 750000 },
                new FundInvestor { Id = 6, FundId = 2, InvestorId = 6, Commitment = 1800000, PaidIn = 900000, Distribution = 360000, Profit = 540000 },

                // Fund 3 Investors
                new FundInvestor { Id = 7, FundId = 3, InvestorId = 7, Commitment = 1100000, PaidIn = 550000, Distribution = 220000, Profit = 330000 },
                new FundInvestor { Id = 8, FundId = 3, InvestorId = 8, Commitment = 1300000, PaidIn = 650000, Distribution = 260000, Profit = 390000 },
                new FundInvestor { Id = 9, FundId = 3, InvestorId = 9, Commitment = 1700000, PaidIn = 850000, Distribution = 340000, Profit = 510000 }
            );
        }
    }
}
