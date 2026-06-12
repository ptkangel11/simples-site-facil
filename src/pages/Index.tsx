// src/pages/Index.tsx
import React from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import DrPabloImage from '../components/modificado.png';
import ProfileImage from '../components/mini.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
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
          target="_blank" // Abre numa nova aba (boa prática pra links externos)
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
        >
          {/* SVG do WhatsApp */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
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
      <section className="w-full mb-20 flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full bg-black/50 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-gray-800 shadow-2xl">
        <div className="w-full md:w-1/5 mb-10">
          {/* Placeholder para a foto do Dr Pablo */}
          <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
            <img 
              src={ProfileImage} 
              alt="Dr. Pablo Berini Lemgruber" 
              className="w-full h-full object-cover brightness-10"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl lg:text-3xl text-white mb-6 font-semibold border-b border-gray-600 pb-2">
            Quem eu sou como profissional
          </h2>
          <div>
            <h3 className="text-xl text-white font-medium mb-1">Dr. Pablo Berini Lemgruber</h3>
            <p className="text-gray-400 mb-6">Médico - CRM/MG 113.934</p>
          </div>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Médico pelo Centro Universitário Faminas </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Pós Graduação em Psiquiatria pelo Hospital Israelita Albert Einstein - SP</span>
            </li>
            {/* <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>ACLS / BLS (Advanced Cardiovascular Life Support) aprovado pela American Heart Association (2025)</span>
            </li> */}
            {/* <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Médico plantonista na UPA Conselheiro Lafaiete e no Hospital Divino Espírito Santo (Lamim)</span>
            </li> */}
            {/* <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Experiência no SAMU, CEDISME (UTI móvel), UBS e Saúde Ocupacional em diferentes unidades</span>
            </li> */}
            {/* <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Interesse e atuação nas áreas de clínica médica, urgência e emergência, saúde mental e saúde coletiva</span>
            </li> */}
          </ul>
        </div>
        </div>
      </section>

      {/* Como funciona o atendimento (Responde) */}
      <section id="responde" className="w-full mb-20 scroll-mt-24">
        <h2 className="text-2xl lg:text-3xl text-white mb-4 font-semibold border-b border-gray-600 pb-2">
          Dr. Pablo Responde
        </h2>
        <p className="text-gray-300 mb-8">
          Atenção direcionada, da primeira queixa até a continuação do tratamento. Acolhimento feito com clareza e empatia.
        </p>
        
        <Accordion type="single" collapsible className="w-full text-left bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800">
          <AccordionItem value="item-1" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left hover:no-underline">Como conhecer a atuação do Dr. Pablo?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
             O primeiro contato normalmente acontece pelo site ou pelas redes sociais. Lá você encontra informações claras sobre meu trabalho, minha forma de cuidar e os atendimentos que realizo, para decidir com tranquilidade se esse é o cuidado que você procura.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left hover:no-underline">Como faço o agendamento?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              O agendamento pode ser feito pelo número (31) 98753-2126. Atendimentos online e em breve presencial.
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

      {/* O que posso fazer por você
      <section className="w-full mb-10">
        <h2 className="text-2xl lg:text-3xl text-white mb-4 font-semibold border-b border-gray-600 pb-2">
          O que posso fazer por você
        </h2>
        <p className="text-gray-300 mb-8">
          Prontidão no cuidado hospitalar, urgências, além de avaliação preventiva geral e ocupacional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black/40 border border-gray-800 p-6 rounded-lg text-center backdrop-blur-sm">
            <div className="w-full aspect-[4/3] bg-gray-800 mb-4 rounded overflow-hidden">
               <img src="https://via.placeholder.com/400x300/333333/cccccc?text=Urgência+e+Emergência" alt="Urgência e Emergência" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-white font-medium mb-2">Urgência e Emergência</h3>
            <p className="text-gray-400">Manejo de quadros agudos e estabilização.</p>
          </div>
          
          <div className="bg-black/40 border border-gray-800 p-6 rounded-lg text-center backdrop-blur-sm">
            <div className="w-full aspect-[4/3] bg-gray-800 mb-4 rounded overflow-hidden">
               <img src="https://via.placeholder.com/400x300/333333/cccccc?text=Clínica+Médica" alt="Clínica Médica" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-white font-medium mb-2">Clínica Médica</h3>
            <p className="text-gray-400">Prevenção, diagnóstico e acompanhamento clínico.</p>
          </div>

          <div className="bg-black/40 border border-gray-800 p-6 rounded-lg text-center backdrop-blur-sm">
            <div className="w-full aspect-[4/3] bg-gray-800 mb-4 rounded overflow-hidden">
               <img src="https://via.placeholder.com/400x300/333333/cccccc?text=Saúde+Mental" alt="Saúde Mental" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-white font-medium mb-2">Saúde Mental</h3>
            <p className="text-gray-400">Psiquiatria, manejo e acompanhamento longitudinal.</p>
          </div>

          <div className="bg-white/5 border border-gray-600 p-6 rounded-lg text-center backdrop-blur-sm">
            <div className="w-full aspect-[4/3] bg-gray-800 mb-4 rounded overflow-hidden">
               <img src="https://via.placeholder.com/400x300/333333/cccccc?text=Saúde+Ocupacional" alt="Saúde Ocupacional" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-white font-medium mb-2">Saúde Ocupacional</h3>
            <p className="text-gray-400">Avaliações corporativas e exames rotineiros.</p>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Index;
