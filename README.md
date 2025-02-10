# **🎨 Art Gallery**
### **A full-stack web application for buying and selling artwork**

## **📌 Overview**
The **Art Gallery** is a **React and Tailwind CSS** powered web application that allows **artists** to showcase and sell their artwork, while **buyers** can browse, add items to their cart, and complete purchases. The application features **JWT-based authentication**, a **user dashboard**, and a **shopping cart system** for easy transactions.

## **🚀 Features**
✅ **User Authentication (JWT)** – Secure login and signup system.  
✅ **Role-Based Access** – Different features for **artists**, **buyers**, and **admins**.  
✅ **Create & Manage Artworks** – Artists can upload and list their artwork for sale.  
✅ **Shopping Cart System** – Buyers can add items to their cart and proceed to checkout.  
✅ **Dynamic Dashboard** – Displays user information and purchased artwork.  
✅ **RESTful API Integration** – Connects with a **Ruby on Rails backend**.  
✅ **Responsive UI with Tailwind CSS** – Mobile-friendly and optimized for all screen sizes.  

## **🛠️ Tech Stack**
### **Frontend (React & Tailwind CSS)**
- **React.js** – Handles UI components and routing.
- **React Router** – Enables seamless page navigation.
- **Context API** – Manages global user authentication and cart state.
- **Heroicons** – Provides clean icons for UI elements.
- **Tailwind CSS** – Ensures a modern, responsive design.

### **Backend (Ruby on Rails & PostgreSQL)**
- **Ruby on Rails API** – Manages user authentication, artwork listings, and transactions.
- **PostgreSQL** – Database to store user and artwork details.
- **JWT Authentication** – Secures user sessions and data access.

---

## **📂 Project Structure**
```
📦 Art-Gallery
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Artwork.js           # Displays user-specific artworks
 ┃ ┃ ┣ 📜 BuyerDashboard.js    # Shopping and cart system
 ┃ ┃ ┣ 📜 Checkout.js          # Handles artwork purchases
 ┃ ┃ ┣ 📜 LoginPage.js         # User authentication page
 ┃ ┃ ┣ 📜 NewArtwork.js        # Form for adding new artworks
 ┃ ┃ ┗ 📜 SignUp.js            # User registration form
 ┃ ┣ 📂 context
 ┃ ┃ ┣ 📜 UserContext.js       # Handles authentication state
 ┃ ┃ ┗ 📜 CartContext.js       # Manages shopping cart state
 ┃ ┣ 📜 App.js                 # Main component for routing
 ┃ ┣ 📜 index.js               # Application entry point
 ┃ ┗ 📜 index.css              # Global styles
 ┣ 📜 package.json             # Project dependencies
 ┣ 📜 README.md                # Documentation
 ┗ 📜 .gitignore               # Git ignored files
```

---

## **📌 Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/MDelarosa1993/Art_Gallery_FE.git
cd art_gallery_fe
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Start the Development Server**
```bash
npm start
```
_This will start the React frontend on **http://localhost:3001**._

### **4️⃣ Backend Setup (Rails API)**
```bash
- Clone and set up the backend **Ruby on Rails API** from your backend repo.
- git clone https://github.com/MDelarosa1993/Art_Gallery.git
cd Art_gallery
- Run **`rails s`** to start the server at **http://localhost:3000**.
```
---

## **📌 Usage Guide**
### **🎨 Artist Features**
- Sign up or log in.
- Upload new artwork (title, description, price).
- View and manage personal artwork listings.

### **🛍️ Buyer Features**
- Browse available artworks.
- Add items to cart and manage quantity.
- Complete purchases via checkout.

### **🔑 Authentication**
- Users sign up with **name, email, password, and role (Artist/Buyer)**.
- Login grants access to role-specific features.
- JWT ensures **secure API requests**.

---

## **📌 API Endpoints**
| **Method** | **Endpoint** | **Description** |
|------------|-------------|----------------|
| `POST` | `/api/v1/auth` | User Login |
| `POST` | `/api/v1/users` | User Signup |
| `GET` | `/api/v1/users/:id/artworks` | Fetch artworks by user |
| `POST` | `/api/v1/users/:id/artworks` | Create new artwork |
| `GET` | `/api/v1/artworks/browse` | Fetch all available artworks |

---

## **📌 Future Enhancements**
🔹 **Stripe Payment Integration** – Secure online payments.  
🔹 **Artist Profile Pages** – Showcase all artworks from a single artist.  
🔹 **Admin Dashboard** – Manage users and artwork approvals.  
🔹 **Image Uploads** – Allow artists to upload artwork images.  

---

## **📌 License**
This project is **MIT licensed**.