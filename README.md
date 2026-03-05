# TuitionHub – Next.js

A full tuition management system (teacher & student portals) built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Converted from the original single-file HTML app into an industry-ready structure.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Nunito & Poppins** (Google Fonts)

## Project Structure

```
src/
├── app/                    # App Router pages & layouts
│   ├── layout.tsx          # Root layout (fonts, AuthProvider)
│   ├── page.tsx            # Redirects to /login
│   ├── globals.css         # Global styles & CSS variables
│   ├── login/
│   │   └── page.tsx        # Login (Teacher / Student)
│   └── dashboard/
│       ├── layout.tsx      # Sidebar + Topbar, auth guard
│       ├── page.tsx        # Role-based dashboard
│       ├── students/       # Teacher: student list
│       ├── payments/        # Teacher: records | Student: pay flow
│       ├── schedule/       # Class schedule
│       ├── homework/       # Homework / worksheets
│       ├── exams/          # MCQ exams
│       ├── results/        # Exam results
│       └── notifications/  # Notifications
├── components/
│   ├── ui/                 # Button, Card, Badge, Modal
│   ├── layout/             # Sidebar, Topbar
│   └── features/           # Login, Payment flow
├── context/
│   └── auth-context.tsx    # Auth state (role, login, logout)
├── lib/
│   └── constants.ts        # Mock data, nav titles
└── types/
    └── index.ts            # Shared TypeScript types
```

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). You’ll be redirected to `/login`.

3. **Login**

   - Choose **Teacher** or **Student** and click **Sign In**.
   - Teacher: dashboard, students, payments, schedule, homework, exams, results, notifications.
   - Student: dashboard, schedule, homework, exams, results, and **My Payments** (with Pay Now flow).

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – run ESLint

## Features

- **Role-based UI**: Teacher vs Student sidebar and dashboard content.
- **Auth context**: Client-side login/logout and role; no backend.
- **Responsive layout**: Sidebar collapses to hamburger on smaller screens.
- **Payment flow (student)**: Choose method → Enter details → Review → Confirm & success.
- **Design**: Matches original HTML (Nunito, colors, cards, badges, tables).

The original single-file app is preserved as `TuitionHub_FullApp.html` in the project root.
