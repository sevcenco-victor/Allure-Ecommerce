using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasKey(p => p.Id);
        builder.Property(p => p.Title)
            .HasMaxLength(Product.MAX_TITLE_LENGTH)
            .IsRequired();
        builder.Property(p => p.Price)
            .IsRequired();
        builder.Property(p => p.Images);
        builder.Property(p => p.Colors);
        builder.Property(p => p.Sizes);
        builder.Property(p => p.Description);
        builder.Property(p => p.TrapezeFit);
        builder.Property(p => p.FabricAndCare);
        builder.HasOne(p => p.Category)
            .WithMany(pc => pc.Products)
            .HasForeignKey(p => p.CategoryId)
            .IsRequired();
    }
}