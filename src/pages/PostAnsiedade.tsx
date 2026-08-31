import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PostAnsiedade = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-md border border-gray-800 p-6 md:p-12 rounded-2xl shadow-2xl">
        <Link to="/#posts" className="inline-flex items-center text-orange-400 hover:text-white mb-8 transition-colors font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Voltar para a página inicial
        </Link>

        <h1 className="text-3xl md:text-5xl text-white font-bold mb-8 leading-tight">
          O que fazer durante uma crise de ansiedade
        </h1>

        <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            As síndromes ansiosas podem ser categorizadas em dois grupos: aqueles em que a ansiedade é constante e permanente e aqueles quadros em que há crises de ansiedade abruptas e, por diversas vezes, intensas. 
          </p>
          <p>
            A crise de pânico serve de exemplo, pois nela ocorre um pico de ansiedade em que há descarga do sistema nervoso autônomo, por isso que os sintomas muitas vezes são de taquicardia, suor frio, tremores, desconforto respiratório etc.  Junto dessas sensações que causam desconforto vem também uma série de pensamentos negativos que contribuem ainda mais para a crise. 
          </p>
          <p>
            Pois bem, um truque que alguns profissionais orientam que pode acalmar os pensamentos, focar em outro lugar e cessar os pensamentos negativos é a chamada técnica do 5, 4, 3, 2, 1 que consiste em olhar para o ambiente e seu entorno e nomear: 
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-orange-400">
            <li>5 coisas que podem ser vistas. Por exemplo: uma janela, um tapete, uma lâmpada etc. </li>
            <li>4 coisas que podem ser tocadas. Ex: a cadeira que você esteja sentado, uma pessoa que está ao lado, o chão em que se está pisando. </li>
            <li>3 coisas que podem ser ouvidas. Ex: uma música distante, o barulho do ar condicionado, alguém conversando. </li>
            <li>2 coisas que se pode sentir o cheiro. Ex: o perfume de alguém ou do ambiente, o cheiro de uma comida etc. </li>
            <li>1 coisa que se pode sentir o sabor. Algo que esteja perto que você pode imaginar o sabor, por exemplo. </li>
          </ul>
          <p className="pt-4">
            Essa técnica permite se distrair dos sintomas, trabalhando a concentração e o tempo presente.  Na crise de pânico ou quando se está muito ansioso é comum que se dê muita atenção ao próprio corpo e aos sintomas presentes.  Com esta técnica o foco muda do corpo para o ambiente e os sintomas tendem a diminuir. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostAnsiedade;