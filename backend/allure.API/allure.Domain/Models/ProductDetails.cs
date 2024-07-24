namespace allure.Domain.Models;

public class ProductDetails
{
    public Guid Id { get; set; }
    public string Description { get; } = string.Empty;
    public string TrapezeFit { get; } = string.Empty;
    public string FabricAndCare { get; } = string.Empty;
}