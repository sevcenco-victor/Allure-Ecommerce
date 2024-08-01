using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class CartProductConfiguration : IEntityTypeConfiguration<CartProduct>
{
    public void Configure(EntityTypeBuilder<CartProduct> builder)
    {
        builder.HasKey(cp => cp.Id);
        builder.HasOne(cp => cp.Product)
            .WithMany()
            .HasForeignKey(cp => cp.ProductId);
        builder.Property(cp => cp.Quantity)
            .IsRequired();
        builder.Property(cp => cp.ColorHex)
            .IsRequired();
        builder.Property(cp => cp.Size)
            .IsRequired();
        
        builder.HasOne(cp => cp.Order)
            .WithMany(o => o.ProductList)
            .HasForeignKey(cp => cp.OrderId);
    }
}