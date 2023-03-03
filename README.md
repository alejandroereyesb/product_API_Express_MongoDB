# API REST de productos con Express + MongoDB

Demostración de API REST Node.js con Express, MongoDB (local) y con posibilidad de conectar a MongoDB Atlas en cloud.

## Dependencias

```json
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "mongoose": "^6.4.6"
  },
  "devDependencies": {
    "nodemon": "^2.0.19",
    "dotenv": "^16.0.2",
    "morgan": "^1.10.0"
  }
```

## Instalación
```javascript
npm i 
npm i --save-dev nodemon
```

## Precarga de datos en MongoDB - seeders
Este comando cargará de productos nuestra BBDD por medio de un script que sirve como seed del proyecto
```javascript
npm run feed_db
```

## Arrancar el proyecto para desarrollo
```javascript
  npm run dev
```

## Arrancar el proyecto para producción
```javascript
  npm start
```
## Conectar la app con MongoDB Atlas
Rellena el archivo `.env.example` con tus datos de MongoDB Atlas y cámbiale el nombre a `.env`
```
DB_URL_ATLAS=
```
## Endpoints de prueba

- GET de productos. Se puede hacer paginación desde el back
```javascript
GET http://localhost:3000/api/products
GET http://localhost:3000/api/products?page=1&limit=2
GET http://localhost:3000/api/products?page=2&limit=3

```

- POST de un producto nuevo
```javascript
POST http://localhost:3000/api/products

Petición:
{
"title": "Bocadillo Lomo Queso - Rocafría",
"price": 4.20,
"description": "El mejor bocadillo del barrio",
"image": "https://babelcafeloungebar.com/wp-content/uploads/2021/02/bocadillo-lomo-queso-babel.jpg"
}

Respuesta:
{
"message": "Producto Bocadillo Lomo Queso - Rocafría guardado en el sistema con ID: 632f9a5236a3262c5b1b417a"
}
```
