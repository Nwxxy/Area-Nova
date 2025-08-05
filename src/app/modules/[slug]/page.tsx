
"use client"

import Link from 'next/link';
import { modules, bonusContent } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle, CheckCircle, Lock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import React, { useState, useMemo, useEffect } from 'react';
import type { Lesson } from '@/lib/types';


export default function ModulePage({ params }: { params: { slug: string } }) {
  const allContent = [...modules, ...bonusContent];
  const item = allContent.find((i) => i.slug === params.slug);
  
  const [lessonsState, setLessonsState] = useState(item?.lessons || []);
  const [selectedVideo, setSelectedVideo] = useState<Lesson | null>(null);

  useEffect(() => {
    if (item && item.lessons.length > 0) {
      const firstLesson = item.lessons[0];
      if (firstLesson) {
          setSelectedVideo(firstLesson);
      }
    }
  }, [item]);


  const progress = useMemo(() => {
    const completedLessons = lessonsState.filter(l => l.completed).length;
    return Math.round((completedLessons / lessonsState.length) * 100);
  }, [lessonsState]);

  if (!item) {
    notFound();
  }
  
  const isCompleted = progress === 100;

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedVideo(lesson);
  };
  
  const handleMarkAsCompleted = (lessonId: number) => {
    const newLessonsState = lessonsState.map(l => 
        l.id === lessonId ? { ...l, completed: !l.completed } : l
    );
    setLessonsState(newLessonsState);
  };

  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'www.youtube.com' && urlObj.pathname === '/watch') {
        const videoId = urlObj.searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url; // Assume it's already an embed link
    } catch (e) {
      return ''; // Invalid URL
    }
  }

  const embedUrl = selectedVideo ? getYoutubeEmbedUrl(selectedVideo.url) : '';

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
            <Badge variant="secondary">Progresso: {progress}%</Badge>
        )}
      </header>
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          <div className="lg:col-span-2">
             <div className="mb-8">
              <div className="aspect-video relative rounded-xl overflow-hidden mb-2 shadow-lg bg-slate-200">
                {embedUrl ? (
                   <iframe
                      src={embedUrl}
                      title={selectedVideo?.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p>Selecione uma aula para começar.</p>
                  </div>
                )}
              </div>
              {selectedVideo && (
                 <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{selectedVideo.title}</h2>
                    <Button onClick={() => handleMarkAsCompleted(selectedVideo.id)}>
                        {selectedVideo.completed ? <CheckCircle className="mr-2" /> : <PlayCircle className="mr-2" />}
                        {selectedVideo.completed ? 'Marcar como não concluída' : 'Marcar como concluída'}
                    </Button>
                 </div>
              )}
            </div>
             <div>
                <h2 className="text-2xl font-bold font-headline mb-4">Descrição do Módulo</h2>
                <p className="text-muted-foreground">{item.description}</p>
             </div>
          </div>
          
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold font-headline mb-4">Aulas do Módulo</h2>
             <div className="flex items-center gap-4 mb-4">
                <Progress value={progress} className="h-2 w-full" />
                <span className="text-sm font-medium text-muted-foreground">{progress}% completo</span>
            </div>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1" className="border rounded-lg">
                 <AccordionTrigger className="p-4 text-lg hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                        <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-1 pb-2">
                    <ul className="flex flex-col gap-1">
                      {lessonsState.map((lesson, index) => (
                        <li key={lesson.id}>
                          <button 
                            onClick={() => handleLessonClick(lesson)}
                            className={`w-full text-left p-3 rounded-md transition-colors flex items-center gap-3 ${selectedVideo?.id === lesson.id ? 'bg-primary/20 text-primary-foreground' : 'hover:bg-accent'}`}>
                            {lesson.completed ? <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /> : <PlayCircle className="h-5 w-5 text-primary flex-shrink-0" />}
                            <span>Aula {index + 1}: {lesson.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </main>
    </div>
  );
}
