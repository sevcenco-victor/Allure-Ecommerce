namespace allure.Domain.Models;

public class Address
{
    public string Country { get; private set; } = string.Empty;
    public string State { get;private  set; } = string.Empty;
    public string City { get;private  set; } = string.Empty;
    public string Street { get;private  set; } = string.Empty;
    public string? Street2 { get; private set; }
    public string PostalCode { get; private set; } = string.Empty;
}