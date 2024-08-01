using allure.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace allure.Infrastructure.Configurations;

public class ReviewConfiguration : IEntityTypeConfiguration<Review>
{
    public void Configure(EntityTypeBuilder<Review> builder)
    {
        builder.HasKey(r => r.Id);
        builder.HasOne(r => r.Product)
            .WithMany()
            .HasForeignKey(r => r.ProductId);
        builder.Property(r => r.Title)
            .HasMaxLength(Review.TITLE_MAX_LENGTH)
            .IsRequired();
        builder.Property(r => r.Text)
            .IsRequired();
        builder.Property(r => r.RatingScore)
            .IsRequired();
        builder.Property(r => r.HelpfulScore)
            .IsRequired();
        builder.Property(r => r.DatePosted)
            .IsRequired();
        builder.HasOne(r => r.User)
            .WithMany()
            .HasForeignKey(r => r.UserId);
    }
}