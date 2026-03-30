/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Users, 
  Brain, 
  ShieldCheck, 
  Award,
  ArrowRight,
  Star,
  Zap,
  Lock,
  Download,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface FAQItem {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    name: "Ana Silva",
    role: "Vendedora Autônoma",
    content: "Eu travava completamente na hora de oferecer meus produtos. Depois de aplicar o Método Falar Bem, minha taxa de fechamento subiu 40%. O capítulo sobre gatilhos mentais mudou meu jogo.",
    image: "https://picsum.photos/seed/ana/100/100"
  },
  {
    name: "Marcos Oliveira",
    role: "Estudante de Direito",
    content: "Sempre tive pavor de sustentações orais. O guia prático de controle emocional me deu a segurança que eu não tive em 5 anos de faculdade. Simples e direto ao ponto.",
    image: "https://picsum.photos/seed/marcos/100/100"
  },
  {
    name: "Juliana Costa",
    role: "Analista de RH",
    content: "Precisava conduzir reuniões e minha voz sempre tremia. Com as técnicas de neuro-oratória do ebook, hoje falo com autoridade e as pessoas realmente me escutam.",
    image: "https://picsum.photos/seed/juliana/100/100"
  }
];

const faqs: FAQItem[] = [
  {
    question: "Como recebo o Método?",
    answer: "O acesso é imediato. Após a confirmação do pagamento, você recebe o link para download do Ebook em PDF no seu e-mail e pode ler no celular, tablet ou computador."
  },
  {
    question: "É um livro físico?",
    answer: "Não, é um Ebook digital (PDF) de alta qualidade, projetado para ser consultado rapidamente sempre que você precisar se preparar para uma fala importante."
  },
  {
    question: "O Método serve para quem é muito tímido?",
    answer: "Sim! O Método foi desenhado especificamente para quem sofre com a timidez, usando técnicas de neurociência para reprogramar a resposta do seu cérebro ao medo."
  },
  {
    question: "Tem garantia?",
    answer: "Com certeza. Você tem 7 dias para ler e aplicar. Se sentir que o método não é para você, devolvemos cada centavo investido."
  }
];

const pillars = [
  { id: "01", title: "Neuro-Conexão", desc: "Como criar uma conexão instantânea com qualquer ouvinte usando padrões cerebrais." },
  { id: "02", title: "Arquitetura da Fala", desc: "A estrutura lógica para organizar pensamentos complexos em segundos." },
  { id: "03", title: "Domínio do Medo", desc: "Técnicas de biofeedback para controlar a ansiedade antes de começar a falar." },
  { id: "04", title: "Voz de Autoridade", desc: "Como ajustar tom e ritmo para projetar confiança inabalável." },
  { id: "05", title: "Linguagem Invisível", desc: "O poder da comunicação não-verbal que fala mais alto que suas palavras." },
  { id: "06", title: "Persuasão Ética", desc: "Gatilhos mentais para convencer pessoas sem parecer um vendedor chato." }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-white font-black text-xl tracking-tighter italic">MÉTODO <span className="text-emerald-500">FALAR BEM</span></span>
      </div>
      <a href="#offer" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2 px-4 rounded-full text-sm transition-all transform hover:scale-105">
        BAIXAR MÉTODO AGORA
      </a>
    </div>
  </nav>
);

interface FAQProps {
  item: FAQItem;
  key?: React.Key;
}

