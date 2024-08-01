namespace allure.Domain.Models;

public class Order
{
    public Order()
    {
    }

    public Order(Guid userId, DateTime orderDate, List<CartProduct> productList,
        DeliveryOption deliveryOption, Guid? shopId)
    {
        Id = Guid.NewGuid();
        UserId = userId;
        OrderDate = orderDate;
        ProductList = productList;
        DeliveryOption = deliveryOption;
        ShopId = shopId;
    }

    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public User? User { get; private set; }
    public DateTime OrderDate { get; private set; } = DateTime.Now;
    public OrderStatus Status { get; private set; } = OrderStatus.Pending;
    public List<CartProduct> ProductList { get; private set; } = [];
    public DeliveryOption DeliveryOption { get; private set; }
    public Guid? ShopId { get; private set; }
    public Shop? Shop { get; private set; }
}