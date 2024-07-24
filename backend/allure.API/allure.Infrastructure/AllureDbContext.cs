using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace allure.Infrastructure;

public class AllureDbContext : DbContext
{
    private readonly IConfiguration _configuration;

    public AllureDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_configuration.GetConnectionString("AllureDb"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}