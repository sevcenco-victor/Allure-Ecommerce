namespace allure.Domain.Contracts.Product;

public record ProductResponse(
    Guid Id,
    string? ImagePath,
    string Title,
    decimal Price
);