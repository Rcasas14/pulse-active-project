# Claude Code Configuration

This file contains configuration and commands for Claude Code to help with development tasks.

## Development Commands

### Build & Development
- `npm run dev` - Start development server (runs on port 5050)
- `npm run build` - Build the project
- `npm run preview` - Preview the built project

### Code Quality
- `npm run lint` - Run linting
- `npm run format` - Format code with Prettier

### Package Management
- `npm install` - Install all dependencies
- `npm audit` - Check for security vulnerabilities
- `npm audit fix` - Fix security issues automatically

## Project Information

This is a Pulse Active website project built with:
- **Vue.js 3.5.19** - Progressive JavaScript framework
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Vue Router 4.5.1** - Official router for Vue.js
- **Vite 7.1.3** - Fast build tool and development server
- **@vueuse/motion** - Animation library for Vue
- **Vuex 4.1.0** - State management
- **AOS (Animate On Scroll)** - Scroll animations

## Project Structure

```
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable Vue components
├── mixins/          # Vue mixins for shared functionality
├── pages/           # Page components
├── router/          # Vue Router configuration
├── sections/        # Section components for pages
└── views/           # Main view components
```

## Key Files

- `src/main.js` - Application entry point
- `src/App.vue` - Root component with router view
- `src/router/index.js` - Router configuration
- `src/style.css` - Tailwind CSS imports
- `tailwind.config.js` - Tailwind configuration
- `vite.config.js` - Vite build configuration

## Development Notes

- Server runs on `0.0.0.0:5050` for network access
- Tailwind CSS is configured with custom breakpoints (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- Image optimization is enabled for production builds
- Vue DevTools integration is included for development
- Always run linting after making code changes
- Follow existing code conventions and patterns

## Scaffolding Details

This project was scaffolded based on the Roameo website structure with:
- Complete folder structure matching Roameo layout
- Similar package dependencies including Tailwind CSS
- Router configuration with MainView and ErrorView
- MainPage component with travel/tourism theme
- Tailwind configuration with responsive breakpoints
- Vite configuration with image optimization plugins