// Controllers/UsuariosController.cs
using Microsoft.AspNetCore.Mvc;
using ApplicationIngWeb.Data;
using ApplicationIngWeb.Models.Domain;
using ApplicationIngWeb.Models.DTO;

namespace ApplicationIngWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public UsuariosController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> RegistrarUsuario(AddUsuarioRequest request)
        {
            var usuario = new Usuario
            {
                Nombre = request.Nombre,
                Correo = request.Correo,
                Password = request.Password
            };

            await dbContext.Usuarios.AddAsync(usuario);
            await dbContext.SaveChangesAsync();

            return Ok(usuario);
        }
    }
}
