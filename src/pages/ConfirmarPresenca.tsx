// src/pages/ConfirmarPresenca.tsx
import React, { useEffect } from 'react';
// A Navegação agora vem do Layout.tsx, então não precisamos importar ou renderizar <Navigation /> aqui.
import { Card, CardContent } from '../components/ui/card'; // Removido CardHeader e CardTitle se não usados diretamente aqui após simplificação

const ConfirmarPresenca = () => {
  useEffect(() => {
    // Script para validação e envio do formulário
    const rsvpForm = document.getElementById("rsvp-form");
    const submitButton = document.getElementById("customSubmitButton");

    if (rsvpForm && submitButton) {
      // console.log("Formulário #rsvp-form e botão #customSubmitButton encontrados. Adicionando listener de CLICK ao botão.");

      const handleSubmit = (e: Event) => {
        // console.log("Evento CLICK no botão capturado.");
        e.preventDefault();
        // console.log("e.preventDefault() chamado no evento CLICK do botão.");

        const mensagemDiv = document.getElementById("mensagem");
        let formIsValid = true;
        
        const allInputs = rsvpForm.querySelectorAll('.wsite-form-input');
        allInputs.forEach(input => input.classList.remove('input-error'));
        if (mensagemDiv) {
          mensagemDiv.textContent = "";
          mensagemDiv.style.color = "#FFFFFF"; // Cor padrão da mensagem
        }

        const requiredFields = [
          { input: rsvpForm.querySelector('input[name="_u460484737397886308[first]"]') as HTMLInputElement, name: "Primeiro Nome" },
          { input: rsvpForm.querySelector('input[name="_u460484737397886308[last]"]') as HTMLInputElement, name: "Último Nome" },
          { input: rsvpForm.querySelector('input[name="_u586374190954560186"]') as HTMLInputElement, name: "E-mail" },
          { input: rsvpForm.querySelector('input[name="_u712937222961165058"]') as HTMLInputElement, name: "Código do convite" }
        ];

        for (const field of requiredFields) {
          if (!field.input?.value.trim()) {
            formIsValid = false;
            field.input?.classList.add('input-error');
            // console.log(`Campo obrigatório vazio: ${field.name}`);
          }
        }
        
        const emailField = rsvpForm.querySelector('input[name="_u586374190954560186"]') as HTMLInputElement;
        if (emailField?.value.trim() && !/^\S+@\S+\.\S+$/.test(emailField.value.trim())) {
          formIsValid = false;
          emailField.classList.add('input-error');
          // console.log("Formato de e-mail inválido.");
          if (mensagemDiv && mensagemDiv.textContent === "") {
            mensagemDiv.textContent = "Por favor, insira um e-mail válido.";
            // mensagemDiv.style.color = "#FFA1A1"; // Erro
          }
        }

        if (!formIsValid) {
          // console.log("Validação manual falhou.");
          if (mensagemDiv && mensagemDiv.textContent === "") {
            mensagemDiv.textContent = "Por favor, preencha todos os campos destacados.";
          }
          if (mensagemDiv) {
            mensagemDiv.style.color = "#FFA1A1"; // Cor de erro
          }
          return;
        }
        
        // console.log("Validação manual passou. Prosseguindo com fetch.");
        if (mensagemDiv) {
          mensagemDiv.textContent = "Enviando...";
          // mensagemDiv.style.color = "#FFFFFF"; // Resetado acima
        }
        
        (submitButton as HTMLButtonElement).disabled = true;
        (submitButton as HTMLElement).style.opacity = '0.7';

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKHdUQGCRgYbL8P2nTnhrPhuzG-wP_85_xWWUrEIMpyPdH5rUZPS3XPkdyerGMrLepow/exec";
        const formData = new FormData();
        
        formData.append('nome', `${requiredFields[0].input?.value.trim()} ${requiredFields[1].input?.value.trim()}`);
        formData.append('email', requiredFields[2].input?.value.trim());
        formData.append('presenca', requiredFields[3].input?.value.trim());

        fetch(SCRIPT_URL, {
          method: "POST",
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.result === "success") {
            if (mensagemDiv) {
              mensagemDiv.textContent = "Obrigado! Sua resposta foi enviada com sucesso.";
              mensagemDiv.style.color = "#A1FFA1"; // Cor de sucesso
            }
            (rsvpForm as HTMLFormElement).reset();
            allInputs.forEach(input => input.classList.remove('input-error'));
          } else {
            if (mensagemDiv) {
              mensagemDiv.textContent = "Houve um erro ao processar sua resposta: " + (data.error || "Erro desconhecido.");
              mensagemDiv.style.color = "#FFA1A1"; // Cor de erro
            }
            // console.error('Erro retornado pelo Google Script:', data);
          }
        })
        .catch(error => {
          // console.error('Erro no fetch ou ao processar JSON:', error);
          if (mensagemDiv) {
            mensagemDiv.textContent = "Houve um erro de comunicação ao enviar. Tente novamente.";
            mensagemDiv.style.color = "#FFA1A1"; // Cor de erro
          }
        })
        .finally(() => {
          (submitButton as HTMLButtonElement).disabled = false;
          (submitButton as HTMLElement).style.opacity = '1';
        });
      };

      submitButton.addEventListener("click", handleSubmit);

      return () => {
        submitButton.removeEventListener("click", handleSubmit);
      };
    } else {
      // if (!rsvpForm) console.error("ERRO: Formulário #rsvp-form NÃO encontrado!");
      // if (!submitButton) console.error("ERRO: Botão #customSubmitButton NÃO encontrado!");
    }
  }, []);

  return (
    // Este é o contêiner principal APENAS para o conteúdo desta página.
    // O fundo e a navegação virão do Layout.tsx.
    // As classes de flex e centralização alinham o conteúdo da página.
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8 md:py-12"> {/* Exemplo: 4rem para altura da nav */}
      <div className="container mx-auto"> {/* Container para o conteúdo do formulário */}
        <div className="max-w-2xl mx-auto"> {/* Limita a largura do formulário */}
          {/* Header da Página de Confirmação */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 tracking-wider">
              CONFIRMAÇÃO DE PRESENÇA
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 tracking-widest">
              FORMATURA DR. PABLO BERINI LEMGRUBER
            </p>
          </div>

          {/* Estilos CSS customizados para o formulário */}
          <style dangerouslySetInnerHTML={{
            __html: `
              #customFormContainer {
                background-color: transparent !important;
                max-width: 550px; 
                margin: auto; 
                font-family: 'Inter', 'Quicksand', sans-serif; 
              }

              #customFormContainer h2.wsite-content-title,
              #customFormContainer .wsite-form-label,
              #customFormContainer .wsite-form-sublabel {
                color: #FFFFFF !important; 
                text-shadow: 1px 1px 2px rgba(0,0,0,0.3); 
              }

              #customFormContainer h2.wsite-content-title {
                font-size: 22px; /* Ajustado */
                font-weight: 300; 
                letter-spacing: 0.05em;
                margin-bottom: 25px;
              }

              #customFormContainer .wsite-form-label {
                font-weight: 600;
                margin-bottom: 8px; 
                display: block;
              }

              #customFormContainer .wsite-form-sublabel {
                font-size: 0.85em;
                margin-top: 3px;
                display: block;
                color: #A0AEC0 !important;
              }

              #customFormContainer .wsite-form-input,
              #customFormContainer .wsite-input {
                background-color: rgba(255, 255, 255, 0.05) !important; 
                color: #FFFFFF !important; 
                border: 1px solid rgba(255, 255, 255, 0.3) !important; 
                border-radius: 0.375rem; 
                padding: 12px; 
                margin-bottom: 5px; 
                box-sizing: border-box; 
                width: 100%; 
                transition: border-color 0.3s ease;
              }
              
              #customFormContainer .wsite-form-input:focus,
              #customFormContainer .wsite-input:focus {
                border-color: rgba(255, 255, 255, 0.7) !important;
                outline: none;
              }

              #customFormContainer .wsite-form-input.input-error {
                border-color: #F56565 !important;
              }

              #customFormContainer .wsite-form-input::placeholder { 
                color: #A0AEC0 !important;
                opacity: 1; 
              }

              #customFormContainer .wsite-name-field-wrapper { 
                display: flex;
                gap: 4%; 
              }

              #customFormContainer .wsite-name-field-wrapper .wsite-form-input-container {
                flex: 1; 
                min-width: 0; 
              }

              @media screen and (max-width: 600px) {
                #customFormContainer .wsite-name-field-wrapper {
                  flex-direction: column; 
                  gap: 0; 
                }
                #customFormContainer .wsite-name-field-wrapper .wsite-form-input-container {
                  width: 100%; 
                  margin-bottom: 15px; 
                }
                #customFormContainer .wsite-name-field-wrapper .wsite-form-input-container:last-child {
                  margin-bottom: 0; 
                }
              }

              #customFormContainer .wsite-form-field {
                margin-bottom: 20px; 
              }

              #customFormContainer .wsite-button-container {
                text-align: center;
                margin-top: 25px;
                margin-bottom: 10px;
              }

              #customFormContainer .wsite-button {
                background-color: transparent !important;
                border: 2px solid #FFFFFF !important;
                padding: 12px 25px; 
                display: inline-block;
                cursor: pointer;
                border-radius: 0.375rem;
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
                font-family: inherit; 
                line-height: normal; 
              }

              #customFormContainer .wsite-button .wsite-button-inner {
                color: #FFFFFF !important;
                font-weight: 600;
                background: none !important;
                font-size: 16px; 
                transition: color 0.3s ease;
              }

              #customFormContainer .wsite-button:hover {
                background-color: #FFFFFF !important; 
                border-color: #FFFFFF !important; 
              }
              #customFormContainer .wsite-button:hover .wsite-button-inner {
                color: #1A202C !important; 
              }

              #mensagem {
                color: #FFFFFF;
                text-align: center;
                margin-top: 20px;
                font-weight: bold;
                min-height: 24px; /* Um pouco mais de altura para a mensagem */
              }
            `
          }} />

          {/* Card do Formulário */}
          <Card className="bg-black bg-opacity-75 border border-gray-700 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-0">
              <div id="customFormContainer" className="p-6 sm:p-8"> {/* Adicionado padding ao container do formulário */}
                <form id="rsvp-form" noValidate> 
                  <div className="wsite-form-container" style={{marginTop: '10px'}}>
                    <ul className="formlist" style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {/* O título do formulário está aqui, o CardHeader/CardTitle podem não ser necessários se este já serve */}
                      <h2 className="wsite-content-title" style={{textAlign: 'center'}}>CONFIRME SUA PRESENÇA</h2>

                      {/* Campos do formulário (Nome, E-mail, Código do convite) */}
                      <div className="wsite-form-field">
                        <label className="wsite-form-label">Nome<span className="form-not-required">*</span></label>
                        <div className="wsite-name-field-wrapper">
                          <div className="wsite-form-input-container">
                            <input id="input-custom-firstname" className="wsite-form-input wsite-input" placeholder="Primeiro" type="text" name="_u460484737397886308[first]" required />
                          </div>
                          <div className="wsite-form-input-container">
                            <input id="input-custom-lastname" className="wsite-form-input wsite-input" placeholder="Último" type="text" name="_u460484737397886308[last]" required />
                          </div>
                        </div>
                      </div>

                      <div className="wsite-form-field">
                        <label className="wsite-form-label" htmlFor="input-custom-email">E-mail <span className="form-not-required">*</span></label>
                        <div className="wsite-form-input-container">
                          <input id="input-custom-email" className="wsite-form-input wsite-input" type="email" name="_u586374190954560186" required />
                        </div>
                      </div>

                      <div className="wsite-form-field">
                        <label className="wsite-form-label" htmlFor="input-custom-invitecode">Código do convite <span className="form-not-required">*</span></label>
                        <div className="wsite-form-input-container">
                          <input id="input-custom-invitecode" className="wsite-form-input wsite-input" type="text" name="_u712937222961165058" required />
                        </div>
                      </div>
                    </ul>
                  </div>
                  
                  <div className="wsite-button-container">
                    <button type="submit" className="wsite-button" id="customSubmitButton">
                      <span className="wsite-button-inner">Enviar</span>
                    </button>
                  </div>
                </form>
                <div id="mensagem"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarPresenca;