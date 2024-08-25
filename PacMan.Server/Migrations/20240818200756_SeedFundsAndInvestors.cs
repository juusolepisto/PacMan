using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PacMan.Server.Migrations
{
    /// <inheritdoc />
    public partial class SeedFundsAndInvestors : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FundInvestors",
                columns: new[] { "Id", "Commitment", "Distribution", "FundId", "InvestorId", "PaidIn", "Profit" },
                values: new object[,]
                {
                    { 1, 1000000, 200000, 1, 1, 500000, 300000 },
                    { 2, 2000000, 400000, 1, 2, 1000000, 600000 }
                });

            migrationBuilder.InsertData(
                table: "Funds",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 3, "A fund focusing on renewable energy", "Green Energy Fund" });

            migrationBuilder.InsertData(
                table: "Investors",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 3, "Bob Johnson" },
                    { 4, "Alice Davis" },
                    { 5, "Michael Brown" },
                    { 6, "Laura Wilson" },
                    { 7, "Chris Evans" },
                    { 8, "Olivia Taylor" },
                    { 9, "David Harris" }
                });

            migrationBuilder.InsertData(
                table: "FundInvestors",
                columns: new[] { "Id", "Commitment", "Distribution", "FundId", "InvestorId", "PaidIn", "Profit" },
                values: new object[,]
                {
                    { 3, 1500000, 300000, 1, 3, 750000, 450000 },
                    { 4, 1200000, 240000, 2, 4, 600000, 360000 },
                    { 5, 2500000, 500000, 2, 5, 1250000, 750000 },
                    { 6, 1800000, 360000, 2, 6, 900000, 540000 },
                    { 7, 1100000, 220000, 3, 7, 550000, 330000 },
                    { 8, 1300000, 260000, 3, 8, 650000, 390000 },
                    { 9, 1700000, 340000, 3, 9, 850000, 510000 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "FundInvestors",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Funds",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Investors",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Investors",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Investors",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Investors",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Investors",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Investors",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Investors",
                keyColumn: "Id",
                keyValue: 9);
        }
    }
}
