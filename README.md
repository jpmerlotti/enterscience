### EnterScience Interview

---

# 🎵 Artist Booking App - ABA 🎤

A modern web application built with React (Vite) and Laravel for booking artists (bands and singers) for private shows. It uses the Deezer API for dynamic artist search and includes user authentication.

---

## ✨ Features
- 🔍 **Dynamic Artist Search:** Search for artists while typing, powered by Deezer API.
- 🎧 **Artist Selection:** Choose an artist from a responsive grid/list view.
- 📝 **Booking Form:** Submit a booking form with mandatory fields like Name, Selected Artist, Event Date, and Address.
- 🔒 **User Authentication:** Secure user login and registration.
- 📋 **Booking History:** View previously submitted bookings.
- 📱 **Responsive Design:** Seamlessly adapts to all screen sizes.

---

## 🛠️ Installation

### 📋 Prerequisites
- 🟢 **Node.js and npm** – [Download here](https://nodejs.org/)
- 🐘 **PHP** - [Download here](https://php.net/)
- 🪄 **Composer** – [Download here](https://getcomposer.org/)

### 🚀 Setup Step-by-Step

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/artist-booking-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd artist-booking-app
   ```

3. **Install front-end dependencies:**
   ```bash
   cd frontend
   npm install  # Installs all required packages
   ```

4. **Install back-end dependencies:**
   ```bash
   cd ../backend
   composer install  # Installs Laravel dependencies
   ```

5. **Configure environment variables:**
   - Duplicate `.env.example` as `.env` in both frontend and backend folders.
   - Add your **Deezer API key**, database details, and other necessary config.

6. **Run the development servers:**
   - **Frontend:**
     ```bash
     cd frontend
     npm run dev  # Starts the React dev server at http://localhost:5173
     ```
   - **Backend:**
     ```bash
     cd backend
     php artisan serve  # Starts the Laravel server at http://localhost:8000
     ```

---

## 🚦 Usage Guide

1. **🔑 Login/Register:** Create an account or log in.
2. **🎼 Search Artists:** Use the search bar to dynamically find artists.
3. **📨 Book an Artist:** Select an artist and fill in the booking form.
4. **📁 View Bookings:** Access previous bookings from the dashboard.

---

## 🛡️ Tech Stack
- 🎨 **Frontend:** NextJs, Tailwind CSS
- 🛠️ **Backend:** Laravel
- 🌐 **API Integration:** Deezer API

---

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License
This project is licensed under the MIT License.

---

## 📬 Contact
For questions or support, contact [your email or GitHub profile].

🚀 Happy Booking! 🎉

