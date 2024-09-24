using PacMan.Server.Models;

public class FundInvestorDTO
    {
        public int Id { get; set; }
        public int FundId { get; set; }
        public int InvestorId { get; set; } 
        public string InvestorName { get; set;}
        public int Commitment { get; set; }
        public int PaidIn { get; set; }
        public int Distribution { get; set; }
        public int Profit { get; set; }
    }