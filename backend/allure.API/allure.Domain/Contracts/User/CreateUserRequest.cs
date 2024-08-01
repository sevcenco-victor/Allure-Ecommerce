using allure.Domain.Models;

namespace allure.Domain.Contracts.User;

public record CreateUserRequest(
    string FirstName,
    string LastName,
    DateTime? BirtDay,
    Gender Gender,
    string Phone,
    string Email,
    string Password
);
