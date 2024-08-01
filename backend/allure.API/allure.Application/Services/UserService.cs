using System.ComponentModel.DataAnnotations;
using allure.Application.Exceptions;
using allure.Application.Validators;
using allure.Domain.Contracts.User;
using allure.Domain.Models;
using allure.Infrastructure;
using Microsoft.EntityFrameworkCore;
using ValidationException = FluentValidation.ValidationException;

namespace allure.Application.Services;

public class UserService : IUserService
{
    private readonly AllureDbContext _dbContext;

    public UserService(AllureDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Guid> Create(CreateUserRequest request)
    {
        var validator = new UserValidator();
        var result = await validator.ValidateAsync(request);
        if (!result.IsValid) throw new ValidationException(result.Errors);

        var emailExists = await _dbContext.Users.AnyAsync(u => u.Email.Equals(request.Email));
        if (emailExists) throw new AlreadyExistsException($"Email {request.Email} is already in use");

        var phoneExists = await _dbContext.Users.AnyAsync(u => u.Phone.Equals(request.Phone));
        if (phoneExists) throw new AlreadyExistsException($"Phone {request.Phone} is already in use");

        var newUser = new User(request.FirstName, request.LastName, request.BirtDay, request.Gender, request.Phone,
            request.Email, request.Password);

        await _dbContext.Users.AddAsync(newUser);
        await _dbContext.SaveChangesAsync();
        return newUser.Id;
    }

    public async Task<MinimalUserResponse> GetMinimal(Guid id)
    {
        var user = await _dbContext.Users.FindAsync(id);
        if (user is null) throw new KeyNotFoundException($"No user found with id{id}");

        return new MinimalUserResponse(user.FirstName, user.LastName, user.Phone, user.Email, user.IsVerified);
    }

    public async Task<DetailedUserResponse> GetDetailed(Guid id)
    {
        var user = await _dbContext.Users.FindAsync(id);
        if (user is null) throw new KeyNotFoundException($"No user found with id{id}");

        return new DetailedUserResponse(user.FirstName, user.LastName, user.BirthDay, user.Gender, user.Phone,
            user.Email, user.Password, user.IsVerified);
    }

    public async Task<List<MinimalUserResponse>> GetAll()
    {
        var allUsers = await _dbContext.Users.Select(user =>
                new MinimalUserResponse(user.FirstName, user.LastName, user.Phone, user.Email, user.IsVerified))
            .ToListAsync();

        return allUsers;
    }

    public async Task Update(Guid id, UpdateUserRequest request)
    {
        var affectedRows = await _dbContext.Users
            .Where(u => u.Id == id)
            .ExecuteUpdateAsync(u => u
                .SetProperty(x => x.FirstName, request.FirstName)
                .SetProperty(x => x.LastName, request.LastName)
                .SetProperty(x => x.BirthDay, request.BirtDay)
                .SetProperty(x => x.Phone, request.Phone)
                .SetProperty(x => x.Email, request.Email)
                .SetProperty(x => x.Password, request.Password)
            );

        if (affectedRows == 0) throw new KeyNotFoundException($"No user found with id: {id}");
    }

    public async Task Delete(Guid id)
    {
        var affectedRows = await _dbContext.Users
            .Where(u => u.Id == id)
            .ExecuteDeleteAsync();

        if (affectedRows == 0) throw new KeyNotFoundException($"No user found with id: {id}");
    }
}