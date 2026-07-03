// src/pages/Index.tsx
import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DrPabloImage from '../components/modificado.png';
import ProfileImage from '../components/mini.jpeg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// 1. BANCO DE AVALIAÇÕES (7 selecionadas a dedo do seu Google Maps)
const REVIEWS_DATA = [
  {
    name: "Felipe Alves",
    initial: "F",
    text: "Excelente médico! Muito atencioso, profissional e dedicado. Explica tudo com clareza, transmite segurança e demonstra muito cuidado com os pacientes. Tive uma ótima experiência e recomendo.",
  },
  {
    name: "Luis Augusto Fonseca",
    initial: "L",
    text: "Profissional super preparado e atencioso. Finalmente achei um psiquiatra com quem o tratamento deu certo! Recomendo demais!",
  },
  {
    name: "Ana Martins",
    initial: "A",
    text: "Simplesmente impecável a conduta dele. Médico excepcional, escuta ativa, soube conduzir a consulta e extrair o que de fato era importante. Super indico!",
  },
  {
    name: "Natália Spechit",
    initial: "N",
    text: "Excelente médico, muito paciente e atencioso! Transmite uma segurança enorme desde o primeiro minuto de conversa.",
  },
  {
    name: "Maikon Stefan",
    initial: "M",
    text: "Atendimento humanizado. O Dr. Pablo tem muita paciência e calma no atendimento. Super recomendo o trabalho dele!",
  },
  {
    name: "raferson junior",
    initial: "R",
    text: "Ótimo doutor!!! Muito cauteloso, atencioso e pontual. O acompanhamento pelo WhatsApp faz toda a diferença.",
  },
  {
    name: "Laís Falanghe",
    initial: "L",
    text: "Fui muito bem atendida pelo Dr. Pablo. Esclareceu todas as minhas dúvidas com paciência e foi extremamente pontual.",
  },
  {
    name: "Mário Guilherme Serenário",
    initial: "M",
    text: "SALVOU MINHA MÃE!!",
  },
  {
    name: "Deivison Gregório",
    initial: "D",
    text: "Médico simpático com atendimento humanizado. Muito bom o atendimento!",
  },
  {
    name: "Lucas Ferreira",
    initial: "L",
    text: "Ele é muito atencioso!",
  },
  {
    name: "Matheus Fonseca Felipe",
    initial: "M",
    text: "Ótimo médico!",
  },
  {
    name: "Mila",
    initial: "M",
    text: "Ótimo médico!!!",
  }
];

