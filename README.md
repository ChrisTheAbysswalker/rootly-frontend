# Proyecto Rootly - Frontend

Este es el repositorio del frontend para el Proyecto Turing. La aplicación está construida con React y Vite, y utiliza Tailwind CSS para el diseño.

## Documentación Técnica

### Requisitos del Sistema

- Node.js (versión 18.x o superior recomendada)
- npm (normalmente se instala con Node.js)

### Configuración y Ejecución Local

Siga estas instrucciones para configurar y ejecutar el proyecto en su entorno local.

1.  **Clonar el Repositorio**

    ```bash
    git clone <https://github.com/ChrisTheAbysswalker/rootly-frontend>
    ```

2.  **Navegar al Directorio del Proyecto**

    ```bash
    cd turing-proyect
    ```

3.  **Instalar Dependencias**

    Ejecute el siguiente comando para instalar todas las dependencias necesarias definidas en el archivo `package.json`.

    ```bash
    npm install
    ```

4.  **Ejecutar el Proyecto en Modo de Desarrollo**

    Una vez instaladas las dependencias, puede iniciar el servidor de desarrollo local con:

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173` (o en el puerto que Vite asigne si el 5173 está ocupado).

### Scripts Disponibles

En el archivo `package.json` se definen los siguientes scripts:

-   `npm run dev`: Inicia el servidor de desarrollo de Vite.
-   `npm run build`: Compila la aplicación para producción en el directorio `dist`.
-   `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
-   `npm run preview`: Inicia un servidor local para previsualizar la compilación de producción.

### Dependencias Principales

El proyecto utiliza las siguientes librerías principales:

-   `react`: Para construir la interfaz de usuario.
-   `react-dom`: Para renderizar los componentes de React en el DOM.
-   `react-router-dom`: Para gestionar la navegación y el enrutamiento en la aplicación.
-   `tailwindcss`: Para el diseño y los estilos.
-   `lucide-react`: Para los iconos.
-   `jwt-decode`: Para decodificar tokens JWT en el lado del cliente.
-   `vite`: Como herramienta de construcción y servidor de desarrollo.

### Estructura del Proyecto

```
turing-proyect/
├── src/
│   ├── api/         # Lógica para peticiones a la API
│   ├── assets/      # Archivos estáticos como imágenes y SVGs
│   ├── components/  # Componentes reutilizables de React
│   ├── layouts/     # Componentes de estructura (Header, Footer)
│   ├── pages/       # Componentes que representan páginas completas
│   ├── App.jsx      # Componente raíz de la aplicación
│   └── main.jsx     # Punto de entrada de la aplicación
├── vite.config.js   # Configuración de Vite
├── tailwind.config.js # Configuración de Tailwind CSS
└── package.json     # Dependencias y scripts del proyecto
```