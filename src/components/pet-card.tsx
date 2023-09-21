import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import { Pet } from '@/@types/Pet'

export function PetCard({ name, image, breed, description }: Pet) {
  return (
    <Card className="relative overflow-hidden h-[300px] rounded-lg">
      <div className="absolute top-0 left-0 z-10 w-full h-full transition-opacity opacity-0 hover:opacity-100 bg-brand-500/90">
        <div className="flex items-center justify-center h-full">
          <Button className="bg-white text-brand-900 hover:bg-slate-200">
            Ver mais informações!
          </Button>
        </div>
      </div>
      <CardHeader className="p-0">
        <img
          className="object-cover h-40"
          src={image}
          alt={`Foto do ${name}`}
        />
      </CardHeader>
      <CardContent className="flex items-center justify-between pt-2">
        <CardTitle className="text-xl text-brand-900">{name}</CardTitle>
        <CardDescription>{breed}</CardDescription>
      </CardContent>
      <CardFooter>{description.substring(0, 80)}...</CardFooter>
    </Card>
  )
}
