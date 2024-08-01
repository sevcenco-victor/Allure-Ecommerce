using allure.Domain.Models;

namespace allure.Domain.Contracts.Order;

public record UpdateOrderRequest(
    OrderStatus Status,
    DeliveryOption DeliveryOption,
    Guid ShopId
);