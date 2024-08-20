import { fontTitle } from "@/data/fonts"

export default function NotFound() {
  return (
    <div className={`flex flex-col items-center justify-center h-screen space-y-4 ${fontTitle.className}`}>
      <h1 className="text-4xl font-bold text-center">404</h1>
      <p className="text-xl text-center">Página no encontrada</p>
    </div>
  )
}