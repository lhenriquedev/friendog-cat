import { ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate()

  return (
    <Button
      className="hover:bg-brand-400/20"
      variant="ghost"
      size="icon"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft />
    </Button>
  )
}
