# 🔗 React URL Shortener

This is a simple URL shortener frontend built with **React** and **Vite**.
It allows users to submit a long URL and receive a shortened version in return.

## 🚀 Features

- Submit a long URL and get a short version
- Copy shortened URL to clipboard
- Open shortened URL in a new tab
- View 100 top most-clicked URLs (if supported by backend)
- Clean user interface with toast notifications

## 🛠️ Technologies

- React 19
- Vite
- React Router DOM
- React Toastify
- React Icons
- Bootstrap 5

## 📦 Setup

1. Clone the repo:
  ```bash
  git clone git@github.com:SegundoRP/url-shortener-frontend.git
  cd url-shortener-frontend
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Create a .env file:
  ```bash
  VITE_API_BASE_URL=http://localhost:3000 (or the port you use for backend)
  ```

4. Start the dev server:
  ```bash
  npm run dev
  ```

## 🌐 API

The frontend expects a backend running at VITE_API_BASE_URL with endpoints like:

  - POST /short_urls to create a shortened URL

  - GET /top_urls to list most popular URLs (optional)
