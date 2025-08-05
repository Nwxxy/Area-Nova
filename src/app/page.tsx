import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ModuleCard } from '@/components/ModuleCard';
import { modules, bonusContent } from '@/lib/data';
import { Leaf, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6 lg:p-10 text-center border-b border-accent/30">
        <div className="inline-flex items-center gap-3 mb-2">
            <Leaf className="w-10 h-10 text-secondary" />
            <h1 className="text-4xl lg:text-5xl font-bold font-headline text-foreground">Saboaria da Vó Rita</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Sua jornada no mundo da saboaria artesanal começa aqui.
        </p>
        <p className="text-primary font-semibold text-xl mt-4">
          Parabéns pela sua compra! Prepare-se para lucrar com a saboaria artesanal.
        </p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 lg:py-12 fade-in">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-headline">Video Aula Completa</h2>
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
          <h2 className="text-3xl font-bold mb-6 font-headline">Conteúdos Bônus Lucrativos</h2>
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
      
       <footer className="bg-background border-t border-accent/30 mt-12 py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <h3 className="font-semibold text-foreground text-lg">Contato</h3>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:saboariadavorita@gmail.com">saboariadavorita@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+5561981913790">+55 61 98191-3790</a>
                </div>
              </div>
              <div className="text-center">
                 <p className="text-sm">&copy; {new Date().getFullYear()} Saboaria da Vó Rita. Todos os direitos reservados.</p>
                 <Link href="/termos" className="text-sm hover:text-primary underline-offset-4 hover:underline">
                    Termos de Uso e Política de Privacidade
                  </Link>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
}
