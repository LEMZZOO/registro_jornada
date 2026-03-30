# Registro de Jornada (PWA)

Aplicación web progresiva (PWA) para el registro mensual de jornada laboral.  
Permite llevar un control completo de horas trabajadas, generar informes en PDF y guardar los datos localmente.

Demo:  
https://registrarjornadabylamine.netlify.app/

---

## Características

- Gestión por meses y años
- Registro de horarios (mañana y tarde)
- Rellenado automático del mes
- Cálculo automático de horas trabajadas
- Generación de PDF con resumen mensual
- Firma digital integrada (canvas)
- Modo oscuro / claro
- Instalable como app (PWA)
- Guardado local (sin backend)

---

## Tecnologías usadas

- HTML5 + CSS3 + JavaScript (Vanilla)
- PWA (Service Worker + Manifest)
- jsPDF para generación de documentos
- LocalStorage para persistencia de datos

---

## Estructura del proyecto

/
├── index.html        # Aplicación principal  
├── manifest.json     # Configuración PWA  
├── sw.js             # Service Worker (cache offline)  
├── icon-192.png  
├── icon-512.png  
├── apple-touch-icon.png  
└── _headers          # Configuración (Netlify)  

---

## Instalación local

1. Clona el repositorio:

git clone https://github.com/tuusuario/registro-jornada.git  
cd registro-jornada  

2. Abre el proyecto:

open index.html  

O usa un servidor local:

npx serve .  

---

## PWA (Instalable)

La app puede instalarse en móvil o escritorio gracias a:

- manifest.json  
- sw.js  

Funcionalidades:

- Uso offline  
- Instalación como app nativa  
- Caché automática de recursos  

---

## Cómo funciona

- Los datos se guardan en el navegador (LocalStorage)
- El usuario introduce horarios por día
- Se calcula automáticamente el total mensual
- Se genera un PDF con firma incluida

---

## Generación de PDF

Se utiliza:

- jsPDF (CDN incluido en el HTML)

El PDF incluye:

- Datos del trabajador  
- Horas registradas  
- Total mensual  
- Firma digital  

---

## Casos de uso

- Autónomos  
- Control horario personal  
- Empresas pequeñas  
- Registro obligatorio de jornada (España)  

---

## Mejoras futuras

- Sincronización en la nube  
- Multiusuario  
- Estadísticas avanzadas  
- Recordatorios  
- Exportación a Excel  

---

## Autor

Lamine Sane  
Desarrollador Full Stack (Backend-focused)