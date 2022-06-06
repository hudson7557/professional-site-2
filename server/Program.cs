var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<GetHomepage>();


var app = builder.Build();



app.Run();
