namespace allure.Domain.Contracts.User;

public record MinimalUserResponse(
    string FirsName,
    string LastName,
    string Phone,
    string Email,
    bool IsVerified
);