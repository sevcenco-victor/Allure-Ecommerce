namespace allure.Domain.Models;

public class ShippingAddress
{
    public Guid AddressId { get; set; }
    public Address Address { get; set; }
    public string AdditionalInfo { get; set; } = string.Empty;
}