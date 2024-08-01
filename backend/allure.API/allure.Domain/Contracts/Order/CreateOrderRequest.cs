using allure.Domain.Models;

namespace allure.Domain.Contracts.Order;

public record CreateOrderRequest(
    Guid UserId,
    DateTime OrderDate,
    List<CartProduct> ProductList,
    DeliveryOption DeliveryOption,
    Guid? ShopId
);