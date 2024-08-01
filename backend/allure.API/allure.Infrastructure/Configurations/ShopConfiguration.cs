using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class ShopConfiguration : IEntityTypeConfiguration<Shop>
{
    public void Configure(EntityTypeBuilder<Shop> builder)
    {
        builder.HasKey(s => s.Id);
        builder.Property(s => s.Name)
            .HasMaxLength(Shop.MAX_TITLE_LENGTH)
            .IsRequired();
        builder.OwnsOne(sa => sa.Address, a =>
        {
            a.Property(ad => ad.Country).HasMaxLength(100).IsRequired();
            a.Property(ad => ad.State).HasMaxLength(100).IsRequired();
            a.Property(ad => ad.City).HasMaxLength(100).IsRequired();
            a.Property(ad => ad.Street).HasMaxLength(200).IsRequired();
            a.Property(ad => ad.Street2).HasMaxLength(200);
            a.Property(ad => ad.PostalCode).HasMaxLength(20).IsRequired();
        });
        builder.Property(s => s.Phone)
            .HasMaxLength(16)
            .IsRequired();
    }
}