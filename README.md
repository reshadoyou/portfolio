# Portfolio Personal - Eileen Meredith P.

Un portfolio moderno y responsivo construido con Astro, TypeScript y Tailwind CSS. Desplegado automáticamente en GitHub Pages.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Modo Oscuro**: Tema claro/oscuro automático y manual
- **Performance Optimizado**: Construido con Astro para máximo rendimiento
- **SEO Friendly**: Meta tags optimizados y sitemap automático
- **Accesible**: Diseño accesible siguiendo mejores prácticas
- **Despliegue Automático**: CI/CD con GitHub Actions

## �️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [TypeScript](https://www.typescriptlang.org/) - JavaScript con tipos
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utility-first
- [GitHub Pages](https://pages.github.com/) - Hosting gratuito

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── cv-fernando-rodriguez.pdf
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── portfolio.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
└── README.md
```

## 🏃‍♂️ Desarrollo Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/reshadoyou/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Visita `http://localhost:4321/portfolio`

## 📦 Comandos Disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`      |
| `npm run preview`         | Previsualiza la build localmente antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro como `astro add`, `astro check` |

## 🚀 Despliegue

El sitio se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`. El workflow de GitHub Actions mejorado incluye:

1. **Verificación del entorno** - Muestra información de Node.js y npm
2. **Instalación con reintentos** - Instala dependencias con hasta 3 intentos automáticos
3. **Verificación de dependencias** - Confirma que las dependencias se instalaron correctamente
4. **Construcción del proyecto** - Ejecuta `npm run build` con Astro
5. **Validación del build** - Verifica que `dist/` e `index.html` se generaron correctamente
6. **Despliegue a GitHub Pages** - Sube y despliega automáticamente

### ✨ Características del Workflow

- 🔄 **Reintentos automáticos**: Si falla la instalación de dependencias, reintenta hasta 3 veces
- 🧹 **Limpieza de caché**: Limpia automáticamente el caché de npm en caso de errores
- ✅ **Verificación exhaustiva**: Confirma que todos los archivos necesarios se generaron
- 📊 **Logs detallados**: Proporciona información útil para debugging
- 🌍 **Descripciones en español**: Facilita el seguimiento del proceso

### Configuración Manual

Si prefieres desplegar manualmente:

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Los archivos estáticos estarán en `dist/`**

## 🎨 Personalización

### Información Personal
Edita `src/data/portfolio.ts` para actualizar:
- Información personal
- Experiencia laboral
- Proyectos
- Habilidades

### Estilos
- Los estilos globales están en `src/styles/global.css`
- Los componentes usan Tailwind CSS para estilos
- El tema oscuro se maneja automáticamente

### Componentes
Cada sección del portfolio es un componente independiente en `src/components/`:
- `Header.astro` - Navegación principal
- `Hero.astro` - Sección principal con presentación
- `About.astro` - Información personal
- `Experience.astro` - Experiencia laboral
- `Projects.astro` - Proyectos destacados
- `Skills.astro` - Habilidades técnicas
- `Contact.astro` - Información de contacto
- `Footer.astro` - Pie de página

## 📝 Configuración de GitHub Pages

1. Ve a **Settings** > **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El workflow se ejecutará automáticamente en cada push

## 🐛 Reporte de Problemas

Si encuentras algún problema, por favor [abre un issue](https://github.com/reshadoyou/portfolio/issues).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

🌟 **Estado del Proyecto**: ¡Portfolio desplegado y funcionando!

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!
