# Next.js Clerk Demo App

This project is a **demo application** built with **Next.js 15+ (App Router) and TypeScript**, showcasing **authentication and user management** using [Clerk](https://clerk.com).  

It is designed as a **practical demonstration** of Clerk’s features in a Next.js project, including role-based access, authentication flows, and protected routes.

---

## 🚀 Features

- 🔑 Authentication with Clerk (Sign up, Login, Logout)  
- 👥 Role-based access (Admin, User, Collaborator)  
- 🛡️ Protected routes with middleware  
- 🌐 Server-Side Rendering (SSR) integration  
- 🎨 Styled with [ShadCN](https://ui.shadcn.com) + Tailwind CSS  
- 📦 Next.js 15 App Router with TypeScript  

---

## 📂 Project Structure

```

nextjs-clerk-demo-app/
│── app/                 # Next.js App Router pages
│── components/          # Reusable UI components
│── lib/                 # Helper functions and Clerk config
│── middleware.ts        # Clerk authentication middleware
│── package.json         # Dependencies & scripts
│── tailwind.config.ts   # Tailwind CSS config
│── README.md            # Project documentation

````

---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/coderooz/NextJS-Clerk-Demo-App.git
cd NextJS-Clerk-Demo-App
````

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Clerk

* Create a [Clerk account](https://clerk.com).
* Get your **Frontend API** and **Secret Key** from Clerk dashboard.
* Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

### 4️⃣ Run the app

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🔒 Authentication & Role-Based Access

* **Public routes:** `/`, `/sign-in`, `/sign-up`
* **Protected routes:** `/dashboard` (requires login)
* **Role-specific access:** Admin-only and User-only pages

---

## 🛠️ Tech Stack

* [Next.js 15+](https://nextjs.org) (App Router)
* [TypeScript](https://www.typescriptlang.org)
* [Clerk](https://clerk.com) (Authentication & User Management)
* [Tailwind CSS](https://tailwindcss.com) + [ShadCN UI](https://ui.shadcn.com)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the **MIT License**.

---
