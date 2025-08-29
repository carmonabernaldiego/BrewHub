# Guía de instalación: Frontend (React + TypeScript + Tailwind)

Frontend para la administración de usuarios construido con **React**, **TypeScript** y **Tailwind CSS**. Incluye autenticación por token (Bearer), protección de rutas y tabla de usuarios con ordenamiento.

---

#### Requisitos:

- **Node.js** ≥ 18
- **npm** ≥ 9

> Si ya tienes Node, verifica versiones:

```bash
node -v
npm -v
```

---

#### Instalación:

```bash
git clone https://github.com/carmonabernaldiego/BrewHub
cd BrewHub/frontend
npm install
```

---

#### Configuración del host

Por defecto, la aplicación siempre apunta a http://localhost:8000, pero puede ser configurada en el archivo /src/services/api.ts

```ts
const API_BASE_URL = "http://localhost:8000/api";
```

---

#### Desarrollo

```bash
npm start
```

- La aplicación estará disponible por defecto en **[http://localhost:3000](http://localhost:3000)**

---

#### Build para producción

```bash
npm run build
```

- Genera la carpeta `build/` lista para servirse con Nginx/Apache/Netlify/etc.
