namespace allure.Domain.Models;

public class Shop
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public Guid AddressId { get; set; }
    public Address Address { get; set; }
    public string Phone { get; set; } = string.Empty;
}