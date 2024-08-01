using System.Reflection.Metadata.Ecma335;

namespace allure.Domain.Models;

public class DebitCard
{
    public Guid Id { get; private set; }
    public string Number { get; private set; } = string.Empty;
    public DateTime EndDate { get; private set; }
    public string Cvc { get; private set; } = string.Empty;
    public string HolderName { get; private set; } = string.Empty;
    public string? Email { get; private set; } = string.Empty;
    public Guid UserId { get; private set; }
    public User? User { get; private set; }
}