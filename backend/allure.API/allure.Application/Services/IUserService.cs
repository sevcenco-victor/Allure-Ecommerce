using allure.Domain.Contracts.User;

namespace allure.Application.Services;

public interface IUserService
{
    Task<Guid> Create(CreateUserRequest request);
    Task<MinimalUserResponse> GetMinimal(Guid id);
    Task<DetailedUserResponse> GetDetailed(Guid id);
    Task<List<MinimalUserResponse>> GetAll();
    Task Update(Guid id, UpdateUserRequest request);
    Task Delete(Guid id);
}