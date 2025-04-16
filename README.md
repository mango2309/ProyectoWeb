# Proyecto de Gestión de Categorías CRUD con Registro de Usuario

Este es un proyecto web full stack compuesto por:

-  **Backend**: API RESTful construida en .NET Core.
-  **Frontend**: Aplicación SPA construida en Angular.

##  Funcionalidades

###  Backend (ASP.NET Core Web API)
- CRUD completo para categorías (`GET`, `POST`, `PUT`, `DELETE`).
- Registro de usuarios (sin autenticación con token).
- Conexión a base de datos SQL Server mediante Entity Framework Core.

###  Frontend (Angular)
- Lista de categorías.
- Crear, editar y eliminar categorías.
- Registro de usuarios mediante formulario.
- Navegación entre vistas con Angular Router.

---

##  Tecnologías Utilizadas

### Backend
- ASP.NET Core 7
- Entity Framework Core
- SQL Server
- Swagger (documentación y pruebas)

### Frontend
- Angular 17
- Bootstrap (para estilos)
- Angular Forms (Template-driven)

---

##  Estructura del Proyecto

/ProyectoIngWeb │ 
    ├── /backend/ # Proyecto ASP.NET Core │ 
        ├── Controllers/ # Controladores de API │ 
        ├── Models/Domain/ # Modelos de dominio (Usuario, Categoria) │ 
        ├── Data/ # DbContext y configuración │ 
        └── Program.cs # Configuración principal │ 
    └── /frontend/ # Proyecto Angular 
    ├── /src/app/features/ │ 
        ├── /category/ # Módulo de categorías │ 
        └── /users/ # Registro de usuarios 
        ├── /models/ # Interfaces (RegisterUser, Category) 
    └── app-routing.module.ts # Rutas principales

---

## Cómo ejecutar el proyecto

### 🔹 1. Configurar y correr el Backend

1. Asegurarse de tener instalado:
   - .NET 7 SDK
   - SQL Server
2. Abrir el proyecto en Visual Studio.
3. Verificar la cadena de conexión en `appsettings.json`:

```json
"ConnectionStrings": {
  "ApplicationIngWebConnectionString": "Server=localhost;Database=ProyectoIngWeb;Trusted_Connection=True;TrustServerCertificate=True"
} 
//Asegurarse de ingresar su propio servidor 

4. Ejecutar en la consola del administrador de paquetes Nugget:

    Add-Migration Initial
    Update-Database

5. Correr el proyecto.
6. Verificar los endpoints en: https://localhost:7034/swagger //Puede variar segun el dispositivo PC.

### 2. Configurar y correr el Frontend

# Asegurarse de tener instalado Node.js y Angular CLI antes de continuar

# Navegar al proyecto frontend
cd frontend

# Instalar las dependencias
npm install

# Correr el proyecto Angular
ng serve --open //De ser compilado en cosola

# Una vez corriendo, se abrira el navegador y lo dirigirá a:
# http://localhost:4200//Usuarios 




