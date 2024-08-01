using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace allure.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UsertabelcolumnBirthdaytoBirthDay : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Birthday",
                table: "Users",
                newName: "BirthDay");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BirthDay",
                table: "Users",
                newName: "Birthday");
        }
    }
}
