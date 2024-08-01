using allure.Domain.Contracts.User;
using allure.Domain.Models;
using FluentValidation;
using PhoneNumbers;

namespace allure.Application.Validators;

public class UserValidator:AbstractValidator<CreateUserRequest>
{
    public UserValidator()
    {
        RuleFor(x => x.FirstName)
            .NotEmpty()
            .MinimumLength(3).WithMessage("First name must be no empty and more then 3 characters");
        
         RuleFor(x => x.LastName)
            .NotEmpty()
            .MinimumLength(3).WithMessage("Last name must be no empty and more then 3 characters");

         RuleFor(x => x.BirtDay)
             .NotNull()
             .LessThan(DateTime.Now.AddYears(-12))
             .WithMessage("You must be at least 12 years old");

         RuleFor(x => x.Gender)
             .IsInEnum()
             .WithMessage("Invalid Gender Choice");

         RuleFor(x => x.Phone)
             .Must(BeAValidPhoneNumber)
             .WithMessage("Invalid phone number");

         RuleFor(x => x.Email)
             .EmailAddress()
             .WithMessage("Invalid email address");

         RuleFor(x => x.Password)
             .NotEmpty()
             .WithMessage("Password could not be empty");
         
    }
    private bool BeAValidPhoneNumber(string phoneNumber)
    {
        try
        {
            var phoneNumberUtil = PhoneNumberUtil.GetInstance();
            var number = phoneNumberUtil.Parse(phoneNumber, null);
            return phoneNumberUtil.IsValidNumber(number);
        }
        catch (NumberParseException)
        {
            return false;
        }
    }
}