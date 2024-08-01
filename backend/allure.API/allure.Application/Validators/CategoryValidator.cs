using allure.Domain.Models;
using FluentValidation;

namespace allure.Application.Validators;

public class CategoryValidator : AbstractValidator<Category>
{
    public CategoryValidator()
    {
        RuleFor(c => c.CategoryName)
            .NotEmpty()
            .NotNull()
            .MaximumLength(Category.CATEGORY_MAX_LENGTH)
            .WithMessage("Category name should not have more then 100 characters");
    }
}