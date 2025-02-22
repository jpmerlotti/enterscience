### EnterScience Interview

---

# 🎵 Artist Booking App - ABA 🎤

A modern web application built with React (Vite) and Laravel for booking artists (bands and singers) for private shows. It uses the Deezer API for dynamic artist search and includes user authentication.

---

## ✨ Features
- 🔍 **Dynamic Artist Search:** Search for artists while typing, powered by Deezer API.
- 🎧 **Artist Selection:** Choose an artist from a responsive grid/list view.
- 📝 **Booking Form:** Submit a booking form with mandatory fields like Name, Selected Artist, Event Date, and Address.
- 📋 **Booking History:** View previously submitted bookings.
- 📱 **Responsive Design:** Seamlessly adapts to all screen sizes.

---

## 🛠️ Installation

### 📋 Prerequisites
- 🟢 **Node.js and npm** – [Download here](https://nodejs.org/)
- 🐘 **PHP** - [Download here](https://php.net/)
- 🪄 **Composer** – [Download here](https://getcomposer.org/)
- 🟦 **SQLite3** - It doesn't needs a installation, only activate it's `pdo` on `php.ini`.

### 🚀 Setup Step-by-Step

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jpmerlotti/enterscience
   ```
2. **Navigate to the project directory:**
   ```bash
   cd ./enterscience
   ```

3. **Install front-end dependencies:**
   ```bash
   cd front-end
   npm install  # Installs all required packages
   ```

4. **Install back-end dependencies:**
   ```bash
   cd ../back-end
   composer install  # Installs Laravel dependencies
   ```

5. **Configure environment variables:**
   - **Front-end:**
     - Duplicate `config.example.json` as `config.json` in front-end folder
     ```bash
        cp config.example.json config.json
     ```
     > On config.json you need to configure your Spotfy API Client Credentials < ID, SECRET >.
     
   - **Back-end:**
      - Duplicate `.env.example` as `.env` in back-end folder.
       ```bash
         cp .env.example .env
       ```
   > The .env don't requires any other configuration. 
   
6. **Run the development servers:**
   - **Frontend:**
     ```bash
     cd frontend
     npm run dev  # Starts the React dev server at http://localhost:5173
     ```
   - **Backend:**
     ```bash
     cd backend
     
     # Run the migrations to create all database tables.
     # if any dialog appears, choose the Yes/Agree option.
     php artisan migrate 
     # Add the --seed flag to populate them with fake data
     
     # Starts the Laravel server at http://localhost:8000
     php artisan serve  
     ```

---

## 🚦 Usage Guide

1. **🎼 Search Artists:** Use the search bar to dynamically find artists.
2. **📨 Book an Artist:** Select an artist and fill in the booking form.
3. **📁 View Bookings:** Access previous bookings from the dashboard.

---

## 🛡️ Tech Stack
- 🎨 **Frontend:** NextJs, Tailwind CSS
- 🛠️ **Backend:** Laravel
- 🎲 **Database:** Sqlite3
- 🌐 **API Integration:** Spotfy API - Search for Artist

---

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License
This project is licensed under the MIT License.

---

## 📬 Contact
For questions or support, contact:
   - **Email**: [joaopedromerlotti@gmail.com](mailto:joaopedromerlotti@gmail.com)
   - **GitHub**: [jpmerlotti](https://github.com/jpmerlotti)
   - **Linkedin**: [João Pedro Merlotti](https://www.linkedin.com/in/jpmerlotti/)

