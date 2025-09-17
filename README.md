# SHEBN - Coming Soon Page

Una página de "Coming Soon" moderna y responsive para SHEBN, construida con Next.js, Tailwind CSS y Supabase.

## 🚀 Características

- ✨ Diseño responsive con Tailwind CSS
- 🎨 Gradiente de fondo vibrante (negro → magenta → rosa)
- 📧 Formulario de suscripción con validación
- 🗄️ Almacenamiento de emails en Supabase
- 📱 Completamente responsive
- 🎯 Iconos de redes sociales personalizados
- 🔗 Enlaces a redes sociales configurados

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Supabase** - Base de datos y autenticación
- **Lucide React** - Iconos

## 📦 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/SHEBN-DEV/homecoming.git
cd homecoming
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
Crea un archivo `.env.local` en la raíz del proyecto:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. **Configurar Supabase:**
Ejecuta el siguiente SQL en tu proyecto de Supabase:
```sql
CREATE TABLE email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on email_subscriptions" 
ON email_subscriptions 
FOR INSERT 
TO anon 
WITH CHECK (true);
```

5. **Ejecutar el proyecto:**
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del proyecto

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ComingSoon.tsx
├── lib/
│   └── supabase.ts
├── public/
│   ├── Log.png (logo principal)
│   ├── logX.png (icono de X/Twitter)
│   └── logIn.png (icono de Instagram)
└── ...
```

## 🎨 Personalización

### Colores
Los colores están definidos en `tailwind.config.js`:
- `hot-pink`: #FF0080
- `dark-magenta`: #8B008B  
- `light-pink`: #FF69B4

### Textos
Puedes modificar los textos en `components/ComingSoon.tsx`:
- Título principal
- Texto descriptivo
- Placeholder del email
- Mensajes de éxito/error

### Redes sociales
Los enlaces están configurados en `components/ComingSoon.tsx`:
- **Instagram:** [@shebn.io](https://www.instagram.com/shebn.io)
- **X (Twitter):** [@shebn_](https://x.com/shebn_)

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en Vercel
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno
3. Despliega

## 📝 Scripts disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en modo producción
- `npm run lint` - Ejecutar linter

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **SHEBN-DEV** - Desarrollo y diseño

## 📞 Contacto

- **Instagram:** [@shebn.io](https://www.instagram.com/shebn.io)
- **X (Twitter):** [@shebn_](https://x.com/shebn_)

---

Hecho con ❤️ por SHEBN-DEV