namespace allure.Domain.Contracts.Product;

public record CreateProductRequest(
    string Title,
    decimal Price,
    List<string> ColorsHex,
    List<string> Sizes,
    string? Description,
    string? TrapezeFit,
    string? FabricAndCare,
    Guid CategoryId,
    List<string> Tags);