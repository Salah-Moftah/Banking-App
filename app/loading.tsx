import { Loader2 } from "lucide-react"

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 size={40} className="animate-spin text-bankGradient" />
    </div>
  )
}

export default loading