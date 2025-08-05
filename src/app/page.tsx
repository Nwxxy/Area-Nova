import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ModuleCard } from '@/components/ModuleCard';
import { modules, bonusContent } from '@/lib/data';
import { Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6 lg:p-10 text-center border-b border-accent/30">
        <div className="inline-flex items-center gap-3 mb-2">
            <Leaf className="w-10 h-10 text-secondary" />
            <h1 className="text-4xl lg:text-5xl font-bold font-headline text-foreground">Saboaria da Vó Rita</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Sua jornada no mundo da saboaria artesanal começa aqui.
        </p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 lg:py-12 fade-in">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-headline">Módulos Essenciais</h2>
          <Carousel
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {modules.map((mod) => (
                <CarouselItem key={mod.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <ModuleCard item={mod} type="module" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 font-headline">Conteúdos Bônus</h2>
           <Carousel
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {bonusContent.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <ModuleCard item={item} type="bonus" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </section>
      </main>
      
      <footer className="text-center p-6 text-muted-foreground border-t border-accent/30 mt-12">
        <p>&copy; {new Date().getFullYear()} Saboaria da Vó Rita. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
