<div align="center">
    <h1>Proyecto 6: Aplicación backend con autenticación<h1>
</div>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,react,express,mongo,github" />
  </a>
</p>

<div align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/UDD-DWFS-orange">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/MriquelmeCPHCJA/UDD-PROYECTOS?color=green">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/MriquelmeCPHCJA/UDD-PROYECTOS">
</div>


##  🏨 Introducción
En este proyecto, el objetivo fue construir una aplicación backend que administre la autenticación y autorización de los usuarios. Este es un componente fundamental en la mayoría de las aplicaciones web, y este proyecto me ofrecio la oportunidad de aprender sobre las mejores prácticas y las herramientas disponibles para manejar estas tareas, como los JWT (JSON Web Tokens).

Además, utilizarás MongoDB y Mongoose para la persistencia de datos, y construí un modelo de "usuario", un modelo de "producto" y un modelo de "categorias". Se pueden enlazar (productos, categorias). Estos modelos estarán relacionados entre sí a través de MongoDB. Tambien está el registro de Usuarios, su modificación, verificación y actualización. Adicionalmente para temas de pruebas también fueron agregados las consultas de usuarios y eliminación de usuarios.

El proyecto posée una estructura de carpetas clara con controladores, modelos, rutas y middleware. Finalmente, se desplegó la aplicación a través de render.com y la base de datos en MongoDB Atlas.

