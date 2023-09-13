import { Skeleton } from '@/components/ui/skeleton'

export function PetSkeleton() {
  return (
    <div>
      <div className="flex flex-col max-w-lg gap-8 mx-auto -mt-16">
        <Skeleton className="w-full h-[300px]" />

        <div className="flex flex-col gap-2">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="w-full h-20" />
          <Skeleton className="w-full h-20" />
          <Skeleton className="w-full h-20" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
        </div>
      </div>
    </div>
  )
}
