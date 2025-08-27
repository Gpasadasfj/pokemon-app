# Pokémon App

Una aplicación simple desarrollada en React + TypeScript con Vite que permite mostrar información de un pokémon ingresado por el usuario, consumiendo la **PokéAPI**.

Este proyecto forma parte del **Máster en Desarrollo Full Stack**, y está diseñado siguiendo los principios de **Clean Architecture**.

---

##  Índice

1. [Descripción](#descripción)  
2. [Demo en Vivo](#demo-en-vivo)  
3. [Arquitectura](#arquitectura)  
4. [Instalación](#instalación)  
5. [Tecnologías](#tecnologías)  

---

## Descripción

La aplicación permite al usuario buscar un pokémon por nombre o identificador y mostrar datos clave como nombre, imagen, tipos y estadísticas principales.

---

## Demo en Vivo

Puedes acceder a la aplicación desplegada en GitHub Pages:  
[Ver aplicación en vivo](https://gpasadasfj.github.io/pokemon-app/) :contentReference[oaicite:0]{index=0}

---

## Arquitectura

El proyecto está estructurado siguiendo **Clean Architecture**, separando responsabilidad y capas de manera clara:

- **Capa de presentación (UI):** Componentes React encargados de la interacción y visualización.
- **Capa de dominio:** Define los modelos centrales (por ejemplo `Pokemon`, `Stats`) y las interfaces para el uso y obtención de datos.
- **Capa de infraestructura (data):** Implementa la lógica concreta para consumir la PokéAPI y mapear datos desde la red a los modelos del dominio.
- **Inyección de dependencias:** Permite que el dominio sea independiente de detalles concretos de la API o la presentación.

Este enfoque facilita mantenimiento, testeo unitario y escalabilidad del código.

---

## Instalación

Sigue estos pasos para ejecutarla localmente:

```bash
# Clona el repositorio
git clone https://github.com/Gpasadasfj/pokemon-app.git

# Entra al directorio del proyecto
cd pokemon-app

# Instala dependencias
npm install  # o yarn install

# Inicia el servidor de desarrollo
npm run dev  # o yarn dev

# La aplicación estará disponible en http://localhost:5173 (u otro puerto que indique Vite)
```

---

## Tecnologías

- **Frontend:** React + TypeScript  
- **Bundler:** Vite  
- **Arquitectura:** Clean Architecture (capas independientes)  
- **API:** PokéAPI (RESTful API pública de Pokémon)  
