
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ConfirmarPresenca = () => {
  useEffect(() => {
    // Script para validação e envio do formulário
    const rsvpForm = document.getElementById("rsvp-form");
    const submitButton = document.getElementById("customSubmitButton");

    if (rsvpForm && submitButton) {
      console.log("Formulário #rsvp-form e botão #customSubmitButton encontrados. Adicionando listener de CLICK ao botão.");

      const handleSubmit = (e: Event) => {
        console.log("Evento CLICK no botão capturado.");
        e.preventDefault();
        console.log("e.preventDefault() chamado no evento CLICK do botão.");

        const mensagemDiv = document.getElementById("mensagem");
        let formIsValid = true;
        
        // Limpar estilos de erro/mensagens anteriores
        const allInputs = rsvpForm.querySelectorAll('.wsite-form-input');
        allInputs.forEach(input => input.classList.remove('input-error'));
        if (mensagemDiv) {
          mensagemDiv.textContent = "";
          mensagemDiv.style.color = "#FFFFFF";
        }

        // Validação Manual
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
            console.log(`Campo obrigatório vazio: ${field.name}`);
          }
        }
        
        const emailField = rsvpForm.querySelector('input[name="_u586374190954560186"]') as HTMLInputElement;
        if (emailField?.value.trim() && !/^\S+@\S+\.\S+$/.test(emailField.value.trim())) {
          formIsValid = false;
          emailField.classList.add('input-error');
          console.log("Formato de e-mail inválido.");
          if (mensagemDiv && mensagemDiv.textContent === "") {
            mensagemDiv.textContent = "Por favor, insira um e-mail válido.";
            mensagemDiv.style.color = "#FFA1A1";
          }
        }

        if (!formIsValid) {
          console.log("Validação manual falhou.");
          if (mensagemDiv && mensagemDiv.textContent === "") {
            mensagemDiv.textContent = "Por favor, preencha todos os campos destacados.";
          }
          if (mensagemDiv) {
            mensagemDiv.style.color = "#FFA1A1";
          }
          return;
        }
        
        console.log("Validação manual passou. Prosseguindo com fetch.");
        if (mensagemDiv) {
          mensagemDiv.textContent = "Enviando...";
          mensagemDiv.style.color = "#FFFFFF";
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
              mensagemDiv.style.color = "#A1FFA1";
            }
            (rsvpForm as HTMLFormElement).reset();
            allInputs.forEach(input => input.classList.remove('input-error'));
          } else {
            if (mensagemDiv) {
              mensagemDiv.textContent = "Houve um erro ao processar sua resposta: " + (data.error || "Erro desconhecido.");
              mensagemDiv.style.color = "#FFA1A1";
            }
            console.error('Erro retornado pelo Google Script:', data);
          }
        })
        .catch(error => {
          console.error('Erro no fetch ou ao processar JSON:', error);
          if (mensagemDiv) {
            mensagemDiv.textContent = "Houve um erro de comunicação ao enviar. Tente novamente.";
            mensagemDiv.style.color = "#FFA1A1";
          }
        })
        .finally(() => {
          (submitButton as HTMLButtonElement).disabled = false;
          (submitButton as HTMLElement).style.opacity = '1';
        });
      };

      submitButton.addEventListener("click", handleSubmit);

      // Cleanup
      return () => {
        submitButton.removeEventListener("click", handleSubmit);
      };
    } else {
      if (!rsvpForm) console.error("ERRO: Formulário #rsvp-form NÃO encontrado!");
      if (!submitButton) console.error("ERRO: Botão #customSubmitButton NÃO encontrado!");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black font-inter relative">
      {/* Background with same image but darker overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/75838767-2b1b-4c4a-a8d4-3686ad0af0cb.png")',
          backgroundPosition: 'left center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-light text-white mb-4 tracking-wider">
                CONFIRMAÇÃO DE PRESENÇA
              </h1>
              <p className="text-xl text-gray-300 tracking-widest">
                FORMATURA DR. PABLO BERINI LEMGRUBER
              </p>
            </div>

            {/* Custom Form Styles */}
            <style dangerouslySetInnerHTML={{
              __html: `
                #customFormContainer {
                  background-color: transparent !important;
                  padding: 20px;
                  max-width: 550px; 
                  margin: auto; 
                  font-family: 'Quicksand', sans-serif; 
                }

                #customFormContainer h2.wsite-content-title,
                #customFormContainer .wsite-form-label,
                #customFormContainer .wsite-form-sublabel {
                  color: #FFFFFF !important; 
                  text-shadow: 1px 1px 2px rgba(0,0,0,0.3); 
                }

                #customFormContainer h2.wsite-content-title {
                  font-size: 28px; 
                  margin-bottom: 25px;
                }

                #customFormContainer .wsite-form-label {
                  font-weight: bold;
                  margin-bottom: 8px; 
                  display: block;
                }

                #customFormContainer .wsite-form-sublabel {
                  font-size: 0.85em;
                  margin-top: 3px;
                  display: block;
                }

                #customFormContainer .wsite-form-input,
                #customFormContainer .wsite-input {
                  background-color: rgba(255, 255, 255, 0.1) !important; 
                  color: #FFFFFF !important; 
                  border: 1px solid #FFFFFF !important; 
                  border-radius: 4px; 
                  padding: 12px; 
                  margin-bottom: 5px; 
                  box-sizing: border-box; 
                  width: 100%; 
                }
                
                #customFormContainer .wsite-form-input.input-error {
                  border-color: #FFA1A1 !important; 
                }

                #customFormContainer .wsite-form-input::placeholder { 
                  color: #DDDDDD !important;
                  opacity: 1; 
                }

                #customFormContainer .wsite-form-input:-ms-input-placeholder { 
                  color: #DDDDDD !important;
                }

                #customFormContainer .wsite-form-input::-ms-input-placeholder { 
                  color: #DDDDDD !important;
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
                  border-radius: 5px;
                  transition: background-color 0.3s ease, color 0.3s ease;
                  font-family: inherit; 
                  line-height: normal; 
                }

                #customFormContainer .wsite-button .wsite-button-inner {
                  color: #FFFFFF !important;
                  font-weight: bold;
                  background: none !important;
                  font-size: 16px; 
                }

                #customFormContainer .wsite-button:hover {
                  background-color: rgba(255, 255, 255, 0.9) !important;
                }
                #customFormContainer .wsite-button:hover .wsite-button-inner {
                  color: #333333 !important; 
                }

                #mensagem {
                  color: #FFFFFF;
                  text-align: center;
                  margin-top: 20px;
                  font-weight: bold;
                  min-height: 20px; 
                }
              `
            }} />

            {/* Form Card */}
            <Card className="bg-black bg-opacity-60 border-gray-600 backdrop-blur-sm">
              <CardContent className="p-0">
                <div id="customFormContainer">
                  <form id="rsvp-form" noValidate> 
                    <div className="wsite-form-container" style={{marginTop: '10px'}}>
                      <ul className="formlist" style={{listStyle: 'none', padding: 0, margin: 0}}>
                        <h2 className="wsite-content-title" style={{textAlign: 'center'}}>CONFIRMAÇÃO DE PRESENÇA</h2>

                        <div className="wsite-form-field">
                          <label className="wsite-form-label">Nome<span className="form-not-required">*</span></label>
                          <div className="wsite-name-field-wrapper">
                            <div className="wsite-form-input-container">
                              <input 
                                id="input-custom-firstname" 
                                className="wsite-form-input wsite-input" 
                                placeholder="Primeiro" 
                                type="text" 
                                name="_u460484737397886308[first]" 
                                required 
                              />
                            </div>
                            <div className="wsite-form-input-container">
                              <input 
                                id="input-custom-lastname" 
                                className="wsite-form-input wsite-input" 
                                placeholder="Último" 
                                type="text" 
                                name="_u460484737397886308[last]" 
                                required 
                              />
                            </div>
                          </div>
                        </div>

                        <div className="wsite-form-field">
                          <label className="wsite-form-label" htmlFor="input-custom-email">E-mail <span className="form-not-required">*</span></label>
                          <div className="wsite-form-input-container">
                            <input 
                              id="input-custom-email" 
                              className="wsite-form-input wsite-input" 
                              type="email" 
                              name="_u586374190954560186" 
                              required 
                            />
                          </div>
                        </div>

                        <div className="wsite-form-field">
                          <label className="wsite-form-label" htmlFor="input-custom-invitecode">Código do convite <span className="form-not-required">*</span></label>
                          <div className="wsite-form-input-container">
                            <input 
                              id="input-custom-invitecode" 
                              className="wsite-form-input wsite-input" 
                              type="text" 
                              name="_u712937222961165058" 
                              required 
                            />
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
