import { Button } from '@/components/ui/button'
import { BackButton } from '@/components/back-button'
import { usePet } from '@/hooks/usePet'
import { Heart, PawPrint, Ruler } from 'lucide-react'

import energy from '@/assets/svg/energy.svg'
import noEnergy from '@/assets/svg/no-energy.svg'

import { PetSkeleton } from './pet-skeleton'

export function PetDetail() {
  const { data: pet, isLoading: isPetLoading, error } = usePet()

  if (error) return <>Error</>

  return (
    <section className="max-w-screen-xl px-4 py-8 mx-auto">
      <BackButton />

      <div className="flex flex-col py-4 bg-white mt-14 rounded-2xl">
        {isPetLoading ? (
          <PetSkeleton />
        ) : (
          <div className="flex flex-col max-w-lg gap-8 mx-auto -mt-16">
            <div className="p-4 bg-brand-900 rounded-2xl">
              <img
                className="w-full h-auto mx-auto rounded-2xl"
                src={pet?.photo || ''}
                alt={`Foto do ${pet?.name}`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">
                {pet?.name || 'Não informado'}, {pet?.age} anos
              </h2>
              <p className="text-sm text-brand-text">{pet?.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-2 p-4 border-2 rounded-3xl border-slate-300">
                <div className="flex items-center justify-between">
                  <img src={energy} alt="Simbolo de uma energia" />
                  <img src={energy} alt="Simbolo de uma energia" />
                  <img src={energy} alt="Simbolo de uma energia" />
                  <img src={energy} alt="Simbolo de uma energia" />
                  <img src={noEnergy} alt="Simbolo de uma energia" />
                </div>
                <p className="text-sm text-brand-text">{pet?.energy}</p>
              </div>

              <div className="flex flex-col gap-2 p-4 border-2 rounded-3xl border-slate-300">
                <PawPrint />
                <p className="text-sm text-brand-text">{pet?.characteristic}</p>
              </div>

              <div className="flex flex-col gap-2 p-4 border-2 rounded-3xl border-slate-300">
                <Ruler />
                <p className="text-sm text-brand-text">{pet?.size}</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold">
                Requisitos para adoção
              </h2>

              <div className="flex flex-col gap-4">
                {pet?.adoption_requirements.map((requirement) => (
                  <div
                    className="px-4 py-2 border-2 rounded-2xl border-slate-200"
                    key={requirement}
                  >
                    <p>{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button className="gap-4 mx-auto bg-brand-900 hover:bg-brand-500">
              Deseja adotar {pet?.name || 'Não informado'}?
              <Heart size={18} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
