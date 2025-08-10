
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ModuleCard } from '@/components/ModuleCard';
import { modules, bonusContent } from '@/lib/data';
import { Leaf, Mail, Phone, PlayCircle, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
        <p className="text-green-600 mt-2 font-semibold">
          Role a página para acessar suas aulas e materiais bônus.
        </p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 lg:py-12 fade-in">
        
        <section className="mb-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 lg:p-10 border border-primary/20 shadow-xl">
          <div className="flex flex-col gap-8 items-center">
             <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold font-headline text-foreground mb-3">Você Já Sabe Fazer Sabão... Agora Tá na Hora de <span className="text-primary font-black">VENDER Como Gente Grande!</span></h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">Descubra o método que tá fazendo artesãs <span className="font-bold text-green-500">dobrarem as vendas</span> sem sair de casa!</p>
            </div>
            <div className="w-full max-w-4xl aspect-video bg-foreground/10 rounded-xl flex items-center justify-center relative group overflow-hidden shadow-lg">
                <video
                  src="https://www.dropbox.com/scl/fi/u0zfvs9cmqrg57dqnqqlt/Saboaria-Up-Feito-com-o-Clipchamp.mp4?rlkey=yvq5ib2xc8xa72se5mwujej5x&st=2wg58m3n&raw=1"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ring-4 ring-green-500/30 hover:ring-green-500/50 animate-pulse-strong px-10 py-8 text-xl">
                <Link href="#">
                  <Rocket className="mr-3 h-6 w-6"/>
                  QUERO ENTRAR AGORA ANTES QUE SAIA DO AR!
                </Link>
              </Button>
            </div>
          </div>
        </section>

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
            <CarouselPrevious className="block md:hidden" />
            <CarouselNext className="block md:hidden" />
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
            <CarouselPrevious className="block md:hidden"/>
            <CarouselNext className="block md:hidden"/>
          </Carousel>
        </section>
      </main>
      
       <footer className="bg-background border-t border-accent/30 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              
              <div className="flex flex-col items-center md:items-start">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Leaf className="w-6 h-6 text-secondary" />
                    <h2 className="text-2xl font-bold font-headline text-foreground">Saboaria da Vó Rita</h2>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-xs">Feito com amor e ingredientes naturais, para cuidar de você e do planeta.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">Contato</h3>
                <ul className="space-y-2 text-muted-foreground">
                   <li>
                     <a href="mailto:saboariadavorita@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                        <Mail className="h-4 w-4" />
                        <span>saboariadavorita@gmail.com</span>
                      </a>
                   </li>
                   <li>
                     <a href="tel:+5561981913790" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        <span>+55 61 98191-3790</span>
                      </a>
                   </li>
                </ul>
              </div>

               <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">Legal</h3>
                <ul className="space-y-2 text-muted-foreground">
                   <li>
                      <Link href="/termos" className="text-sm hover:text-primary underline-offset-4 hover:underline">
                        Termos de Uso e Política de Privacidade
                      </Link>
                   </li>
                </ul>
              </div>

            </div>
            <div className="mt-8 pt-6 border-t border-accent/30 text-center text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} Saboaria da Vó Rita. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
    </div>
  );
}
