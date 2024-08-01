using allure.Application.Services;
using allure.Domain.Contracts;
using allure.Domain.Contracts.Product;
using allure.Infrastructure;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace allure.API.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly AllureDbContext _dbContext;
    private readonly IProductService _productService;

    public ProductController(AllureDbContext context, IProductService productService)
    {
        _dbContext = context;
        _productService = productService;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateProductRequest request)
    {
        try
        {
            var productId = await _productService.Create(request);
            return Ok(productId);
        }
        catch (ValidationException e)
        {
            return BadRequest(e.Errors);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get(Guid id)
    {
        try
        {
            var product = await _productService.Get(id);
            return Ok(product);
        }
        catch (KeyNotFoundException e)
        {
            return NotFound(e.Message);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        try
        {
            var product = await _productService.GetAll();
            return Ok(product);
        }
        catch (KeyNotFoundException e)
        {
            return NotFound(e.Message);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpGet("details/{id:guid}")]
    public async Task<IActionResult> GetView(Guid id)
    {
        try
        {
            var product = await _productService.GetView(id);
            return Ok(product);
        }
        catch (KeyNotFoundException e)
        {
            return NotFound(e.Message);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Update(Guid id, UpdateProductRequest request)
    {
        try
        {
            await _productService.Update(id, request);
            return NoContent();
        }
        catch (KeyNotFoundException e)
        {
            return NotFound(e.Message);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        try
        {
            await _productService.Delete(id);
            return NoContent();
        }
        catch (KeyNotFoundException e)
        {
            return NotFound(e.Message);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }
}