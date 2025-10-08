# Guía de Despliegue - Plataforma UX + IA

Esta guía proporciona instrucciones paso a paso para desplegar la aplicación en producción.

## Estado del Proyecto

- Build: Exitoso
- TypeScript: Sin errores
- Base de datos: Configurada y con datos
- Variables de entorno: Configuradas localmente

## Requisitos Previos

1. Cuenta en Vercel o Netlify
2. Repositorio Git (GitHub, GitLab o Bitbucket)
3. Proyecto de Supabase configurado

## Variables de Entorno Requeridas

Las siguientes variables de entorno deben configurarse en la plataforma de despliegue:

```
NEXT_PUBLIC_SUPABASE_URL=https://ljmflrhendzylrwrdjjk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqbWZscmhlbmR6eWxyd3JkamprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MDA2ODksImV4cCI6MjA3NTQ3NjY4OX0.XesPS0ZW5muq9SWu-gDjTvdoZY6-UmoMgj8qi4X6hDk
```

## Despliegue en Vercel (Recomendado)

### Opción 1: Integración Automática de Supabase

1. Conecta tu repositorio a Vercel
2. En el dashboard de Vercel, ve a tu proyecto
3. Navega a **Settings** > **Integrations**
4. Busca e instala **Supabase Integration**
5. La integración configurará automáticamente las variables de entorno
6. Despliega el proyecto

### Opción 2: Configuración Manual

1. Conecta tu repositorio a Vercel
2. En la configuración del proyecto:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Añade las variables de entorno en **Settings** > **Environment Variables**
4. Despliega el proyecto

## Despliegue en Netlify

1. Conecta tu repositorio a Netlify
2. Configuración del build:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. En **Site settings** > **Environment variables**, añade:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Despliega el proyecto

## Base de Datos Supabase

### Estado Actual

Las migraciones ya están aplicadas y las tablas contienen datos:
- `timeline_steps`: 4 registros
- `iterations_tokens`: 3 registros
- `metrics`: 1 registro

### Políticas de Seguridad (RLS)

Todas las tablas tienen Row Level Security (RLS) habilitado con políticas de lectura pública:
- Usuarios anónimos: Acceso de lectura
- Usuarios autenticados: Acceso de lectura

### Verificar Base de Datos

Para verificar que la base de datos está correctamente configurada, ejecuta estas consultas en el SQL Editor de Supabase:

```sql
-- Verificar tablas
SELECT COUNT(*) FROM timeline_steps;
SELECT COUNT(*) FROM iterations_tokens;
SELECT COUNT(*) FROM metrics;

-- Verificar RLS
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public';
```

## Verificaciones Post-Despliegue

Después del despliegue, verifica lo siguiente:

1. **Página Principal (/)**: Debe mostrar las tarjetas de navegación y métricas
2. **Página de Proceso (/proceso)**: Debe cargar el timeline, gráfico de tokens y métricas
3. **Sistema de Diseño (/sistema-de-diseno)**: Debe mostrar página "Próximamente"
4. **Testing (/testing)**: Debe mostrar página "Próximamente"
5. **Conexión a Supabase**: Verificar que los datos se cargan correctamente
6. **Animaciones**: Confirmar que las animaciones de Framer Motion funcionan

## Comandos de Build

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Verificar tipos
npm run typecheck

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## Solución de Problemas Comunes

### Error: No se muestran datos de Supabase

- Verificar que las variables de entorno estén configuradas correctamente
- Confirmar que las políticas de RLS permiten acceso público de lectura
- Revisar los logs de la consola del navegador

### Error: Build fallido

- Ejecutar `npm run build` localmente para identificar errores
- Verificar que todas las dependencias estén instaladas
- Confirmar versión de Node.js (recomendado: 18.x o superior)

### Error: Página en blanco

- Verificar que el directorio de output esté configurado correctamente
- Revisar los logs de la plataforma de despliegue
- Confirmar que las rutas estén correctamente definidas

## Optimizaciones Recomendadas

1. **Performance**:
   - Ejecutar Lighthouse en modo incógnito
   - Verificar Core Web Vitals
   - Optimizar imágenes si es necesario

2. **SEO**:
   - Añadir robots.txt
   - Configurar sitemap.xml
   - Verificar meta tags

3. **Monitoreo**:
   - Configurar herramienta de monitoreo de errores (ej: Sentry)
   - Implementar analytics (ej: Google Analytics, Vercel Analytics)
   - Configurar alertas para errores críticos

4. **Seguridad**:
   - NUNCA exponer la service role key de Supabase
   - Mantener las variables de entorno seguras
   - Revisar políticas de RLS periódicamente

## Soporte

Para problemas específicos de la plataforma:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Supabase: https://supabase.com/docs

## Checklist de Despliegue

- [ ] Repositorio Git configurado
- [ ] Variables de entorno configuradas en la plataforma
- [ ] Base de datos Supabase con migraciones aplicadas
- [ ] Build local exitoso
- [ ] TypeScript sin errores
- [ ] Proyecto conectado a plataforma de despliegue
- [ ] Primer despliegue realizado
- [ ] Verificación de todas las rutas
- [ ] Conexión a Supabase funcionando
- [ ] Métricas y datos cargando correctamente
