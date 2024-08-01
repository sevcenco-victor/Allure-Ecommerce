namespace allure.Domain.Models;

public class Shop
{
    public static readonly int MAX_TITLE_LENGTH = 100;
    public Guid Id { get; private set; }
    public string Name { get; private set; } = string.Empty;
    public Address? Address { get; private set; }
    public string Phone { get; private set; } = string.Empty;
}