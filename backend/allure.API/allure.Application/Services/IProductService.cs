using allure.Domain.Contracts;
using allure.Domain.Contracts.Product;
using allure.Domain.Models;

namespace allure.Application.Services;

public interface IProductService
{
    Task<Guid> Create(CreateProductRequest request);
    Task<ProductResponse> Get(Guid id);
    Task<List<ProductResponse>> GetAll();
    Task<ProductViewResponse> GetView(Guid id);
    Task Update(Guid id, UpdateProductRequest request);
    Task Delete(Guid id);
}