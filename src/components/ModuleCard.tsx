import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { ContentItem } from '@/lib/types';
import { Button } from './ui/button';

interface ModuleCardProps {
  item: ContentItem;
  type: 'module' | 'bonus';
}

export function ModuleCard({ item, type }: ModuleCardProps) {
  const cardHint = type === 'module' ? 'handmade soap' : 'packaging design';

  return (
      <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-accent/40 rounded-xl overflow-hidden group">
        <CardHeader className="p-0">
          <Link href={`/modules/${item.slug}`} className="block aspect-video relative overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={cardHint}
            />
          </Link>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow p-5">
          <CardTitle className="text-lg font-bold mb-2 line-clamp-2">
            <Link href={`/modules/${item.slug}`} className="hover:text-primary transition-colors">
              {item.title}
            </Link>
          </CardTitle>
          <CardDescription className="flex-grow line-clamp-3">{item.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 p-5 pt-0">
          <div className="w-full">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>Progresso</span>
              <span>{item.progress}%</span>
            </div>
            <Progress value={item.progress} className="h-2" />
          </div>
          <Button asChild variant="default" className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={`/modules/${item.slug}`}>
              Acessar {type === 'module' ? 'Módulo' : 'Bônus'}
            </Link>
          </Button>
        </CardFooter>
      </Card>
  );
}
