using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class ShippingAddressConfiguration:IEntityTypeConfiguration<ShippingAddress>
{
    public void Configure(EntityTypeBuilder<ShippingAddress> builder)
    {
        builder.HasKey(sa => sa.Id);
        builder.OwnsOne(sa => sa.Address, a =>
        {
            a.Property(ad => ad.Country).HasMaxLength(100).IsRequired();
            a.Property(ad => ad.State).HasMaxLength(100).IsRequired();
            a.Property(ad => ad.City).HasMaxLength(100).IsRequired();
            a.Property(ad => ad.Street).HasMaxLength(200).IsRequired();
            a.Property(ad => ad.Street2).HasMaxLength(200);
            a.Property(ad => ad.PostalCode).HasMaxLength(20).IsRequired();
        });
        builder.Property(sa => sa.AdditionalInfo);
    }
}