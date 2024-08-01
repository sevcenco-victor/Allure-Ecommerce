using System.ComponentModel.DataAnnotations;
using allure.Application.Exceptions;
using allure.Application.Validators;
using allure.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace allure.Application.Services;

public class CategoryService : ICategoryService
{
    private readonly AllureDbContext _dbContext;


    public CategoryService(AllureDbContext dbContext)
    {
        _dbContext = dbContext;
    }


    public async Task<Guid> Create(string categoryName)
    {
        var validator = new CategoryValidator();
        var category = _dbContext.Categories.Where(c => c.CategoryName.ToLower().Equals(categoryName.ToLower()));

        if (category.Any()) throw new AlreadyExistsException("This category already exists, try another one");

        var newCategory = new Domain.Models.Category(categoryName);
        var result = await validator.ValidateAsync(newCategory);

        if (!result.IsValid) throw new ValidationException(result.Errors.ToString());

        await _dbContext.Categories.AddAsync(newCategory);
        await _dbContext.SaveChangesAsync();
        return newCategory.Id;
    }

    public async Task<Domain.Models.Category> Get(Guid id)
    {
        var category = await _dbContext.Categories.FindAsync(id);

        if (category == null) throw new KeyNotFoundException($"No category with id: {id}");

        return category;
    }

    public async Task<List<Domain.Models.Category>> GetAll()
    {
        var categories = await _dbContext.Categories.ToListAsync();
        return categories;
    }

    public async Task<Guid> Update(Guid id, string newCategory)
    {
        var category = await _dbContext.Categories.FindAsync(id);

        if (category == null) throw new KeyNotFoundException($"No category with id: {id}");

        await _dbContext.Categories
            .Where(c => c.Id == id)
            .ExecuteUpdateAsync(p =>
                p.SetProperty(c => c.CategoryName, newCategory));

        return category.Id;
    }

    public async Task<Guid> Delete(Guid id)
    {
        var category = await _dbContext.Categories.FindAsync(id);

        if (category == null) throw new KeyNotFoundException($"No category with id {id}");

        _dbContext.Categories.Remove(category);
        await _dbContext.SaveChangesAsync();
        return category.Id;
    }
}