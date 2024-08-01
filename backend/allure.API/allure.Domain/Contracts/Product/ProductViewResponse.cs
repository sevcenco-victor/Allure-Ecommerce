namespace allure.Domain.Contracts.Product;

public record ProductViewResponse(
    Guid Id,
    string Title,
    decimal Price,
    IEnumerable<string> Colors,
    IEnumerable<string> Sizes,
    string? Description,
    string? TrapezeFit,
    string? FabricAndCare,
    string Category
);