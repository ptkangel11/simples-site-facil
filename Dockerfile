# Usa uma imagem leve do Node
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (melhora o cache do Docker)
COPY package*.json ./

COPY . .

# Instala as dependências de produção
RUN npm run build

# Instala o 'serve', que é um servidor estático bem levinho
RUN npm install -g serve

# Copia o resto do projeto (incluindo a pasta buildada)
#COPY . .

# Expõe a porta que a aplicação usa (ex: 3000)
EXPOSE 3000

# O comando pra iniciar a aplicação (mude 'start' se o seu package.json usar outro)
CMD ["serve", "-s", "dist", "-l", "3000"]
