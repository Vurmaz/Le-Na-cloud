import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[--primary] mb-4"></div>
      <p className="text-lg text-gray-600">Yükleniyor, lütfen bekleyin...</p>
    </div>
  )
}
