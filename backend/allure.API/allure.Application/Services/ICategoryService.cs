namespace allure.Application.Services;

public interface ICategoryService
{
    Task<Guid> Create(string categoryName);
    Task<Domain.Models.Category> Get(Guid id);
    Task<List<Domain.Models.Category>> GetAll();
    Task<Guid> Update(Guid id, string newCategory);
    Task<Guid> Delete(Guid id);
}