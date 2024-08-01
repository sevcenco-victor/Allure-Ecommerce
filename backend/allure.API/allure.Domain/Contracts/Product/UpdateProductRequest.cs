namespace allure.Domain.Contracts.Product;

public record UpdateProductRequest(
    string Title,
    decimal Price,
    string Description,
    string TrapezeFit,
    string FabricAndCare,
    Guid CategoryId
);