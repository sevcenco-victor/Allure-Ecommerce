using allure.Application.Validators;
using allure.Domain.Contracts;
using allure.Domain.Contracts.Order;
using allure.Domain.Models;
using allure.Infrastructure;
using FluentValidation;
using Microsoft.EntityFrameworkCore;

namespace allure.Application.Services;

public class OrderService : IOrderService
{
    private readonly AllureDbContext _dbContext;

    public OrderService(AllureDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Guid> Create(CreateOrderRequest request)
    {
        var validator = new OrderValidator();

        var validUserId = await _dbContext.Users.AnyAsync(u => u.Id == request.UserId);
        if (!validUserId)
            throw new KeyNotFoundException($"No user found with id: {request.UserId}");
        
        var validShopId = await _dbContext.Shops.AnyAsync(s => s.Id == request.ShopId);
        if (!validShopId)
            throw new KeyNotFoundException($"No shop found with id: {request.ShopId}");

        var order = new Order(request.UserId, request.OrderDate, request.ProductList, request.DeliveryOption,
            request.ShopId);

        var result = await validator.ValidateAsync(order);
        if (!result.IsValid) throw new ValidationException(result.Errors);

        await _dbContext.Orders.AddAsync(order);
        await _dbContext.SaveChangesAsync();
        return order.Id;
    }

    public async Task<Order> Get(Guid id)
    {
        var order = await _dbContext.Orders.FindAsync(id);
        if (order == null) throw new KeyNotFoundException($"No order with id: {id}");

        return order;
    }

    
    public async Task<List<Order>> GetAll()
    {
        var orders = await _dbContext.Orders.ToListAsync();
        return orders;
    }

    public async Task<List<Order>> GetUserOrders(Guid userId)
    {
        var userOrders = await _dbContext.Orders.Where(o => o.UserId.Equals(userId)).ToListAsync();
        return userOrders;
    }

    public async Task Update(Guid id, UpdateOrderRequest request)
    {
        var affectedRows = await _dbContext.Orders.
                Where(o => o.Id == id)
                .ExecuteUpdateAsync(o => o
                        .SetProperty(x=> x.Status , request.Status)
                        .SetProperty(x=> x.DeliveryOption , request.DeliveryOption)
                        .SetProperty(x=> x.ShopId, request.ShopId));
        
        if (affectedRows == 0) throw new KeyNotFoundException($"No order with id: {id}");
    }

    public async Task Delete(Guid id)
    {
        var affectedRows = await _dbContext.Orders.Where(o => o.Id == id)
            .ExecuteDeleteAsync();

        if (affectedRows == 0) throw new KeyNotFoundException($"No order with id: {id}");

        await _dbContext.SaveChangesAsync();
    }
}