namespace allure.Domain.Models;

public class Review
{
    public static readonly int TITLE_MAX_LENGTH = 100;
    public Guid Id { get; private set; }
    public Guid ProductId { get; private set; }
    public Product? Product { get; private set; }
    public string Title { get; private set; } = string.Empty;
    public string Text { get; private set; } = string.Empty;
    public int RatingScore { get; private set; } = 0;
    public int HelpfulScore { get; private set; } = 0;
    public DateTime DatePosted { get; private set; } = DateTime.Now;
    public Guid UserId { get; private set; }
    public User? User { get; private set; }
}