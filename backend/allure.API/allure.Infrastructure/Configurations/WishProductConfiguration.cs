using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class WishProductConfiguration : IEntityTypeConfiguration<WishProduct>
{
    public void Configure(EntityTypeBuilder<WishProduct> builder)
    {
        builder.HasKey(p => p.Id);
        builder.HasOne(p => p.Product)
            .WithMany()
            .HasForeignKey(p => p.ProductId);
        builder.HasOne(p => p.User)
            .WithMany()
            .HasForeignKey(p => p.UserId);
    }
}