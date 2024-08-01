using allure.Domain.Models;

namespace allure.Domain.Contracts.User;

public record DetailedUserResponse(
    string FirstName,
    string LastName,
    DateTime? BirthDay,
    Gender Gender,
    string Phone,
    string Email,
    string Password,
    bool IsVerified
);