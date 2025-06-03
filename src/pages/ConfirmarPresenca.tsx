// src/pages/ConfirmarPresenca.tsx
import React, { useEffect } from 'react';
// A Navegação é fornecida pelo Layout.tsx, então não é importada aqui.
import { Card, CardContent } from '../components/ui/card'; // Ajuste o caminho se necessário

const ConfirmarPresenca = () => {
  useEffect(() => {
    // Script para validação e envio do formulário
    const rsvpForm = document.getElementById("rsvp-form") as HTMLFormElement | null;
    const submitButton = document.getElementById("customSubmitButton") as HTMLButtonElement | null;
    const mensagemDiv = document.getElementById("mensagem");

    if (rsvpForm && submitButton && mensagemDiv) {
      const handleSubmit = (e: Event) => {
        e.preventDefault();
        let formIsValid = true;
        
        const allInputs = rsvpForm.querySelectorAll<HTMLInputElement>('.wsite-form-input');
        allInputs.forEach(input => input.classList.remove('input-error'));
        mensagemDiv.textContent = "";
        mensagemDiv.style.color = "#FFFFFF";

        const requiredFields = [
          { input: rsvpForm.querySelector<HTMLInputElement>('input[name="_u460484737397886308[first]"]'), name: "Primeiro Nome" },
          { input: rsvpForm.querySelector<HTMLInputElement>('input[name="_u460484737397886308[last]"]'), name: "Último Nome" },
          { input: rsvpForm.querySelector<HTMLInputElement>('input[name="_u586374190954560186"]'), name: "E-mail" },
          { input: rsvpForm.querySelector<HTMLInputElement>('input[name="_u712937222961165058"]'), name: "Código do convite" }
        ];

        for (const field of requiredFields) {
          if (!field.input?.value.trim()) {
            formIsValid = false;
            field.input?.classList.add('input-error');
          }
        }
        
        const emailField = rsvpForm.querySelector<HTMLInputElement>('input[name="_u586374190954560186"]');
        if (emailField?.value.trim() && !/^\S+@\S+\.\S+$/.test(emailField.value.trim())) {
          formIsValid = false;
          emailField.classList.add('input-error');
          if (mensagemDiv.textContent === "") {
            mensagemDiv.textContent = "Por favor, insira um e-mail válido.";
          }
        }

        if (!formIsValid) {
          if (mensagemDiv.textContent === "") {
            mensagemDiv.textContent = "Por favor, preencha todos os campos destacados.";
          }
          mensagemDiv.style.color = "#FFA1A1";
          return;
        }
        
        mensagemDiv.textContent = "Enviando...";
        
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKHdUQGCRgYbL8P2nTnhrPhuzG-wP_85_xWWUrEIMpyPdH5rUZPS3XPkdyerGMrLepow/exec";
        const formData = new FormData();
        
        if (requiredFields[0].input?.value && requiredFields[1].input?.value) {
            formData.append('nome', `${requiredFields[0].input.value.trim()} ${requiredFields[1].input.value.trim()}`);
        }
        if (requiredFields[2].input?.value) {
            formData.append('email', requiredFields[2].input.value.trim());
        }
        if (requiredFields[3].input?.value) {
            formData.append('presenca', requiredFields[3].input.value.trim());
        }

        fetch(SCRIPT_URL, {
          method: "POST",
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.result === "success") {
            mensagemDiv.textContent = "Obrigado! Sua resposta foi enviada com sucesso.";
            mensagemDiv.style.color = "#A1FFA1";
            rsvpForm.reset();
            allInputs.forEach(input => input.classList.remove('input-error'));
          } else {
            mensagemDiv.textContent = "Houve um erro ao processar sua resposta: " + (data.error || "Erro desconhecido.");
            mensagemDiv.style.color = "#FFA1A1";
          }
        })
        .catch(error => {
          mensagemDiv.textContent = "Houve um erro de comunicação ao enviar. Tente novamente.";
          mensagemDiv.style.color = "#FFA1A1";
        })
        .finally(() => {
          submitButton.disabled = false;
          submitButton.style.opacity = '1';
        });
      };

      submitButton.addEventListener("click", handleSubmit);

      return () => {
        submitButton.removeEventListener("click", handleSubmit);
      };
    }
  }, []);

  return (
    // Contêiner principal para o conteúdo da página ConfirmarPresenca.
    // As classes são similares ao Index.tsx para posicionamento e espaçamento.
    // Ajuste 'min-h-[calc(100vh-3rem)]' e 'pt-20 md:pt-24' conforme a altura da sua navegação e o posicionamento desejado.
    <div className="flex flex-col items-center justify-start text-center min-h-[calc(100vh-3rem)] px-4 pt-20 md:pt-24 pb-8">
      {/* Bloco de conteúdo principal da página, com animação de fade-in */}
      <div className="animate-fade-in w-full"> {/* Adicionado w-full para o container interno */}
        <div className="container mx-auto"> {/* Container para o conteúdo do formulário */}
          <div className="max-w-2xl mx-auto w-full"> {/* Limita a largura do formulário */}
            {/* Header da Página de Confirmação */}
            <div className="mb-8 sm:mb-12"> {/* text-center já está no pai */}
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
                  font-size: clamp(1.25rem, 4vw, 1.5rem);
                  font-weight: 300; 
                  letter-spacing: 0.05em;
                  margin-bottom: 25px;
                }

                #customFormContainer .wsite-form-label {
                  font-weight: 600;
                  margin-bottom: 8px; 
                  display: block;
                  font-size: clamp(0.875rem, 2.5vw, 1rem);
                  text-align: left; /* Alinhar labels à esquerda */
                }

                #customFormContainer .wsite-form-sublabel {
                  font-size: clamp(0.75rem, 2vw, 0.85rem);
                  margin-top: 3px;
                  display: block;
                  color: #A0AEC0 !important;
                  text-align: left; /* Alinhar sublabels à esquerda */
                }

                #customFormContainer .wsite-form-input,
                #customFormContainer .wsite-input {
                  background-color: rgba(255, 255, 255, 0.05) !important; 
                  color: #FFFFFF !important; 
                  border: 1px solid rgba(255, 255, 255, 0.3) !important; 
                  border-radius: 0.375rem; 
                  padding: 10px 12px;
                  margin-bottom: 5px; 
                  box-sizing: border-box; 
                  width: 100%; 
                  transition: border-color 0.3s ease;
                  font-size: clamp(0.875rem, 2.5vw, 1rem);
                }
                
                #customFormContainer .wsite-form-input:focus,
                #customFormContainer .wsite-input:focus {
                  border-color: rgba(255, 255, 255, 0.7) !important;
                  outline: none;
                  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
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
                  flex-wrap: wrap;
                  gap: 1rem; 
                }

                #customFormContainer .wsite-name-field-wrapper .wsite-form-input-container {
                  flex: 1 1 calc(50% - 0.5rem); 
                  min-width: 120px; 
                }
                
                @media screen and (max-width: 480px) {
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
                  padding: 10px 20px;
                  display: inline-block;
                  cursor: pointer;
                  border-radius: 0.375rem;
                  transition: background-color 0.2s ease-out, color 0.2s ease-out, border-color 0.2s ease-out;
                  font-family: inherit; 
                  line-height: normal; 
                }

                #customFormContainer .wsite-button .wsite-button-inner {
                  color: #FFFFFF !important;
                  font-weight: 600;
                  background: none !important;
                  font-size: clamp(0.9rem, 2.5vw, 1rem); 
                  transition: color 0.2s ease-out;
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
                  font-weight: 500; 
                  min-height: 24px; 
                  font-size: clamp(0.875rem, 2.5vw, 1rem);
                }
              `
            }} />

            {/* Card do Formulário */}
            <Card className="bg-black bg-opacity-70 border border-gray-700 backdrop-blur-md shadow-xl">
              <CardContent className="p-0">
                <div id="customFormContainer" className="p-6 sm:p-8">
                  <form id="rsvp-form" noValidate> 
                    <div className="wsite-form-container" style={{marginTop: '10px'}}>
                      <ul className="formlist" style={{listStyle: 'none', padding: 0, margin: 0}}>
                        <h2 className="wsite-content-title" style={{textAlign: 'center'}}>CONFIRME SUA PRESENÇA</h2>

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
    </div>
  );
};

export default ConfirmarPresenca;
