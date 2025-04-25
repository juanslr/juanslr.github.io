# juanslr.github.io
## About Me

Este documento recopila los pasos y tecnologías empleadas en el desarrollo de la web RandomCord, incluyendo tanto el frontend como el backend, así como sus integraciones adicionales como una API pública y un bot de Discord.

## My Skills

<img src="https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white"> 
<img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white"> 
<img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff"> 
<img src="https://img.shields.io/badge/FastAPI-009485.svg?logo=fastapi&logoColor=white"> 
<img src="https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white"> 
<img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff"> 

## GitHub Stats

<table><tbody><tr border="none"><td width="50%" align="center">
<img align="center" src="https://readme-stats-fork-mauve.vercel.app/api/?username=juanslr&theme=dark&show_icons=true&count_private=true">

<img alt="Mark streak" src="https://github-readme-streak-stats-five-roan.vercel.app?user=juanslr&theme=dark"></td><td width="50%" align="center">
<img align="center" src="https://readme-stats-fork-mauve.vercel.app/api/top-langs/?username=juanslr&theme=dark&hide_border=false&no-bg=true&no-frame=true&langs_count=6"></td></tr></tbody></table>


# 📘 Datos tecnicos

## 🛠 Requisitos Previos

- Node.js
- Python 3.10+
- PostgreSQL
- Git
- GitHub
- Poetry (opcional)

---

## ⚙️ Configuración del Entorno

```bash
git clone https://github.com/tu-usuario/randomcord.git
cd randomcord
```

### Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn sqlalchemy psycopg2
```

### Bot de Discord

```bash
cd ../bot
python -m venv venv
source venv/bin/activate
pip install discord.py
```

---

## 🌐 Frontend - React

```bash
cd ../frontend
npx create-react-app .
```

### Estructura:

```
src/
├── components/  # Componentes reutilizables
├── pages/       # Vistas principales
└── App.jsx      # Componente raíz
```

### Ejecutar el frontend

```bash
npm start
```

---

## ⚙️ Backend - FastAPI y PostgreSQL

1. Crear la base de datos:

```sql
CREATE DATABASE randomcord_db;
```

2. Configuración (`database.py`):

```python
SQLALCHEMY_DATABASE_URL = "postgresql://usuario:contraseña@localhost/randomcord_db"
```

3. Modelo (`models.py`):

```python
class Usuario(Base):
    __tablename__ = "usuarios"
    id = Column(Integer, primary_key=True)
    nombre = Column(String)
    puntos = Column(Integer)
```

4. Rutas (`routers/usuarios.py`):

```python
@router.get("/usuarios")
def get_usuarios():
    return [{"nombre": "Ejemplo"}]
```

5. Ejecutar backend:

```bash
uvicorn main:app --reload
```

---

## 🤖 Bot de Discord

1. Crear app en [Discord Developers](https://discord.com/developers/applications)
2. Token en `.env` o en el script

```python
@bot.event
async def on_ready():
    print(f'Conectado como {bot.user}')

@bot.command()
async def ping(ctx):
    await ctx.send('Pong!')
```

---

## 🚀 Despliegue

| Parte        | Plataforma Sugerida          |
|--------------|-------------------------------|
| Frontend     | GitHub Pages / Netlify         |
| Backend      | Render / Railway               |
| Base de Datos| PostgreSQL (Railway, ElephantSQL) |
| Bot          | Railway / VPS                  |


## Connect with me

<p align="center">🔗 LinkedIn: <a href="htttps://linkedin.com/juansergiolora" target="_blank">juansergiolora</a></p>

<center><P>UNETE A NUESTRO DISCORD</P></center>
<a href="">
<img src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="Discord Logo" style="width: 100px; max-width: 100px;" />
</a>

