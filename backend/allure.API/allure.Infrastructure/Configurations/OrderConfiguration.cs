using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class OrderConfiguration : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        builder.HasKey(o => o.Id);
        builder.HasOne(o => o.User)
            .WithMany(p => p.Orders)
            .HasForeignKey(o => o.UserId);
        
        builder.Property(o => o.OrderDate)
            .IsRequired();
        builder.Property(o => o.Status)
            .IsRequired();
        builder.HasMany(o => o.ProductList)
            .WithOne(cp => cp.Order)
            .HasForeignKey(cp => cp.OrderId);
        
        builder.Property(o => o.DeliveryOption)
            .IsRequired();

        builder.HasOne(o => o.Shop)
            .WithMany()
            .HasForeignKey(o => o.ShopId);
    }
}