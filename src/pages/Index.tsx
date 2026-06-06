// src/pages/Index.tsx
import React from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
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
          "Acompanhamento longitudinal centrado no paciente, individualizado e contínuo."
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-2 font-medium">
          Dr. Pablo Berini Lemgruber
        </p>
        <p className="text-lg text-gray-400">
          Médico - CRM/MG 113.934
        </p>
        <div className="mt-8">
          <Link to="/confirmar-presenca" className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
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
          <p>Ofereço uma prática clínica baseada em evidências, com foco em custo-efetividade e na segurança do paciente.</p>
          <p>Meu raciocínio clínico permite elaboração de hipóteses e a tomada de decisões mesmo diante de demandas altas e fluxos intensos de pacientes.</p>
          <p className="font-semibold text-white">É isso que me move:</p>
          <p>Prestar um bom cuidado com boa comunicação e sempre trabalhar de forma colaborativa com pacientes, suas famílias e equipes multidisciplinares da saúde.</p>
        </blockquote>
      </section>

      {/* Quem eu sou como profissional */}
      <section className="w-full mb-20 flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-1/3">
          {/* Placeholder para a foto do Dr Pablo */}
          <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/600x800/333333/cccccc?text=Foto+Dr.+Pablo" 
              alt="Dr. Pablo Berini Lemgruber" 
              className="w-full h-full object-cover"
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
              <span>Bacharelado em Medicina pelo Centro Universitário Faminas Muriaé (2020 - 2025)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Pós Graduando em Psiquiatria Adulto pelo Hospital Israelita Albert Einstein - SP</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>ACLS / BLS (Advanced Cardiovascular Life Support) aprovado pela American Heart Association (2025)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Médico plantonista na UPA Conselheiro Lafaiete e no Hospital Divino Espírito Santo (Lamim)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Experiência no SAMU, CEDISME (UTI móvel), UBS e Saúde Ocupacional em diferentes unidades</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <span>Interesse e atuação nas áreas de clínica médica, urgência e emergência, saúde mental e saúde coletiva</span>
            </li>
          </ul>
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
            <AccordionTrigger className="text-white hover:text-gray-300 text-left">Como conhecer a atuação do Dr. Pablo?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Entre em contato, agende sua consulta ou tire dúvidas sobre prevenção, exames de rotina ou atendimentos mais aprofundados. O cuidado é integrado e longitudinal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left">Como faço o agendamento?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              O agendamento pode ser feito pelo número (31) 98753-2126 ou através do e-mail pabloberini@hotmail.com. Atendimentos variam entre presencial, domiciliar ou clínicas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left">Como funciona a primeira consulta?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Faremos uma anamnese completa, avaliando sua rotina, estado de saúde geral, queixas atuais e histórico. Em seguida, iniciam-se os exames físicos baseados em medicina por evidências.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-gray-800 px-4">
            <AccordionTrigger className="text-white hover:text-gray-300 text-left">E caso eu precise de acompanhamento continuado?</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              O foco sempre é a saúde preventiva e o acompanhamento de comorbidades (como controle ambulatorial, prescrições e referenciamento). 
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* O que posso fazer por você */}
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
      </section>

    </div>
  );
};

export default Index;