const Index = () => {
  // Estado que controla qual é a avaliação que está na "ponta esquerda" do carrossel
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  // Função matemática que recorta exatamente as 3 avaliações visíveis do momento
  const getVisibleReviews = () => {
    return [
      REVIEWS_DATA[currentReview],
      REVIEWS_DATA[(currentReview + 1) % REVIEWS_DATA.length],
      REVIEWS_DATA[(currentReview + 2) % REVIEWS_DATA.length],
    ];
  };

  return (
    <div className="flex flex-col items-center justify-start text-left min-h-[calc(100vh-3rem)] px-4 pt-20 md:pt-24 pb-16 w-full max-w-5xl mx-auto">
      
      {/* Hero Section */}
      <section id="sobre" className="animate-fade-in w-full mb-20 text-center pt-32 md:pt-48 scroll-mt-24">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white mb-6 tracking-wide font-light leading-tight">
          “Psiquiatria de excelência, com precisão clínica e cuidado profundamente individualizado.”
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-2 font-medium">
          Dr. Pablo Berini Lemgruber
        </p>
        <p className="text-lg text-gray-400">
          Médico - CRM/MG 113.934
        </p>
        <div className="mt-8">
          <Link 
            to="https://wa.me/message/3N4LB5XF4V22H1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Agendar Consulta
          </Link>
        </div>
      </section>

      {/* O que orienta meu cuidado */}
      <section className="w-full mb-20">
        <h2 className="text-2xl lg:text-3xl text-white mb-6 font-semibold border-b border-gray-600 pb-2">
          O que orienta meu cuidado
        </h2>
        <blockquote className="text-gray-300 text-lg space-y-4 max-w-3xl">
          <p>Meu trabalho é guiado pela escuta atenta, pelo respeito à individualidade e pela prática baseada em evidências científicas.</p>
          <p>Busco construir, junto com cada paciente, um plano de cuidado personalizado, com foco no bem-estar, na qualidade de vida e na saúde mental.</p>
          <p className="font-semibold text-white">É isso que me move:</p>
          <p>Acreditar que cada pessoa merece ser ouvida com atenção, acolhida sem julgamentos e cuidada com respeito à sua individualidade.</p>
        </blockquote>
      </section>

      {/* Quem eu sou como profissional */}
      <section className="w-full mb-20">
        <div className="w-full bg-black/50 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-gray-800 shadow-2xl flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src={ProfileImage} 
                alt="Dr. Pablo Berini Lemgruber" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl lg:text-3xl text-white mb-6 font-semibold border-b border-gray-600 pb-2">
              Minha formação
            </h2>
            <div>
              <h3 className="text-xl text-white font-medium mb-1">Dr. Pablo Berini Lemgruber</h3>
              <p className="text-gray-400 mb-6">Médico - CRM/MG 113.934</p>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                <span>Pós Graduando em Psiquiatria pelo Hospital Israelita Albert Einstein - SP</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona o atendimento (Responde) */}
      <section id="responde" className="w-full mb-20 scroll-mt-24">
        <h2 className="text-2xl lg:text-3xl text-white mb-4 font-semibold border-b border-gray-600 pb-2">
          Dúvidas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full text-left bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800">
          <AccordionItem value="item-1" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left hover:no-underline">Como conhecer a atuação do Dr. Pablo?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
             O primeiro contato normalmente acontece pelo site ou pelas redes sociais. Lá você encontra informações claras sobre meu trabalho, minha forma de cuidar e os atendimentos que realizo, para decidir com tranquilidade se esse é o cuidado que você procura.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left hover:no-underline">Onde é feito o atendimento?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              O agendamento pode ser feito pelo número (31) 98753-2126 ou através do e-mail pabloberini@hotmail.com. Atendimentos via Telemedicina
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left hover:no-underline">Como funciona a primeira consulta?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
             Na primeira consulta, faço uma avaliação cuidadosa, escuto suas queixas e explico as possibilidades de tratamento de forma clara, sem pressa e com total transparência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left hover:no-underline">
              E após o atendimento?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 flex flex-col gap-3 pb-4">
              <p>
                O plano inclui acompanhamento por 60 dias via WhatsApp, com suporte direto do Dr. Pablo durante todo o período. Nesse período, você recebe toda a assistência necessária como por exemplo:
              </p>
              <ul className="list-disc pl-5 space-y-1 marker:text-gray-500">
                <li>Primeira consulta completa</li>
                <li>Renovação de receitas</li>
                <li>Solicitação e renovação de exames, se necessário</li>
                <li>Avaliação do tratamento se está em pleno funcionamento e dos possíveis efeitos adversos associados</li>
                <li>Orientações e ajustes de medicações</li>
                <li>Acompanhamento próximo para tirar dúvidas</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Seção de Avaliações (Carrossel Infinito Estilo Trustindex) */}
      <section className="w-full mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-600 pb-2 mb-8 gap-4">
          <h2 className="text-2xl lg:text-3xl text-white font-semibold mb-0 border-0">
            O que dizem os pacientes
          </h2>
          
          {/* Setas de Navegação */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button 
              onClick={prevReview} 
              className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-white transition-all border border-gray-700 hover:scale-105 active:scale-95"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextReview} 
              className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-white transition-all border border-gray-700 hover:scale-105 active:scale-95"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid responsivo com as 3 avaliações recortadas pela função */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleReviews().map((review, idx) => (
            <div 
              key={review.name} // O nome como chave faz o React re-renderizar a animação suavemente
              className={`bg-black/50 backdrop-blur-md border border-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full animate-fade-in ${
                idx > 0 ? 'hidden md:flex' : 'flex'
              }`}
            >
              <div>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-300 italic mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {review.initial}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{review.name}</p>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    <p className="text-xs text-gray-400">Avaliação verificada</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      {/* Seção de Localização (Apenas o Embed do Google Maps) */}
      <section className="w-full mb-10">
        <h2 className="text-2xl lg:text-3xl text-white mb-6 font-semibold border-b border-gray-600 pb-2">
          Localização
        </h2>
        {/* Container flexível que adapta a proporção do mapa entre celular e desktop */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8125173446015!2d-43.7202725!3d-20.513910499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3e373edc367b1%3A0x441556c296e77b19!2sDr.%20Pablo%20Berini!5e0!3m2!1spt-BR!2sbr!4v1782054250863!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Index;