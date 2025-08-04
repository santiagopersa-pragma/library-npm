# Arquetipo para Workspace de Librería Angular

Este repositorio es un arquetipo base para crear workspaces de Angular que contengan librerías reutilizables. Proporciona una estructura predefinida y configuración optimizada para el desarrollo, testing y distribución de librerías Angular.

## Configuración Inicial

### 1. Personalizar el nombre de la librería

Reemplaza `__library-name__` por el nombre de tu librería en:

- Nombre de la carpeta `projects/__library-name__/`
- `projects/__library-name__/package.json` - campo `name`
- `angular.json` - configuración del proyecto
- Scripts de build y referencias

### 2. Configurar package.json de la librería

Edita `projects/__library-name__/package.json`:

```json
{
  "name": "@tu-scope/tu-libreria",
  "version": "1.0.0",
  "peerDependencies": {
    "@angular/common": "^19.2.0",
    "@angular/core": "^19.2.0"
  }
}
```

## Estructura del Proyecto

```
library-npm/
├── projects/
│   ├── __library-name__/          # Carpeta de la librería (cambiar nombre)
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── components/     # Componentes organizados por atomic design
│   │   │   │   │   ├── atoms/
│   │   │   │   │   ├── molecules/
│   │   │   │   │   ├── organisms/
│   │   │   │   │   └── templates/
│   │   │   │   ├── services/       # Servicios de la librería
│   │   │   │   ├── utils/          # Utilidades y helpers
│   │   │   │   └── constants/      # Constantes
│   │   │   └── public-api.ts       # API pública de la librería
│   │   ├── ng-package.json
│   │   └── package.json
│   └── demo/                       # Aplicación demo para testing
├── angular.json
├── package.json
└── README.md
```

## Comandos Disponibles

### Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar aplicación demo
npm start

# Build de la librería
npm run build

# Build en modo watch
npm run watch
```

### Testing y Calidad

```bash
# Ejecutar tests
npm test

# Linting
npm run lint
```

## Estructura de Componentes

La librería sigue el patrón **Atomic Design**:

- **Atoms**: Componentes básicos (botones, inputs, labels)
- **Molecules**: Combinación de atoms (formularios simples, cards)
- **Organisms**: Componentes complejos (headers, sidebars)
- **Templates**: Layouts y plantillas de página

## Exportación de Módulos

Todos los exports públicos se definen en `src/public-api.ts`:

```typescript
// Componentes
export * from "./lib/components/atoms";
export * from "./lib/components/molecules";
export * from "./lib/components/organisms";
export * from "./lib/components/templates";

// Servicios
export * from "./lib/services";

// Utilidades
export * from "./lib/utils";
```

## Distribución

La librería se compila en `dist/__library-name__/` y está lista para:

- Publicación en npm/registry privado
- Instalación como dependencia en otros proyectos
- Distribución como paquete standalone

## Aplicación Demo

Incluye una aplicación demo en `projects/demo/` para:

- Probar componentes durante el desarrollo
- Documentar casos de uso
- Validar la integración de la librería

## Tecnologías Incluidas

- **Angular 19+**
- **TypeScript**
- **Jest** para testing
- **ESLint** para linting
- **ng-packagr** para build de librería

## Uso del Arquetipo

1. Clona este repositorio
2. Renombra la carpeta `__library-name__` por el nombre de tu librería
3. Actualiza las referencias en los archivos de configuración
4. Desarrolla tus componentes siguiendo la estructura propuesta
5. Exporta los módulos públicos en `public-api.ts`
6. Ejecuta el build y distribuye tu librería
