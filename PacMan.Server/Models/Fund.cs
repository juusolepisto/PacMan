namespace PacMan.Server.Models
{
    public class Fund
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Investor> Investors { get; set; }
    }
}
