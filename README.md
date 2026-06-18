# Eileen Meredith — Portfolio

**IT Engineer · Business Operations & Digital Transformation**

> Portafolio profesional construido con Astro, TypeScript y Tailwind CSS. Desplegado automáticamente en GitHub Pages.

## Ver portafolio en línea

**[https://reshadoyou.github.io/portfolio](https://reshadoyou.github.io/portfolio)**

---

## Sobre el proyecto

Este portafolio refleja mi perfil profesional como Ingeniera en Informática especializada en la gestión de operaciones empresariales, sistemas ERP, automatización de procesos y desarrollo web. Fue desarrollado utilizando inteligencia artificial como herramienta de apoyo, combinada con mis propios conocimientos técnicos.

### Áreas que representa

- **Gestión Empresarial** — Inventarios, valorización de existencias, control de costos, compras, facturación, notas de crédito, análisis de tipo de cambio
- **ERP & Sistemas** — Administración de Softland ERP, gestión de módulos comerciales, documentación operacional
- **Automatización** — Macros VBA, automatización de reportes, conciliaciones, flujos de trabajo digitales
- **Desarrollo Web** — Sitio corporativo de Meredith Fueltec (HTML5, CSS3, JS, SEO técnico, accesibilidad, seguridad)

---

## Tecnologías del portafolio

- [Astro](https://astro.build/) — Framework web estático
- [TypeScript](https://www.typescriptlang.org/) — Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) — Estilos utility-first
- [GitHub Pages](https://pages.github.com/) — Hosting y despliegue automático

## Estructura del proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── profile.jpg
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
│   │   └── portfolio.ts       ← datos del portafolio
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Desarrollo local

```bash
# Clonar repositorio
git clone https://github.com/reshadoyou/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:4321/portfolio
```

## Comandos disponibles

| Comando           | Acción                                               |
| :---------------- | :--------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321/portfolio` |
| `npm run build`   | Genera el sitio en `./dist/`                         |
| `npm run preview` | Previsualiza la build localmente                     |

## Despliegue

El sitio se despliega automáticamente en GitHub Pages con cada `push` a `main` mediante GitHub Actions.

URL de producción: **https://reshadoyou.github.io/portfolio**

## Personalización

Edita `src/data/portfolio.ts` para actualizar información personal, experiencia, proyectos y habilidades. Cada sección del portafolio es un componente independiente en `src/components/`.


