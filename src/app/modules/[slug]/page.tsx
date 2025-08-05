import Link from 'next/link';
import { modules, bonusContent } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function ModulePage({ params }: { params: { slug: string } }) {
  const allContent = [...modules, ...bonusContent];
  const item = allContent.find((i) => i.slug === params.slug);

  if (!item) {
    notFound();
  }

  const isCompleted = item.progress === 100;

  return (
    <div className="min-h-screen bg-background text-foreground fade-in">
      <header className="py-3 px-4 md:px-8 flex items-center justify-between border-b border-accent/30 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
         <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
        <h1 className="text-lg font-bold truncate hidden md:block">{item.title}</h1>
        {isCompleted ? (
            <Badge variant="default" className="bg-green-500 text-white">
                <CheckCircle className="mr-2 h-4 w-4" />
                Concluído
            </Badge>
        ) : (
            <Badge variant="secondary">Progresso: {item.progress}%</Badge>
        )}
      </header>
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="aspect-video relative rounded-xl overflow-hidden mb-6 shadow-lg">
                <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                data-ai-hint="natural ingredients herbs"
                />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-2">{item.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{item.description}</p>
            <div className="flex items-center gap-4">
                <Progress value={item.progress} className="h-2 w-full max-w-sm" />
                <span className="text-sm font-medium text-muted-foreground">{item.progress}% completo</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-headline mb-4">Aulas do Módulo</h2>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {item.lessons.map((lesson, index) => (
                <AccordionItem value={`item-${index + 1}`} key={lesson.id}>
                  <AccordionTrigger className="text-lg hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                        <PlayCircle className="h-6 w-6 text-primary flex-shrink-0" />
                        <span>Aula {index + 1}: {lesson.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14 pb-4">
                    <p className="text-muted-foreground">Duração estimada: {lesson.duration}</p>
                    <p className="mt-2">Aqui ficará o conteúdo da aula, como um vídeo incorporado ou um texto explicativo detalhado sobre as técnicas de saboaria.</p>
                    <Button className="mt-4">
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Assistir Aula
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </main>
    </div>
  );
}
