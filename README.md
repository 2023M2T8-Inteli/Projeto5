# Inteli - Instituto de Tecnologia e Liderança

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="./imagens/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Lumi

<p align="center"><a href= "https://www.inteli.edu.br/"><img src="./imagens/lumi.png" border="0"></a></p>

## Tech5

## Integrantes:

- <a href="https://www.linkedin.com/in/danielzular/">Daniel Zular</a>
- <a href="https://www.linkedin.com/in/marina-ladeira-867159269/">Marina Buzin Ladeira</a>
- <a href="https://www.linkedin.com/in/omatheusrsantos/">Matheus Ribeiro dos Santos</a>
- <a href="https://www.linkedin.com/in/mauricio-azevedo-neto/">Maurício de Azevedo Neto</a>
- <a href="https://www.linkedin.com/in/samuel-martins-lopes-nascimento-7a805526a/">Samuel Martins Lopes Nascimento</a>
- <a href="#">Theo Albero Tosto</a>
- <a href="https://www.linkedin.com/in/thomasreitzfeld/">Thomas Reitzfeld</a>

## 📝 Descrição

A Lumi é uma aplicação web que vem com o propósito de dinamizar a exibição dos relatórios sobre tensão roda-trilho em várias ferrovias brasileiras, emitidas pelo Laboratório de Infraestrutura em Energia do Instituto de Pesquisas Tecnológicas. A ferramenta contempla a exibição dos pontos críticos de uma viagem, além de poder comparar viagens distintas. Com isso, os clientes conseguem uma visualização dinâmica sobre o dados, sem que seja necesário ler vários relatórios extensos.

## 📁 Estrutura de pastas

|--> documentos<br>
&emsp;| --> Dados _(Aqui ficam as planilhas com os dados do cliente)_ <br>
&emsp;| --> Versões antigas _(Aqui ficam as versões anteriores do WAD da Equipe)_ <br>
&emsp;| T08*G05_V4.1.1_Web_application_document.docx \*(Esta é versão atual do WAD da equipe)*<br>
&emsp;| T08*G05_V4.1.1_Web_application_document.pdf *(Esta é versão atual do WAD da equipe)_<br>
|--> imagens _(Aqui ficam as imagens que usamos para ilustrar esse arquivo README)_<br>
|--> src<br>
&emsp;|--> Backend<br>
&emsp; &emsp;|--> database _(Aqui ficam os arquivos de banco de dados utilizado no projeto e sql para a criação do respectivo banco)_<br>
&emsp; &emsp;|--> routes _(Aqui ficam os arquivos javascript que serão utilizados pelo Express como rotas de consulta ao banco de dados)_<br>
&emsp; &emsp;|--> sql_functions _(Aqui ficam os arquivos javascript que se comunicam com o banco de dados)_<br>
&emsp; &emsp;|--> utils _(Aqui ficam arquivos javascript que contém funções que são utilizadas em várias partes do código)_<br>
&emsp;|--> Frontend<br>
&emsp; &emsp;|--> paginas _(Aqui ficam os arquivos HTML com a marcação do conteúdo de cada uma das páginas)_<br>
&emsp; &emsp;|--> public _(Aqui ficam os arquivos estáticos que serão utilizados pelo Express)\_<br>
&emsp;|app.js<br>
&emsp;|package-lock.json<br>
&emsp;|packaje.json<br>
| readme.md<br>
| LICENSE.txt

Dentre os arquivos presentes na raiz do projeto, definem-se:

- <b>readme.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>LICENSE.txt</b>: arquivo que contém a licença do projeto.

## 💻 Configuração para desenvolvimento

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1.  Baixar e instalar o node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2.  Clone o repositório em questão.
3.  No modo administrador, abra o "prompt de comando" ou o "terminal" e, após, abra a pasta "src/Servidor/backend" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm start
```

5. Agora você pode acessar a aplicação através do link http://localhost:3000/
6. O servidor está online.

## 🗃 Histórico de lançamentos

- 1.1.1 - 24/04/2023
  - Atualização do WAD com o entedimento do negócio
- 2.1.1 - 11/05/2023
  - Altera entedimento do negócio com base nos feedbacks dos artefatos
- 2.1.2 - 11/05/2023
  - Adiciona modelos conceitual e lógico do banco de dados
- 2.1.3 - 14/05/2023
  - Adiciona as primeiras rotas para acesso ao banco de dados (10 endpoints)
- 3.1.1 - 28/05/2023
  - Primeira versão do Front-End
  - Atualização do guia de estilos no WAD
- 3.2.1 - 30/05/2023
  - Segunda versão do Front-End
- 4.1.1 - 11/06/2023
  - Versão final do Front-End
  - Integração entre front e back para consulstar pontos críticos no mapa
  - Inclusão dos registros de testes de usabilidades no WAD
- 5.1.1 - 22/06/2023
  - Versão final do MVP
  - Páginas responsivas
  - Comparação de pontos críticos entre viagens distintas
  - Correções gramaticais e de formação no WAD

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2023M2T8-Inteli/Projeto5">Lumi</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023M2T8-Inteli/Projeto5">Inteli, Daniel Zular, Marina Buzin Ladeira, Matheus Ribeiro dos Santos, Maurício de Azevedo Neto, Samuel Martins Lopes Nascimento, Theo Albero Tost, Thomas Reitzfeld</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## 🎓 Referências

Aqui estão as referências usadas no projeto:

1. <https://creativecommons.org/share-your-work/>
