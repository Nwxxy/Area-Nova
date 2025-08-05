
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground fade-in">
       <header className="py-3 px-4 md:px-8 flex items-center justify-between border-b border-accent/30 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
         <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
        <h1 className="text-lg font-bold">Termos e Condições</h1>
        <div></div>
      </header>
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="prose prose-stone dark:prose-invert max-w-4xl mx-auto">
            <h2>1. Termos</h2>
            <p>Ao acessar ao site <Link href="/">Saboaria da Vó Rita</Link>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais и de marcas comerciais aplicáveis.</p>

            <h2>2. Uso de Licença</h2>
            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Saboaria da Vó Rita, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
            <ol>
                <li>modificar ou copiar os materiais;</li>
                <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Saboaria da Vó Rita;</li>
                <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ol>
            <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Saboaria da Vó Rita a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>

            <h2>3. Isenção de responsabilidade</h2>
            <ol>
                <li>Os materiais no site da Saboaria da Vó Rita são fornecidos 'como estão'. Saboaria da Vó Rita не oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                <li>Além disso, o Saboaria da Vó Rita não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
            </ol>

            <h2>4. Limitações</h2>
            <p>Em nenhum caso o Saboaria da Vó Rita ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Saboaria da Vó Rita, mesmo que Saboaria da Vó Rita ou um representante autorizado da Saboaria da Vó Rita tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>

            <h2>5. Precisão dos materiais</h2>
            <p>Os materiais exibidos no site da Saboaria da Vó Rita podem incluir erros técnicos, tipográficos ou fotográficos. Saboaria da Vó Rita não garante que qualquer material em seu site seja preciso, completo ou atual. Saboaria da Vó Rita pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Saboaria da Vó Rita não se compromete a atualizar os materiais.</p>

            <h2>6. Links</h2>
            <p>O Saboaria da Vó Rita não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link не implica endosso por Saboaria da Vó Rita do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

            <h3>Modificações</h3>
            <p>O Saboaria da Vó Rita pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
            
            <h3>Lei aplicável</h3>
            <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Saboaria da Vó Rita e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
        </div>
      </main>
    </div>
  );
}
