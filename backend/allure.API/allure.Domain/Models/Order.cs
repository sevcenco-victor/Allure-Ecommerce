namespace allure.Domain.Models;

public class Order
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public User User { get; set; }
    public DateTime OrderDate { get; set; } = DateTime.Now;
    public OrderStatus Status { get; set; }
    public IReadOnlyCollection<CartProduct> ProductList { get; set; } = [];
    public DeliveryOption DeliveryOption { get; set; }
    public Guid? ShopId { get; set; }
    public Shop? Shop { get; set; }
}