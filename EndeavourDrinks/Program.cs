using EndeavourDrinks.Connectionfactory;
using EndeavourDrinks.DAL.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
if (builder.Environment.IsDevelopment()) {
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
}

builder.Services.AddScoped<IConnectionFactory, ConnectionFactory>();
builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();
app.Run();
