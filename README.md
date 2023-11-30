# Projeto-frontEnd-utfpr

Relatório sobre o Website "Vida Terrestre"

Este relatório tem como objetivo analisar o website intitulado "Vida Terrestre", que aborda a importância e conservação da vida terrestre em nosso planeta. O site apresenta informações relevantes sobre ecossistemas terrestres, diversidade de espécies, conservação da biodiversidade e os Objetivos de Desenvolvimento Sustentável (ODS) relacionados ao tema.

Design e Estrutura:
O website tem uma estrutura limpa e organizada. Utiliza uma folha de estilo externa chamada "principal.css", que contribui para uma apresentação visual agradável. As cores e fontes utilizadas são consistentes e legíveis, contribuindo para uma boa experiência do usuário. O layout responsivo é eficaz, adaptando-se a diferentes tamanhos de tela.

Conteúdo:
O conteúdo do site é informativo e bem escrito. Ele destaca a diversidade de espécies na Terra e a importância de cada ser vivo para os ecossistemas. Também enfatiza a necessidade de conservação da vida terrestre, destacando as ameaças, como a destruição de florestas, poluição e mudanças climáticas. O apelo à ação, encorajando os visitantes a explorar recursos de organizações de conservação da natureza e participar de iniciativas de preservação, é uma mensagem importante.

Elementos Multimídia:
O website inclui imagens relevantes, como a representação do ODS 15 - Vida Terrestre, que ajuda a ilustrar visualmente os conceitos discutidos no conteúdo.

Navegação:
A navegação pelo site é intuitiva, com um menu de cabeçalho contendo um link para um formulário e uma seção "ODS". No entanto, o menu de navegação poderia ser expandido para incluir links adicionais para informações específicas, como recursos de conservação, pesquisas relacionadas e notícias recentes.


Redes Sociais:
O site inclui links para redes sociais, como Instagram, Facebook, LinkedIn e Twitter, permitindo que os visitantes se conectem com o Movimento ODS SC.
Rodapé:
O rodapé do site contém o aviso de direitos autorais e ícones das redes sociais mencionadas anteriormente. Isso fornece informações legais necessárias e facilita o acesso às redes sociais.


Página formulário:

Design e Estrutura:
O website possui uma estrutura básica e funcional. Ele utiliza um arquivo de estilo externo chamado "style.css" para melhorar a apresentação visual. As cores e fontes são simples e legíveis, garantindo uma boa experiência do usuário.
Conteúdo:
A página de contato é direta e fornece instruções claras para os visitantes que desejam entrar em contato com o projeto. O conteúdo é conciso e descreve o objetivo de entrar em contato, que é preencher um formulário.

Formulário de Contato:
O formulário de contato é bem estruturado, com campos para nome, telefone, email e mensagem. Cada campo tem um rótulo claro e é marcado como obrigatório, o que é importante para a usabilidade.

Navegação:
A navegação é simples e direta, com um menu de navegação contendo links para a página inicial e o formulário.

Rodapé:
O rodapé do site contém o aviso de direitos autorais, indicando que os direitos são reservados até 2023. Isso fornece informações legais necessárias.




Sistema de Cadastros - Código JavaScript
Página formulário:
Descrição Geral:
O código implementa um sistema de cadastros, onde os usuários podem inserir informações como nome, e-mail e telefone. Os cadastros são armazenados localmente usando o localStorage. Além disso, há funcionalidades para visualizar, excluir e pesquisar cadastros.

Cadastro:

A função cadastrar é responsável por obter os valores dos campos de input, validar os dados, criar um objeto de cadastro e adicioná-lo à lista de cadastros. O cadastro inclui um nome, e-mail, telefone e data de criação.

validar Email
Função validarEmail(), é responsável por reconhecer apenas um email válido para ser cadastrado no formulário.

Verificar email repetido
A função verificarEmailRepetido(), é responsável por verificar se o email posto no cadastro já foi cadastrado anteriormente.

Limpar Campos:

A função limpaCampos(), é utilizada para limpar os campos de input do formulário após a realização de um cadastro.

LocalStorage:

A função addCadastro(), adiciona um cadastro à lista e atualiza o localStorage.
A função deleteCadastro(), exclui um cadastro da lista e do localStorage.
A função limparLocalStorage(), permite limpar toda a lista de cadastros e o localStorage.

Renderização:


A função renderCadastroList é responsável por exibir os cadastros na página HTML. Utiliza a lista de cadastros para criar elementos de lista (<li>) e botões de exclusão.

Inicialização:
A função getCadastroList() é chamada para obter a lista de cadastros armazenada no localStorage durante o carregamento da página.
renderCadastroList é chamada para exibir os cadastros iniciais na página.



Pesquisa de Cadastros:

A função pesquisarCadastro() realiza uma pesquisa na lista de cadastros com base no nome. Ela exibe os resultados na página e fornece feedback sobre o número de cadastros encontrados.

Conclusão:
O código fornece um sistema funcional para gerenciamento de cadastros com operações básicas. Pode ser expandido e melhorado conforme necessário, dependendo dos requisitos específicos do projeto.
