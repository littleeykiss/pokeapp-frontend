# 🌑 PokeApp Frontend – Angular + Material

Aplicación web hecha en Angular que permite buscar Pokémon por nombre, consultar sus datos usando una API Spring Boot, y ver el historial de búsquedas. Todo con un diseño visual moderno y oscuro gracias a Angular Material.

---

## 🚀 Tecnologías usadas

| Tecnología     | Descripción                           |
|----------------|---------------------------------------|
| Angular 17     | Framework frontend moderno            |
| Angular Material | Componentes UI responsivos y accesibles |
| RxJS           | Programación reactiva (auto-refresh)  |
| TypeScript     | Tipado estricto para frontend         |
| CSS Flexbox    | Layout tipo dashboard                 |

---

## 🎯 Funcionalidades

✅ Buscar un Pokémon por nombre  
✅ Mostrar información detallada (tipos, habilidades, ataques, estadísticas)  
✅ Imagen en base64 directamente desde la PokeAPI  
✅ Historial de búsquedas en tiempo real (refresco cada 10 segundos)  
✅ Diseño responsivo con tema oscuro  
✅ Barra lateral izquierda tipo dashboard  
✅ Estructura limpia con componentes standalone

---

## 📦 Requisitos

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)
- Backend corriendo en `http://localhost:8080`

---

## 🛠 Cómo ejecutar el frontend

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/pokeapp-frontend.git
cd pokeapp-frontend

# Instala dependencias
npm install

# Arranca la app
ng serve
