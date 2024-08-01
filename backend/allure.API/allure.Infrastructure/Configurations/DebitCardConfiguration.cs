using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class DebitCardConfiguration:IEntityTypeConfiguration<DebitCard>
{
    public void Configure(EntityTypeBuilder<DebitCard> builder)
    {
        builder.HasKey(dc => dc.Id);
        builder.Property(dc => dc.EndDate)
            .IsRequired();
        builder.Property(dc => dc.Cvc)
            .HasMaxLength(3)
            .IsRequired();
        builder.Property(dc => dc.HolderName)
            .HasMaxLength(100)
            .IsRequired();
        builder.Property(dc => dc.Email)
            .HasMaxLength(100);

    }
}