# Clinic Front Desk Management System

A web-based system for managing doctors, patients, queues, and appointments at a clinic.

## Features
- **Authentication** (JWT-based)
- **Doctors Management** (Add, view)
- **Queue Management** (Track patients waiting)
- **Appointments Calendar** (with drag-and-drop date selection)
- **Secure API** with NestJS + MySQL
- **Responsive Frontend** built with Next.js + TailwindCSS

---

## Tech Stack
**Backend**: NestJS, MySQL, TypeORM, JWT  
**Frontend**: Next.js (App Router), TailwindCSS, Axios, FullCalendar  
**Auth**: JWT (stored in localStorage, auto-injected into requests)

---

## Setup Instructions

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill database and JWT settings
npm run start:dev
