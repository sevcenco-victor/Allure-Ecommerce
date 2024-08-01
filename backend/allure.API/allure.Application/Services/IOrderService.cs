using allure.Domain.Contracts;
using allure.Domain.Contracts.Order;
using allure.Domain.Models;

namespace allure.Application.Services;

public interface IOrderService
{
    Task<Guid> Create(CreateOrderRequest request);
    Task<Order> Get(Guid id);
    Task<List<Order>> GetAll();
    Task<List<Order>> GetUserOrders(Guid userId);
    Task Update(Guid guid, UpdateOrderRequest request);
    Task Delete(Guid id);
}