# **Permalist — A Simple To-Do List App**

Permalist is a lightweight to-do list application built using **Node.js**, **Express**, **EJS**, and **PostgreSQL**. It allows users to **add**, **edit**, and **delete** tasks with a clean UI and simple project structure.
This project is great for beginners transitioning toward MERN-style full-stack development.

---

## **🚀 Tech Stack**

**Frontend**

* EJS Template Engine
* HTML5
* CSS3

**Backend**

* Node.js
* Express.js

**Database**

* PostgreSQL (SQL queries stored in `queries.sql`)

**Others**

* SVG icons (check & edit)
* Express Router + Middleware

---

## **📁 Directory Structure**

```
Permalist/
│
├── index.js                   # Main Express server
├── queries.sql                # SQL queries for PostgreSQL
│
├── views/
│   ├── index.ejs              # Main UI view
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── public/
│   ├── styles/
│   │   └── main.css           # App styling
│   └── assets/
│       └── icons/
│           ├── check-solid.svg
│           └── pencil-solid.svg
│
└── README.md
```

---

## **⚙️ Setup & Run Locally**

### **1. Clone Repository**

```bash
git clone https://github.com/your-username/permalist.git
cd permalist
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Database**

1. Create a PostgreSQL database
2. Run the queries in **queries.sql**
3. Add your DB credentials in `.env`:

```
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=permalist
```

### **4. Start the Server**

```bash
npm start
```
OR
```bash
node index.js
```

Visit:

```
http://localhost:3000
```

---

## **📜 License**

This project is licensed under the **MIT License** by **ShayaanRK**, the repositoy owner.
You are free to use, modify, and distribute it with attribution.

---
