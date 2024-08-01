using allure.Application.Validators;
using allure.Domain.Contracts;
using allure.Domain.Contracts.Product;
using allure.Domain.Models;
using allure.Infrastructure;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace allure.Application.Services;

public class ProductService : IProductService
{
    private readonly AllureDbContext _dbContext;

    private string GetNotFoundErr(Guid id) => $"No product found with id: {id}";

    public ProductService(AllureDbContext context)
    {
        _dbContext = context;
    }

    public async Task<Guid> Create(CreateProductRequest request)
    {
        var validator = new ProductValidator();

        var categoryExists = await _dbContext.Categories.AnyAsync(c => c.Id == request.CategoryId);
        if (!categoryExists) throw new KeyNotFoundException($"No category found with id: {request.CategoryId}");

        var product = new Product(request.Title, request.Price, request.Description, request.TrapezeFit,
            request.FabricAndCare, request.CategoryId);

        product.Colors.AddRange(request.ColorsHex);
        product.Sizes.AddRange(request.Sizes);
        product.Tags.AddRange(request.Tags);

        var result = await validator.ValidateAsync(product);
        if (!result.IsValid) throw new ValidationException(result.Errors);

        await _dbContext.AddAsync(product);
        await _dbContext.SaveChangesAsync();
        return product.Id;
    }

    public async Task<ProductResponse> Get(Guid id)
    {
        var product = await _dbContext.Products.FindAsync(id);
        if (product == null) throw new KeyNotFoundException(GetNotFoundErr(id));

        var firstImage = product.Images.FirstOrDefault();

        return new ProductResponse(product.Id, firstImage, product.Title, product.Price);
    }

    public async Task<List<ProductResponse>> GetAll()
    {
        var products = await _dbContext.Products.ToListAsync();
        return products.Select(p => new ProductResponse(p.Id, p.Images.FirstOrDefault(), p.Title, p.Price)).ToList();
    }

    public async Task<ProductViewResponse> GetView(Guid id)
    {
        var product = await _dbContext.Products
            .Include(p => p.Category)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (product == null) throw new KeyNotFoundException(GetNotFoundErr(id));

        return new ProductViewResponse(product.Id, product.Title, product.Price, product.Colors, product.Sizes,
            product.Description, product.TrapezeFit, product.FabricAndCare, product.Category.CategoryName);
    }

    public async Task Update(Guid id,[FromBody] UpdateProductRequest request)
    {
        var existingCategory = await _dbContext.Categories.AnyAsync(p=> p.Id == request.CategoryId);
        if (!existingCategory) throw new KeyNotFoundException($"No category with id: {request.CategoryId}");
        
        var affectedRows =  await _dbContext.Products
            .Where(p => p.Id == id)
            .ExecuteUpdateAsync(p => p
                .SetProperty(x => x.Title, request.Title)
                .SetProperty(x => x.Price, request.Price)
                .SetProperty(x => x.Description, request.Description)
                .SetProperty(x => x.TrapezeFit, request.TrapezeFit)
                .SetProperty(x => x.FabricAndCare, request.FabricAndCare)
                .SetProperty(x=> x.CategoryId, request.CategoryId));
        
        if (affectedRows == 0) throw new KeyNotFoundException($"No product found with id {id}");
        await _dbContext.SaveChangesAsync();
    }

    public async Task Delete(Guid id)
    {
        var affectedRows =  await _dbContext.Products.Where(p=> p.Id == id).ExecuteDeleteAsync();
       
        if (affectedRows == 0) throw new KeyNotFoundException(GetNotFoundErr(id));

        await _dbContext.SaveChangesAsync();
    }
}