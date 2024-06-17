"use client"

import { LoginForm } from "@/components/LoginForm"

export default function HomePage() {
  return (
    <main className="text-center">
      <div>
        <h1 className="my-6 text-2xl">Home Page 17/06/2024</h1>
      </div>
      <div className="flex justify-center w-full min-h-screen bg-muted/40">
        <div>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}