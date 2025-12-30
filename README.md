# 👥 Persons CRUD Application

A full-stack web application for managing person records with Create, Read, Update, and Delete (CRUD) operations. Built with React frontend and Java backend using JAX-RS, Hibernate, and MySQL.

## ✨ Features

- 📝 Create new person records with name, email, and age
- 👀 View all persons in an animated list
- ✏️ Edit existing person information
- 🗑️ Delete person records with confirmation
- 🔍 Search by name or ID
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Fully responsive design

## 🛠️ Technologies Used

### Backend
- **Java 21** - Programming language
- **Apache Tomcat 10.1.50** - Web server
- **JAX-RS (Jersey)** - RESTful web services
- **Hibernate 6.4.4** - ORM framework
- **MySQL 8.0** - Database
- **Jakarta Persistence API 3.1** - JPA specification

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **CSS3** - Styling with animations

## 📋 Prerequisites

Before running this project, make sure you have:

- Java Development Kit (JDK) 21
- Apache Tomcat 10.1.50
- MySQL 8.0 or higher
- Node.js 16+ and npm
- IntelliJ IDEA (recommended) or any Java IDE
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/fedighr/SOA.git
cd SOA
```

### 2. Database Setup

#### Start MySQL Service
```bash
net start MySQL80
```

#### Create Database
```bash
mysql -u root -p
```

```sql
CREATE DATABASE soa;
exit;
```

### 3. Backend Configuration

#### Update `persistence.xml`

Edit `src/main/resources/META-INF/persistence.xml`:

```xml
<property name="jakarta.persistence.jdbc.url" 
          value="jdbc:mysql://localhost:3306/soa?createDatabaseIfNotExist=true&amp;useSSL=false&amp;serverTimezone=UTC"/>
<property name="jakarta.persistence.jdbc.user" value="root"/>
<property name="jakarta.persistence.jdbc.password" value="YOUR_MYSQL_PASSWORD"/>
```

#### Run Backend

1. Open the project in IntelliJ IDEA
2. Configure Tomcat server
3. Deploy the application
4. Server will run on `http://localhost:9090`

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
SOA/
├── src/main/java/tn/soa/
│   ├── api/
│   │   └── PersonResource.java      # REST endpoints
│   ├── model/
│   │   └── Person.java              # Entity class
│   ├── service/
│   │   └── PersonService.java       # Business logic
│   ├── persistence/
│   │   └── JPA.java                 # EntityManager factory
│   └── filter/
│       └── CorsServletFilter.java   # CORS configuration
├── src/main/resources/
│   └── META-INF/
│       └── persistence.xml          # JPA configuration
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── personApi.js         # API calls
    │   ├── components/
    │   │   ├── PersonForm.jsx       # Form component
    │   │   ├── PersonList.jsx       # List component
    │   │   └── SearchBar.jsx        # Search component
    │   ├── App.jsx                  # Main component
    │   └── App.css                  # Styles
    └── package.json
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/persons` | Get all persons |
| GET | `/api/persons/{id}` | Get person by ID |
| GET | `/api/persons/search?name={name}` | Search by name |
| POST | `/api/persons` | Create new person |
| PUT | `/api/persons/{id}` | Update person |
| DELETE | `/api/persons/{id}` | Delete person |

## 💾 Database Schema

### `persons` Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | BIGINT | PRIMARY KEY, AUTO_INCREMENT |
| name | VARCHAR(255) | NOT NULL |
| email | VARCHAR(255) | NOT NULL |
| age | INT | NOT NULL |

## 🎨 Features Demo

### Create Person
Add new person records with name, email, and age validation.

### Edit Person
Click the edit button (✏️) to modify existing records.

### Delete Person
Click the delete button (🗑️) with confirmation dialog.

### Search
Search by name (partial match) or exact ID lookup.

## 🐛 Troubleshooting

### MySQL Connection Error
```
Access denied for user 'root'@'localhost'
```
**Solution:** Update password in `persistence.xml`

### Port Already in Use
```
Port 9090 already in use
```
**Solution:** Stop other services using port 9090 or change port in Tomcat configuration

### CORS Error
**Solution:** Verify `CorsServletFilter.java` is properly configured

### Database Not Created
**Solution:** Manually create database:
```sql
CREATE DATABASE soa;
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Fedi Ghribi
Abdelhedi Chakroun


## 🙏 Acknowledgments

- Apache Tomcat for the web server
- Hibernate team for the ORM framework
- React team for the frontend library
- MySQL for the database management system

---

⭐ If you found this project helpful, please give it a star!
