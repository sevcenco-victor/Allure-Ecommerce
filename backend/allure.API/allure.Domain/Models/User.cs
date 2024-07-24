namespace allure.Domain.Models;

public class User
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; }= string.Empty;
    public DateTime? Birthday { get; set; }
    public Gender Gender { get; set; }
    public string Phone { get; set; }= string.Empty;
    public string Email { get; set; }= string.Empty;
    public string Password { get; set; }= string.Empty;
    public bool IsVerified { get; set; } = false;
    public IReadOnlyCollection<ShippingAddress> ShippingAddresses { get; set; } = [];
    public IReadOnlyCollection<Product> WishList { get; set; } = [];
    public IReadOnlyCollection<DebitCard> PaymentCardList { get; set; } = [];
}