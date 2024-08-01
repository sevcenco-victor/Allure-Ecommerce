using allure.Application.Exceptions;
using allure.Application.Services;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace allure.API.Controllers;

[ApiController]
[Route("[controller]")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [HttpPost]
    public async Task<IActionResult> Create(string newCategory)
    {
        try
        {
            var productId = await _categoryService.Create(newCategory);
            return Ok(productId);
        }
        catch (ValidationException e)
        {
            return BadRequest(e.Message);
        }
        catch (AlreadyExistsException e)
        {
            return BadRequest(e.Message);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _categoryService.GetAll());
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get(Guid id)
    {
        try
        {
            var category = await _categoryService.Get(id);
            return Ok(category);
        }
        catch (KeyNotFoundException e)
        {
            return NotFound(e.Message);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update( Guid id, string newCategory)
    {
        try
        {
            var categoryId = await _categoryService.Update(id, newCategory);
            return Ok(categoryId);
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
            var categoryId = await _categoryService.Delete(id);
            return Ok(categoryId);
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