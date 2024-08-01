using allure.Domain.Models;
using FluentValidation;

namespace allure.Application.Validators;

public class ProductValidator : AbstractValidator<Product>
{
    public ProductValidator()
    {
        RuleFor(x => x.Title)
            .NotNull().WithMessage($"Title can't be null.")
            .Length(3, Product.MAX_TITLE_LENGTH).WithMessage($"Title must be between 3 and {Product.MAX_TITLE_LENGTH} characters long.");

        RuleFor(x => x.Price)
            .NotNull().WithMessage("Price can't be null.")
            .GreaterThanOrEqualTo(0).WithMessage("Price must be a positive number.");

        RuleForEach(x => x.Colors)
            .NotNull().WithMessage("Color at index {CollectionIndex} can't be null.")
            .Must(c => c.StartsWith('#')).WithMessage("Colors must start with '#'.")
            .Length(7).WithMessage("Colors must be 7 characters long including '#'.");

        RuleForEach(x => x.Sizes)
            .NotNull().WithMessage("Size at index {CollectionIndex} can't be null");

        RuleFor(x => x.CategoryId)
            .NotNull().WithMessage("ProductCategoryId can't be null.");

        RuleForEach(x => x.Tags)
            .NotNull().WithMessage("Tag at index {CollectionIndex} can't be null");

        RuleForEach(x => x.Reviews)
            .NotNull().WithMessage("Review at index {CollectionIndex} cant' be null.")
            .SetValidator(new ReviewValidator());
    }
}