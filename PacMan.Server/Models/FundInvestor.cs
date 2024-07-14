namespace PacMan.Server.Models
{
    public class FundInvestor
    {
        public int Id { get; set; }
        public int FundId { get; set; }
        public Investor Investor { get; set; }
        public int Commitment { get; set; }
        public int PaidIn { get; set; }
        public int Distribution { get; set; }
        public int Profit { get; set; }
    }
}
