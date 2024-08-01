namespace allure.Domain.Models;

public class User
{
    public User()
    {
    }

    public User(string firstName, string lastName, DateTime? birthDay, Gender gender, string phone, string email,
        string password)
    {
        Id = Guid.NewGuid();
        FirstName = firstName;
        LastName = lastName;
        BirthDay = birthDay;
        Gender = gender;
        Phone = phone;
        Email = email;
        Password = password;
    }

    public Guid Id { get; private set; }
    public string FirstName { get; private set; } = string.Empty;
    public string LastName { get; private set; } = string.Empty;
    public DateTime? BirthDay { get; private set; }
    public Gender Gender { get; private set; } = Gender.Unspecified;
    public string Phone { get; private set; } = string.Empty;
    public string Email { get; private set; } = string.Empty;
    public string Password { get; private set; } = string.Empty;
    public bool IsVerified { get; private set; } = false;

    public List<Order> Orders { get; private set; } = [];
    public List<ShippingAddress> ShippingAddresses { get; private set; } = [];
    public List<WishProduct> Wishes { get; private set; } = [];
    public List<DebitCard> DebitCards { get; private set; } = [];
}