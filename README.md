# Clueless Compasses API  

API for **Group Project 25-1 - Clueless Compasses**  

🔗 **Main Repository:** [GitHub - Clueless Compasses API](https://github.com/BIT-Studio-3/group-project-25-1-clueless-compasses)  

## 🐳 Docker Dev Setup
```bash
docker run --name clueless-compasses-dev -e POSTGRES_PASSWORD=HelloWorld123 -p 5434:5432 -d postgres 
```

## 🌱 .env Configuration

```bash
APP_ENV=development
DATABASE_URL="postgresql://postgres:HelloWorld123@localhost:5434/postgres"
JWT_SECRET=HelloWorld123
JWT_LIFETIME=1hr
```
