using Microsoft.VisualBasic;

namespace allure.Domain.Models;

public class Product
{
    public Guid Id { get; private set; }
    public string Title { get; } = string.Empty;
    public double Price { get; } = 0.0d;
    public IReadOnlyCollection<string> Colors { get; private set; } = [];
    public IReadOnlyCollection<string> Sizes { get; private set; } = [];
    public Guid DetailsId { get; private set; }
    public ProductDetails Details { get; private set; }
    public Guid ProductCategoryId { get; private set; }
    public ProductCategory ProductCategory { get; private set; }
    public IReadOnlyCollection<string> Tags { get; } = [];
    public IReadOnlyCollection<Review> Reviews { get; private set; } = [];
}