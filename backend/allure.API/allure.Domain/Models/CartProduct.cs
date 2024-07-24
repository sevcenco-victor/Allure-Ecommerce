namespace allure.Domain.Models;

public class CartProduct
{
    public Guid Id { get; set; }
    public Guid ProductId { get; set; }
    public Product Product { get; set; }
    public int Quantity { get; set; } = 0;
    public string Color { get; set; } = string.Empty;
    public string Size { get; set; } = string.Empty;
}