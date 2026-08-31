import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PostSono = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-md border border-gray-800 p-6 md:p-12 rounded-2xl shadow-2xl">
        <Link to="/#posts" className="inline-flex items-center text-orange-400 hover:text-white mb-8 transition-colors font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Voltar para a página inicial
        </Link>

        <h1 className="text-3xl md:text-5xl text-white font-bold mb-8 leading-tight">
          Como dormir melhor: Higiene do Sono
        </h1>

        <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            A higiene do sono é um conjunto de práticas e hábitos que são necessários para ter um sono de qualidade e, consequentemente, uma boa saúde física e mental. 
            Noites mal dormidas e insônia podem ter efeitos negativos profundos em nossa saúde, incluindo problemas de concentração, irritabilidade e até aumento do risco de doenças. 
            A higiene do sono refere-se às diversas práticas e hábitos que podem te ajudar a dormir melhor.  A ideia é criar condições ideais para que o corpo e a mente possam descansar plenamente. 
          </p>
          
          <h2 className="text-xl font-bold text-white mt-8 mb-2">1. Mantenha um horário regular de sono</h2>
          <p>Vá para a cama e acorde no mesmo horário todos os dias, mesmo nos fins de semana.  Isso ajuda a regular o relógio biológico e facilita a adormecer e acordar.  Acostume-se a dormir de 6 a 8 horas por dia. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">2. Crie um ambiente de sono adequado</h2>
          <p>Mantenha o quarto escuro, silencioso e fresco.  Use cortinas blackout para bloquear a luz, invista em um bom colchão e travesseiros, utilize máscaras de dormir caso a cortina não for possível. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">3. Limite a exposição a telas antes de dormir</h2>
          <p>A luz azul emitida por telefones, tablets e computadores pode interferir na produção de melatonina, o hormônio do sono.  Tente evitar o uso de dispositivos eletrônicos pelo menos uma hora antes de dormir. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">4. Evite cafeína e álcool</h2>
          <p>A cafeína pode interferir no sono até seis horas após o consumo.  O álcool, embora possa induzir sonolência, pode interromper os ciclos de sono profundo e reduzir a qualidade de uma noite bem dormida. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">5. Pratique atividade física regularmente</h2>
          <p>Exercícios regulares podem ajudar a adormecer mais rapidamente e a ter um sono mais profundo.  No entanto, evite exercícios intensos próximo da hora de dormir, pois podem ter um efeito estimulante. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">6. Desenvolva uma rotina de relaxamento</h2>
          <p>Estabeleça uma rotina de relaxamento antes de dormir, como tomar um banho quente, ler um livro, praticar meditação ou ouvir uma música relaxante (músicas clássicas, músicas ASMR que imitam sons de chuva, natureza, uma lareira pegando fogo, etc)  Essas atividades podem ajudar a sinalizar ao corpo que é hora de desacelerar e preparar-se para o sono. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">7. Evite sonecas longas durante o dia</h2>
          <p>Se precisar cochilar, mantenha o tempo de soneca curto (20-30 minutos) e evite cochilar no final da tarde para não atrapalhar o sono noturno. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">8. Cuidado com a alimentação</h2>
          <p>Se possível, jante algumas horas antes de ir dormir, para ter tempo de fazer a digestão.  Priorize alimentos mais leves à noite alimentos pesados e gordurosos podem causar refluxo e outros sintomas gástricos e atrapalhar o sono. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">9. Não vá para a cama sem sono</h2>
          <p>Deite-se na cama somente quando estiver com sono.  Além disso, evite trabalhar, ler e-mails, assistir à TV ou acessar as redes sociais na cama.  Utilize-a apenas para sono e sexo. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">10. Exponha-se à luz do dia</h2>
          <p>Procure se expor à luz natural durante o dia, em ambientes abertos (a luz diurna em oposição ao escuro da noite ajuda a regular o relógio biológico e beneficia o sono). </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">11. Verifique o estado do seu colchão</h2>
          <p>Verifique o estado do seu travesseiro e colchão, pois a vida útil da maioria deles é de oito a dez anos.  Ao escolher um colchão, busque uma opção confortável e compatível com seu tamanho e peso. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">12. Faça uso de Melatonina meia hora antes de dormir</h2>
          <p>A melatonina não trata a insônia em si, mas é um ótimo adjuvante para ajudar a relaxar na hora do sono, e pode ser utilizada junto com medicação prescrita para insônia. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">13. Não deite de barriga cheia</h2>
          <p>Deitar de barriga cheia pode prejudicar o relaxamento do corpo, dificultar a dormir ou provocar refluxo gastroesofágico e despertares durante a noite.  Antes de dormir deve-se dar preferência por alimentos leves, evitando comidas pesadas, açucaradas e picantes.  Sendo assim, procure fazer a última refeição da noite mais cedo. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">14. Adiante o horário de suas medicações noturnas</h2>
          <p>Algumas medicações podem interferir na qualidade do sono, converse com o psiquatra se você faz uso de alguma delas, e se possível, tome mais cedo, afastando-as do horário de dormir. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">15. Vestir pijamas confortáveis</h2>
          <p>Vestir pijamas ou camisolas confortáveis, ajuda a criar um ambiente favorável para dormir, além de que sinaliza ao cérebro que é hora de dormir. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">16. Anote seus afazeres e preocupações antes de deitar</h2>
          <p>Essa é uma técnica eficaz de higiene do sono que ajuda a esvaziar a mente e reduzir a ansiedade.  Anote tarefas pendentes, compromissos do dia seguinte ou ideias que estejam rondando sua cabeça.  Faça isso pelo menos uma a duas horas antes de ir para a cama, e não na hora exata de dormir.  Depois de anotar, diga a si mesmo que o problema está guardado no papel e só será resolvido no dia seguinte. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">17. Levantar da cama se não conseguir dormir</h2>
          <p>Caso não consiga dormir após 30 minutos deitada na cama, é recomendado levantar da cama, fazer uns alongamentos ou atividades relaxantes, por exemplo, e voltar para a cama quando sentir sono novamente.  Isso porque ficar na cama tentando dormir ou virando de um lado para o outro, pode aumentar o estado de alerta, dificultando a pessoa a pegar no sono novamente.  Não confira a hora: relógios e celulares devem ser evitados.  Se você despertar por alguns minutos, tente não verificar a hora nem as notificações do celular. </p>
        </div>
      </div>
    </div>
  );
};

export default PostSono;