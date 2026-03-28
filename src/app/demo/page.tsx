"use client"

import { lazy, Suspense } from "react"

const DemoOne = lazy(() => import("@/components/ui/background-paper-shaders-demo"))

export default function DemoPage() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-black" />}>
      <DemoOne />
    </Suspense>
  )
}