const FAQ = ({ item }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-400 transition-colors"
      >
        <span className="text-lg font-medium">{item.question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10" />
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 tracking-widest uppercase"
            >
              <Download className="w-3 h-3" /> Guia Digital de Implementação Imediata
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[0.95]"
            >
              SUA FALA É SUA MAIOR <span className="text-emerald-500">ARMA</span>. APRENDA A USÁ-LA.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 mb-10 max-w-xl lg:mx-0 mx-auto leading-relaxed"
            >
              O Método Falar Bem é o guia definitivo para quem deseja dominar a oratória através da neurociência. Destrave sua comunicação e conquiste autoridade instantânea.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-4"
            >
              <a 
                href="#offer"
                className="group relative inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-black font-black py-5 px-10 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                BAIXAR O MÉTODO AGORA <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-zinc-500 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> DOWNLOAD IMEDIATO APÓS A COMPRA
              </p>
            </motion.div>
          </div>

          {/* Product Image (Ebook Mockup) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://i.ibb.co/7d0VMrVG/CAPA-METODO-FALARBEM.jpg" 
                alt="Método Falar Bem Ebook" 
                className="relative w-72 md:w-96 rounded-lg shadow-[20px_20px_60px_rgba(0,0,0,0.8)] border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-black font-black p-4 rounded-2xl shadow-2xl">
                <p className="text-xs uppercase tracking-widest">Apenas</p>
                <p className="text-2xl">R$ 37,90</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O Método Falar Bem é para você que...</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/40 p-8 rounded-3xl border border-red-500/10">
              <div className="space-y-6">
                {[
                  "Sente um 'branco' total na hora de falar",
                  "Tem medo do que os outros vão pensar de você",
                  "Sente que sua voz não passa autoridade",
                  "Perde oportunidades por ficar em silêncio",
                  "Fica ansioso dias antes de uma apresentação"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <p className="text-zinc-300 text-lg">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 p-8 rounded-3xl border border-emerald-500/10">
              <div className="space-y-6">
                {[
                  "Quer um passo a passo prático e rápido",
                  "Deseja falar com clareza e magnetismo",
                  "Precisa convencer pessoas com facilidade",
                  "Busca dominar suas emoções sob pressão",
                  "Quer ser respeitado em qualquer ambiente"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <p className="text-zinc-300 text-lg">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">A Estrutura do Método</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">O que você vai encontrar no Ebook</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Um guia completo dividido em 6 pilares estratégicos para transformar sua comunicação.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <span className="text-4xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">#{pillar.id}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{pillar.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">Presentes Exclusivos</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Bônus Inclusos na Oferta</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Se você agir agora, além do Método Falar Bem, você leva quatro guias complementares de alto impacto.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-[32px] bg-zinc-900/50 border border-emerald-500/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">Grátis</div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Zap className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mestre das Reuniões Online</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Aprenda a dominar o Zoom, Teams e Google Meet. Como manter a atenção das pessoas mesmo através de uma tela e projetar autoridade digital.</p>
                  <p className="text-emerald-500 font-bold text-xs mt-4 uppercase tracking-widest">Valor: R$ 47,00</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-[32px] bg-zinc-900/50 border border-emerald-500/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">Grátis</div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Brain className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Protocolo Anti-Branco</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">O sistema de emergência para quando você esquece o que ia dizer. Técnicas de improviso rápido para retomar o fio da meada sem que ninguém perceba.</p>
                  <p className="text-emerald-500 font-bold text-xs mt-4 uppercase tracking-widest">Valor: R$ 37,00</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-[32px] bg-zinc-900/50 border border-emerald-500/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">Grátis</div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Checklist da Oratória Magnética</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">O guia rápido para revisar antes de qualquer fala importante. Garanta que você não esqueceu nenhum elemento essencial para prender a atenção.</p>
                  <p className="text-emerald-500 font-bold text-xs mt-4 uppercase tracking-widest">Valor: R$ 27,00</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-[32px] bg-zinc-900/50 border border-emerald-500/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">Grátis</div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Users className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comunicação Não-Verbal de Impacto</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Domine a linguagem do corpo. Aprenda como usar gestos, postura e olhar para transmitir confiança e autoridade sem dizer uma única palavra.</p>
                  <p className="text-emerald-500 font-bold text-xs mt-4 uppercase tracking-widest">Valor: R$ 57,00</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-24 px-4 bg-emerald-500">
        <div className="max-w-4xl mx-auto bg-black rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BookOpen className="w-32 h-32 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase">Oferta de Lançamento</h2>
          <p className="text-zinc-400 mb-12 text-lg">Tenha acesso ao Método Falar Bem completo e comece sua transformação hoje mesmo por um preço simbólico.</p>

          <div className="space-y-4 mb-12 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span>Ebook Método Falar Bem (PDF)</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span>Checklist: Preparação de Elite</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span>Guia: 50 Gatilhos de Persuasão</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400 font-bold">
              <Zap className="w-5 h-5" /> <span>BÔNUS: Mestre das Reuniões Online</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400 font-bold">
              <Brain className="w-5 h-5" /> <span>BÔNUS: Protocolo Anti-Branco</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400 font-bold">
              <CheckCircle2 className="w-5 h-5" /> <span>BÔNUS: Checklist da Oratória Magnética</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400 font-bold">
              <Users className="w-5 h-5" /> <span>BÔNUS: Comunicação Não-Verbal de Impacto</span>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-zinc-500 line-through text-xl mb-2">De R$ 129,90</p>
            <div className="flex flex-col items-center">
              <span className="text-zinc-400 text-sm uppercase font-bold tracking-widest mb-1">Por apenas</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-7xl md:text-9xl font-black text-emerald-500 tracking-tighter">37,90</span>
              </div>
              <span className="text-zinc-500 text-sm mt-2">Pagamento único • Acesso Vitalício ao Arquivo</span>
            </div>
          </div>

          <a 
            href="https://pay.kiwify.com.br/Bipudxg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-black py-6 px-8 rounded-2xl text-2xl transition-all transform hover:scale-105 shadow-xl mb-6 flex items-center justify-center gap-3"
          >
            <Download className="w-8 h-8" /> BAIXAR MÉTODO AGORA
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 text-zinc-500 text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> Compra 100% Segura</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 7 Dias de Garantia</span>
            <span className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> Leitura em Qualquer Dispositivo</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Pessoas Reais, Resultados Reais</h2>
            <p className="text-zinc-400">Veja como o Método Falar Bem está mudando a vida de pessoas comuns.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5 relative">
                <div className="flex gap-1 text-emerald-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-zinc-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-zinc-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Institute */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Instituto Falar Bem" 
              className="relative rounded-[40px] w-full aspect-[4/5] object-cover border border-white/10 opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">A Instituição</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">Instituto Falar Bem</h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>O Instituto Falar Bem é uma organização dedicada à pesquisa e ensino de alta performance em comunicação humana através da neurociência aplicada.</p>
              <p>Nossa missão é democratizar o acesso às técnicas de oratória mais avançadas do mundo, permitindo que qualquer pessoa, independente da sua timidez, consiga se expressar com clareza e autoridade.</p>
              <p>O Método Falar Bem é fruto de anos de estudos comportamentais e testes práticos, condensados em um guia digital de fácil consumo e aplicação imediata.</p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Pesquisadores</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">50k+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Vidas Impactadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Dúvidas Frequentes</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FAQ key={i} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-12">COMUNICAÇÃO NÃO É DOM. É MÉTODO.</h2>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white font-black text-2xl tracking-tighter italic">MÉTODO <span className="text-emerald-500">FALAR BEM</span></span>
            </div>
            <p className="text-zinc-500 text-sm">© 2026 Instituto Falar Bem. Todos os direitos reservados.</p>
            <div className="flex gap-8 text-zinc-500 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
