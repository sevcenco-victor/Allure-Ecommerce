namespace allure.Domain.Models;

public class CartProduct
{
    public Guid Id { get; private set; }
    public Guid ProductId { get; private set; }
    public Product? Product { get; private set; }
    public int Quantity { get; private set; } = 0;
    public string ColorHex { get; private set; } = string.Empty;
    public string Size { get; private set; } = string.Empty;
    public Guid OrderId { get; private set; }
    public Order? Order { get; private set; }
}