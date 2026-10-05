# HungerPOS

HungerPOS is a full-stack restaurant point-of-sale (POS) management system designed to streamline restaurant operations, including menu management, table bookings, order processing, employee management, and WhatsApp-based customer notifications.

## Features

- **Menu Management** – Add, update, and manage dishes available in the restaurant.
- **Table Management** – Track and manage dining tables, table availability, and reservations.
- **Order Management** – Handle customer orders, order statuses, and order history.
- **Customer Management** – Maintain customer records, contact information, and order history.
- **Employee Management** – Manage staff details, roles, and assignments.
- **WhatsApp Automation (WAM)** – Send automated WhatsApp notifications to customers for events like order confirmation, completion, payment received, and more.
- **Dashboard** – Admin interface to view and control all restaurant operations from a single panel.
- **Message Configuration** – Customize message templates, images, and documents sent to customers via WhatsApp based on event triggers.

## Use Cases

- **Restaurant Owners** – Manage daily restaurant operations, track orders, and automate customer communication.
- **Staff / Managers** – Handle tables, assign employees, and update order statuses.
- **Customers** – Receive instant WhatsApp updates for their orders, improving transparency and experience.
- **Admins** – Configure and monitor the WhatsApp messaging system to align with branding and operational needs.

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Vite
- Tailwind CSS
- Axios
- Chart.js
- React Modal

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv
- Nodemon

### Communication / Integration
- WhatsApp API (via Wasender, can be replaced by official Meta WhatsApp API)

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- WhatsApp Business API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/Yashit22/HungerPOS.git
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Configure environment variables
```bash
cp backend/.env.example backend/.env
```

Update `backend/.env` with your values:
- `PORT` – Server port
- `MONGO_URI` – MongoDB connection string
- `WASENDER_API_KEY` – WhatsApp API key

5. Run the backend server
```bash
cd backend
npm run dev
```

6. Run the frontend development server
```bash
cd frontend
npm run dev
```

## Scripts

### Backend
- `npm start` – Start the server
- `npm run dev` – Start the server with Nodemon

### Frontend
- `npm run dev` – Start Vite development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## Project Structure

```
HungerPOS/
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── ...
└── README.md
```
