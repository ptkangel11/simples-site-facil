import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PostCigarro = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-md border border-gray-800 p-6 md:p-12 rounded-2xl shadow-2xl">
        <Link to="/#posts" className="inline-flex items-center text-orange-400 hover:text-white mb-8 transition-colors font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Voltar para a página inicial
        </Link>

        <h1 className="text-3xl md:text-5xl text-white font-bold mb-8 leading-tight">
          21 dicas de como largar o cigarro
        </h1>

        <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            A nicotina é uma das drogas que mais causam dependência.  Em menos de 20 segundos, ela chega ao cérebro e libera substâncias químicas que provocam relaxamento e bem-estar.  Por outro lado, apenas 20 minutos depois, a sua ausência já pode ser sentida: a pessoa se sente irritada, dispersa, ansiosa e com vontade de acender outro cigarro. 
            Se você fuma, talvez já tenha se cansado do mau hálito, do cheiro nas roupas e da necessidade de sair da roda de amigos para acender um cigarro.  Porém, mesmo tentando largar a dependência, não conseguiu. 
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">1. Atrase o horário do primeiro cigarro</h2>
          <p>Que horas você costuma começar a fumar?  Repare que, quanto mais cedo, maior a quantidade de cigarros ao longo do dia.  Por isso, a dica é não pegar o maço assim que acordar.  Tome o café da manhã primeiro ou, se você já faz isso, atrase o cigarro inicial em 1 a 2 horas.  Por exemplo: se sempre começa às 9h, deixe para as 11h ou após o almoço. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">2. Deixe o maço de cigarro longe de você</h2>
          <p>Não carregue o maço no bolso ou na bolsa.  De tanto relacionar o alívio provocado pelo cigarro à ansiedade causada pela crise de abstinência, ele começa a parecer a solução para qualquer outra situação de estresse no seu dia a dia.  Se o cigarro estiver por perto, fumar para relaxar vira um hábito automático.  Então, deixe-o longe.  Ao ter que ir buscar o maço em outro lugar, você tem tempo para pensar se vale a pena mesmo acender aquele cigarro. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">3. Evite os momentos que estão associados ao cigarro</h2>
          <p>Sabe aquela hora do "cafezinho" que pede um cigarro logo depois?  Ou aquele momento em que você chega em casa e fica louco(a) querendo fumar depois de um dia estressante de trabalho?  Evite-os.  Não tome café.  Vá para um shopping, um cinema ou um lugar em que não pode fumar.  Deixe de lado aquela cerveja com os amigos, pelo menos nos momentos mais críticos em que estiver tentando largar o cigarro. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">4. Beba bastante água</h2>
          <p>Deixe uma garrafa d'água perto de você.  Toda vez que der vontade de fumar, tome uns goles.  Se preferir, beba um copo inteiro.  Todo mundo que está parando de fumar diz que melhora, alivia a vontade.  Ela vai voltar, e aí você toma mais água.  Quanto mais você conseguir beber, melhor.  Fica mais fácil enfrentar a abstinência da nicotina. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">5. Engane a vontade de fumar</h2>
          <p>Você provavelmente já ouviu falar que comer alguma coisa quando der vontade de fumar ajuda.  Isso é verdade, mas é preciso se atentar ao tipo de alimento que está sendo consumido.  Chocolate ou amendoim, por exemplo, vão te fazer ganhar peso.  Em vez disso, a dica é colocar água com sal em uma tigela e cortar palitinhos de cenoura, pepino, erva-doce ou o que for do seu agrado.  Quando bater a vontade de acender um cigarro, pegue um palitinho e coma. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">6. Pratique exercícios físicos</h2>
          <p>Quando você para de fumar, o fôlego melhora e o corpo fica mais disposto.  Aproveite esses benefícios e comece a fazer exercícios físicos.  Isso vai deixá-lo mais animado, jovial e forte.  É um incentivo a mais para deixar o cigarro para trás. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">7. Frequente lugares em que você não pode fumar e faça algo novo</h2>
          <p>Fumar é, antes de tudo, um hábito.  Se você faz todo dia a mesma coisa e sabe que naquele mesmo horário vai acender um cigarro, invente algo novo.  Procure um hobby, vá estudar algo que sempre quis ou faça um passeio por lugares em que fumar é proibido.  "Ache um jeito de quebrar essa rotina que você tinha quando era dependente de nicotina.  Se quer ficar livre dela, você tem que mudar não só os seus hábitos.  Tem que mudar a sua vida". </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">8. Comece a guardar o dinheiro que você gastaria com cigarro</h2>
          <p>Já parou para pensar quanto é capaz de economizar deixando de gastar com maços de cigarro?  Agora que você vai parar, separe esse dinheiro e gaste em algo para você.  Pode ser uma roupa nova, uma viagem, um jantar diferente ou o que mais você preferir. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">9. Preste atenção aos pontos positivos de parar de fumar</h2>
          <p>Fala a verdade: quantos degraus de uma escada você consegue subir sem ficar completamente esbaforido?  Essa insuficiência respiratória é uma das várias consequências negativas do cigarro que vão embora quando você parar de fumar.  Compare a quantidade de degraus que você é capaz de subir tranquilamente depois de um, dois ou seis meses que largou o cigarro.  Você vai ver como a sua forma física vai melhorar. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">10. Pense nos aspectos negativos de fumar</h2>
          <p>Pele com aspecto doentio, hálito ruim, cheiro de cigarro nas roupas, pouco fôlego para realizar as atividades do dia a dia.  Liste os prejuízos que fumar trouxe para o seu corpo e lembre-se disso enquanto estiver tentando se livrar do vício. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">11. Evite ficar no mesmo ambiente de pessoas fumando</h2>
          <p>Saia de perto de quem fuma.  Se você mora com alguém que também é dependente, peça para que essa pessoa fume apenas fora de casa, de preferência em um lugar afastado. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">12. Tenha coragem para largar o cigarro</h2>
          <p>Durante as crises de abstinência, espante os pensamentos que dizem que você é fraco(a) ou incapaz de parar de fumar.  Não acredite nisso.  Se enfrentar com coragem, qualquer pessoa pode se livrar da dependência. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">13. Jogue fora tudo que facilite a dependência</h2>
          <p>Jogue cinzeiros, isqueiros ou pacotes de cigarro velhos no lixo.  Faça uma limpeza geral dentro de casa e também no carro ou ambiente de trabalho.  Assim, ficará mais fácil evitar os estímulos para fumar. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">14. Busque ajuda médica e troque experiências com ex-fumantes</h2>
          <p>Você sabe bem que parar de fumar não é fácil.  Por isso, não há vergonha alguma em procurar ajuda.  Existem psicólogos e psiquiatras especializados em pacientes que estão no processo de largar o cigarro.  Muitos deles usam métodos como a psicoterapia ou até medicamentos que ajudam o organismo a se adaptar à ausência da nicotina.  Converse com ex-fumantes e pessoas que passaram pelo mesmo processo que você.  Compartilhe com eles as suas dificuldades e aproveite as dicas que os outros têm a oferecer. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">15. Quando a vontade de fumar vier, faça outra coisa</h2>
          <p>Sabe aquela vontade de fumar que parece maior que você?  Quando ela vier, tente se distrair.  Saia de casa, dê uma volta no quarteirão ou vá para um lugar em que não é permitido fumar.  Mas não acenda o cigarro de jeito nenhum.  Preste atenção e se policie: você verá que fica cada vez mais fácil. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">16. Comece a restringir os lugares em que você fuma</h2>
          <p>Estabeleça regras para si mesmo.  Se você costuma fumar quando chega em casa, proíba-se de acender o cigarro lá dentro.  Se o problema é na hora do trânsito, não fume quando estiver no carro.  Assim, você vai diminuindo os lugares em que permite fumar. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">17. Escove os dentes logo após as refeições</h2>
          <p>Uma das situações mais difíceis para quem está parando de fumar é depois do almoço.  Você toma aquele café e logo bate a vontade de acender um cigarro.  Nessas horas, a dica é escovar os dentes, se possível utilizando um enxaguante bucal, e ir fazer alguma coisa.  Em hipótese nenhuma volte para a mesa.  Esse é um momento do dia em que é muito importante você não recair.  Pense sempre: se eu recair agora, vou perder todo esse esforço que acabei de fazer. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">18. Seja paciente</h2>
          <p>O primeiro mês sem cigarro é o mais difícil.  A vontade de fumar parece insustentável.  Depois começa a melhorar bastante.  O processo é gradual: o desejo pela nicotina diminui de intensidade e dura cada vez menos tempo. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">19. Lembre que as crises de abstinência são passageiras</h2>
          <p>As crises de abstinência deixam a pessoa nervosa e irritada.  Para amenizar, é preciso reconhecer que o mau humor vem do cigarro e que é necessário enfrentar essa fase ruim para se livrar da dependência.  Em vez de projetar o nervosismo em cima das pessoas que convivem com você, faça atividades que sejam prazerosas, como ir ao cinema, assistir a uma série ou praticar exercícios físicos. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">20. Pare de fumar de uma vez só</h2>
          <p>Se você fez todas as dicas até aqui, agora é o momento de marcar uma data para parar de fumar.  Quanto mais você empurrar essa situação com a barriga, maior o risco de desanimar e ter uma recaída.  Escolha um dia e não coloque mais nenhum cigarro na boca. </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-2">21. Se não deu certo de primeira, não desista</h2>
          <p>E mesmo se, depois de tudo isso, você não conseguir parar de fumar, não tem problema.  A vergonha não está em tentar e não conseguir, mas sim em nem tentar.  Comece de novo e enfrente com determinação.  Agora que você já entendeu que tem que parar de fumar mesmo, se não for dessa vez, você vai conseguir na próxima. </p>
        </div>
      </div>
    </div>
  );
};

export default PostCigarro;