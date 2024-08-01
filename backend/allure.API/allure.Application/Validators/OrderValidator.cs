using allure.Domain.Models;
using FluentValidation;

namespace allure.Application.Validators;

public class OrderValidator : AbstractValidator<Order>
{
    public OrderValidator()
    {
        RuleFor(x => x.UserId)
            .NotNull()
            .WithMessage("Order must have assigned an user");
        RuleFor(x => x.OrderDate)
            .NotNull()
            .WithMessage("Order date can't be null");
        RuleFor(x => x.Status)
            .IsInEnum()
            .WithMessage("Invalid order status");
        RuleFor(x => x.ProductList)
            .NotEmpty()
            .WithMessage("Product list can't be empty");
        RuleFor(x => x.DeliveryOption)
            .IsInEnum()
            .WithMessage("Invalid delivery option");
    }
}