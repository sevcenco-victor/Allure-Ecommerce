namespace allure.Domain.Models;

public class Category
{
    public static readonly int CATEGORY_MAX_LENGTH = 100;
    public Category(string categoryName)
    {
        Id = Guid.NewGuid();
        CategoryName = categoryName;
    }
    public Guid Id { get; private set; }
    public string CategoryName { get; private set; } = string.Empty;
    public List<Product> Products { get; private set; } = [];
    
    
}