---
description: Cómo desplegar MasQueSeres en Vercel
---

# Despliegue en Vercel

Vercel es la plataforma ideal para este proyecto ya que son los creadores de **Next.js**. Aquí tienes los pasos para desplegarlo:

## 1. Preparación del Repositorio
Asegúrate de que todos tus cambios estén en GitHub, GitLab o Bitbucket.

## 2. Crear Nuevo Proyecto en Vercel
1. Ve a [Vercel](https://vercel.com) e inicia sesión.
2. Haz clic en **"Add New"** > **"Project"**.
3. Importa tu repositorio de Next.js.

## 3. Configurar Variables de Entorno (CRÍTICO)
Durante el proceso de importación, abre la sección **"Environment Variables"** y añade las siguientes:

- `NEXT_PUBLIC_SUPABASE_URL`: Tu URL de Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Tu clave anónima de Supabase.
- `GEMINI_API_KEY`: Tu clave de Google AI Studio.

## 4. Desplegar
Haz clic en **"Deploy"**. Vercel detectará automáticamente que es un proyecto de Next.js y configurará el build (normalmente `next build`).

## 5. Consideraciones Post-Despliegue
- **Dominios**: Puedes añadir tu propio dominio en la pestaña "Settings" > "Domains".
- **CI/CD**: Cada vez que hagas `git push` a la rama principal, Vercel desplegará una nueva versión automáticamente.
- **Preview Deployments**: Si creas un Pull Request, Vercel generará una URL temporal para que pruebes los cambios antes de fusionarlos.
