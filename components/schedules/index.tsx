import React from 'react'
import SectionContainer from '../section-container'
import SectionTitle from '../section-title'

export default function Schedules() {
  return (
    <SectionContainer id='schedules' className='text-black'>
        <section >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <SectionTitle >
                  Localização e Horários
                </SectionTitle>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up">
                 Visite a nossa barbearia, aberta todos os dias da semana!
                </p>
              </div>
           
              <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="flex flex-col items-center justify-center space-y-4 p-6 border border-black/10">
                  <h3 className="text-xl font-bold">Localização</h3>
                  <p className="text-muted-foreground">Rua Tabatinguera, 513
                  Sé, Centro, São Paulo - SP</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 p-6 border border-black/10">
                  <h3 className="text-xl font-bold">Hours</h3>
                  <p className="text-muted-foreground">
                    Segunda - Domingo - 9:00 - 19:00
                  </p>
                </div>
              </div>
            </div>
        </section>
    </SectionContainer>
  )
}