## Tabla de Contenidos
1. [Requisitos](#)  
2. [Instalación](#️)  
3. [Estructura del Proyecto](#)  
4. [API de Autenticación y Productos](#)  
5. [Endpoints Principales](#)
6. [Documentación](#)
7. [Render.com](#)  




##  ✅ Requisitos
- NodeJS
- Express
- Bcryptjs
- jsonwebtoken
- Cors
- dotenv
- mongoose
- nodemon


##  ⚙️ Instalación
1. **Clonar el repositorio:**
   ```
   git clone https://github.com/MriquelmeCPHCJA/PROYECTO-6.git
   ```
2. **Acceder al directorio del proyecto:**
   ```
   cd PROYECTO-6
   ```
3. **Instalar las dependencias:**
   ```
   npm install
   ```
4. **Configurar el archivo `.env`:**
   Crear un archivo `.env` con los siguientes contenidos:
   ```
    DB_URI=mongodb+srv://marceloriquelme:adminmarcelo@p-6.6rppe.mongodb.net/?retryWrites=true&w=majority&appName=P-6

    PORT=3000 **(solo para instalación local)**

    SECRET_KEY=MRIQUELME
   ```
5. **Ejecutar la aplicación:**
   ```
   npm start
   ```


## 📂 Estructura del Proyecto

```
📦 PROYECTO-6
│
├── 📂 config
│         └── db.js
│
├── 📂 controlles
│         ├── categoryProductController.js
│         ├── productController.js
│         └── UserController.js
│     
├── 📂 middleware
│         └── authorization.js
│
├── 📂 models
│         ├── CategoryProducts.js
│         ├── Product.js
│         └── User.js
│     
├── 📂 routes
│         ├── categoryProductsRoutes.js
│         ├── productRoutes.js
│         └── userRoutes.js
│
├── 📂 docs
│         └── proyecto6.yaml
│
├── 📜 .env
└── 📜 server.js
```




## ✅ **API de Autenticación y Productos**

Una API RESTful creada con Node.js, Express y MongoDB que permite la autenticación de usuarios y operaciones CRUD para productos y categorias. 

- Maneja la creación, lectura, actualización y eliminación de productos. 
- Majena el registro, actualización, verificación de token  y login de usuarios.

Puedes crear una base de datos MongoDB en local modificanco el atchivo  `.env` y dirigiendo la bade de datos en el equipo local o usar una base de datos en la nube como MongoDB Atlas.


#### **Características**

- Registro e inicio de sesión de usuarios.
- Autenticación con JSON Web Tokens (JWT).
- Operaciones CRUD completas para productos.
- Documentación con Swagger.



## ✅ **Endpoints Principales**

#### **Usuarios**

- `POST /api/users/register` - Registrar un usuario.
```
Body:
    username: {
        tipo: String,
        requerido
        único
    },

    email: {
        tipo: String,
        requerido
        único
    },

    password: {
        tipo: String,
        requerido
    },
    nameUser:  {
        firstname: {
            type: String,
            requerido
        },
        lastname: {
            type: String,
            requerido
        }
    },

    addressUser: { 
        street1: { 
            type: String 
        } ,
        streer2:{ 
            type: String 
        } , 
        state:{ 
            type: String 
        } , 
        city: { 
            type: String 
        } , 
        zip:{ 
            type: String 
        }
    },

    phoneUser: {
        phone1:{ 
            type: Number
        }, 
        phone2:{ 
        type: Number 
        }
    }
```
- `POST /api/users/login` - Iniciar sesión.
```
Body:
    username: {
        tipo: String
    },

    password: {
        tipo: String
    },    
```
- `GET /api/users/verify-user` - Verificar token.
```
Headers:
    Bearer {Token}

```
- `PUT /api/users/update-user/:id` - Actualizar un usuario.
```
Params:
    id
Body: (Puede omitir uno o varios valores en la actualización)
    username: {
        tipo: String,
        requerido
        único
    },

    email: {
        tipo: String,
        requerido
        único
    },

    password: {
        tipo: String,
        requerido
    },
    nameUser:  {
        firstname: {
            type: String,
            requerido
        },
        lastname: {
            type: String,
            requerido
        }
    },

    addressUser: { 
        street1: { 
            type: String 
        } ,
        streer2:{ 
            type: String 
        } , 
        state:{ 
            type: String 
        } , 
        city: { 
            type: String 
        } , 
        zip:{ 
            type: String 
        }
    },

    phoneUser: {
        phone1:{ 
            type: Number
        }, 
        phone2:{ 
        type: Number 
        }
    }

```

#### **Categorias**

- `POST /api/category/create-category` - Crear una categria.
```
Body:
    name: {
        tipo: String,
        único,
        requerido
    },

    description: {
        tipo: String,
        requerido
    }
```
- `GET /api/category/all-category` - Listar todas las categrias.

- `GET /api/category/category/:id` - Obtener categria por ID.
```
Params:
    id
```
- `PUT /api/category/update-category/:id` - Actualizar una categria.
```
Params:
    id
Body:
    name: {
        tipo: String,
        único,
        requerido
    },

    description: {
        tipo: String,
        requerido
    }
```
- `DELETE /api/category/delete-category/:id` - Eliminar una categria.
```
Params:
    id
```

#### **Productos**

- `POST /api/products/create-product` - Crear un producto.
```
Body:
    nameProduct: {
        tipo: String,
        requerido,
        unico
    },

    priceProduct: {
        tipo: Number,
        requerido
    },

    quantityProduct: {
        tipo: Number,
        requerido
    },

    descriptionProduct: {
        tipo: String,
        requerido
    },

    categoryProduct: [
        {
            tipo: ObjectId,
            ref: 'CategoryProducts',
        }
    ]
```
- `GET /api/products/all-products` - Listar todos los productos.
- `GET /api/products/product/:id` - Obtener producto por ID.
```
Params:
    id
```
- `PUT /api/products/update-product/:id` - Actualizar un producto.
```
Params:
    id
Body: (Puede omitir uno o varios valores en la actualización)
    nameProduct: {
        tipo: String,
    },

    priceProduct: {
        tipo: Number,
    },

    quantityProduct: {
        tipo: Number,
    },

    descriptionProduct: {
        tipo: String,
    }
```
- `DELETE /api/products/delete-product/:id` - Eliminar un producto.
```
Params:
    id
```

## **Documentación**

La API cuenta con documentación generada con Swagger, disponible en:
**(Archivo apunta a render.com)**
```
Archivo Swagger /docs/proyecto6.yaml
```
## 🌎 **Render.com**

Se desplegó el proyecto en Render.com, puedes acceder a la API en:

```
https://proyecto-6-ueou.onrender.com
```

## 📧 Contácto
**Marcelo Riquelme**

**Email**: luriquelme.dwfs1@bootcampudd.cl