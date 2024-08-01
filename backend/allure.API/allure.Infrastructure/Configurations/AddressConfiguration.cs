using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class AddressConfiguration : IEntityTypeConfiguration<Address>
{
    public void Configure(EntityTypeBuilder<Address> builder)
    {
        builder.HasNoKey();
        builder.Property(a => a.Country)
            .HasMaxLength(100)
            .IsRequired();
        builder.Property(a => a.State)
            .HasMaxLength(100)
            .IsRequired();
        builder.Property(a => a.City)
            .HasMaxLength(100)
            .IsRequired();
        builder.Property(a => a.Street)
            .HasMaxLength(100)
            .IsRequired();
        builder.Property(a => a.Street2)
            .HasMaxLength(100);
        builder.Property(a => a.PostalCode)
            .HasMaxLength(20)
            .IsRequired();
    }
}