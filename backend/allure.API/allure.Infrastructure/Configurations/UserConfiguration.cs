using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(u => u.Id);
        builder.Property(u => u.FirstName)
            .HasMaxLength(100)
            .IsRequired();
        builder.Property(u => u.LastName)
            .HasMaxLength(100)
            .IsRequired();
        builder.Property(u => u.BirthDay);
        builder.Property(u => u.Gender)
            .IsRequired();
        builder.Property(u => u.Phone)
            .HasMaxLength(16)
            .IsRequired();
        builder.Property(u => u.Email)
            .HasMaxLength(50)
            .IsRequired();
        builder.Property(u => u.Password)
            .IsRequired();
        builder.Property(u => u.IsVerified)
            .IsRequired();

        builder.HasMany(u => u.Orders)
            .WithOne(o => o.User)
            .HasForeignKey(o => o.UserId);

        builder.HasMany(u => u.ShippingAddresses)
            .WithOne(a => a.User)
            .HasForeignKey(a => a.UserId);

        builder.HasMany(u => u.Wishes)
            .WithOne(w => w.User)
            .HasForeignKey(w => w.UserId);

        builder.HasMany(u => u.DebitCards)
            .WithOne(c => c.User)
            .HasForeignKey(c => c.UserId);
    }
}