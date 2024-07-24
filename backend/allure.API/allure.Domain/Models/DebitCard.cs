namespace allure.Domain.Models;

public class DebitCard
{
    public Guid Id { get; set; }
    public string Number { get; set; } = string.Empty;
    public DateTime EndDate { get; set; }
    public int Cvc { get; set; } = 000;
    public string HolderName { get; set; } = string.Empty;
    public string? Email { get; set; } = string.Empty;

}