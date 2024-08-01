namespace allure.Domain.Contracts.User;

public record UpdateUserRequest(
    string FirstName,
    string LastName,
    DateTime? BirtDay,
    string Phone,
    string Email,
    string Password
    );