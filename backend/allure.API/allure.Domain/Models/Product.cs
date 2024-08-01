using CSharpFunctionalExtensions;

namespace allure.Domain.Models;

public class Product
{
    public const int MAX_TITLE_LENGTH = 120;


    public Product()
    {
    }

    public Product(string title, decimal price, string description,
        string trapezeFit, string fabricAndCare, Guid categoryId)
    {
        Id = Guid.NewGuid();
        Title = title;
        Price = price;
        Description = description;
        TrapezeFit = trapezeFit;
        FabricAndCare = fabricAndCare;
        CategoryId = categoryId;
    }

    public Guid Id { get; private set; }
    public string Title { get; private set; }
    public decimal Price { get; private set; }
    public List<string> Images { get; private set; } = [];
    public List<string> Colors { get; private set; } = new List<string>();
    public List<string> Sizes { get; private set; } = [];
    public string? Description { get; private set; }
    public string? TrapezeFit { get; private set; }
    public string? FabricAndCare { get; private set; }
    public Guid CategoryId { get; private set; }
    public Category? Category { get; private set; }
    public List<string> Tags { get; private set; } = [];
    public List<Review> Reviews { get; private set; } = [];
}