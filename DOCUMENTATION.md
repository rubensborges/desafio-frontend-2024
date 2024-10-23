Documentação Pokedex – Desafio Inovamobil 2024 

 

O desenvolvimento da aplicação iniciou-se na sexta-feira (18/10/2024) logo após o recebimento do repositório do desafio no Github. Foram utilizadas como tecnologias para codificação do projeto: Angular 18, Typescript, HTML, SCSS e Angular Material. 

O projeto começou com a implementação do design e layout da Pokedex utilizando HTML e SCSS. Para as requisições RESTful API, foi criado uma camada de services, contendo separadamente as lógicas de busca em diferentes serviços, referente a cada api envolvida no projeto. Uma camada responsável pela busca das cidades utilizando a OpenWeatherAPI, que ao receber o nome de uma cidade como endpoint da url, realiza a busca das informações meteorológicas dela. Uma camada responsável por fazer a busca de um Pokemon, utilizando a api PokeAPI-Type e passando o tipo do Pokemon de acordo com a temperatura da cidade buscada anteriormente. Por fim, uma camada para fazer a busca do sprite do pokemon encontrado, de acordo com o seu nome e o-passando como endpoint para a PokeAPI-Pokemon. 

Para renderização das informações, foi criado um componente chamado pokemon-card que concentra toda a lógica de tratamento dos dados recebidos pelas APIs. A classe do componente conta com os seguintes métodos: 

GetWeatherByCityName – Recebe uma cidade como parâmetro e passa esse valor recebido para o método getWeather do WeatherService. Caso seja uma cidade válida, converte a temperatura atual de Kelvin para Celsius e atribui o valor a uma variável. Atribui um valor booleano a uma variável caso esteja ou não chovendo. Passa o valor da temperatura para os métodos determinePokemonByTemp e determineBGByPokemontype e realiza a chamada do método fetchPokemon. Por fim, executa uma função de erro caso a requisição falhe. 

 

DeterminePokemonByTemp – Recebe um valor como parâmetro, que deve ser uma string contendo a temperatura da cidade e realiza uma série de condições para retornar um tipo específico de Pokemon de acordo com o valor recebido. 

 

DetermineBGByPokemontype – Recebe um valor como parâmetro, que deve ser o tipo do pokemon buscado e faz uma série de condições para atribuir um valor hexadecimal de cor para uma variável que é utilizada no css como cor de fundo do card. 

 

FetchPokemon – Ao ser chamada, realiza a busca do pokemon passando como parâmetro para o método getPokemon do PokemonService, o tipo do pokemon a ser selecionado. Cria um algoritmo de aleatoriedade para realizar resultados diferentes a cada nova busca. Com o nome do pokemon salvo após a primeira busca, realiza uma nova requisição na api passando o nome como parâmetro para o método getImageByName, e atribui os valores a uma variável de imagem e outra de id para serem renderizadas no html de acordo com o resultado encontrado. 

 

Para tratamento dos erros, foi criado um componente de nome modal. Este componente é renderizado em casos em que o nome de uma cidade foi digitado incorretamente ou não existe. Conta com uma mensagem explicando para o usuário o que ocasionou o erro. 

Para a transferência dos valores digitados no input do arquivo app.component.html, que é o input responsável por registrar a cidade digitada pelo usuário, para o component de pokemon-card, foi criada uma camada shared contendo o método setCity. O método é chamado na classe do componente app.component.ts e recebe o valor digitado pelo método onSubmit. Após isso, o valor fica salvo na propriedade cityName e é utilizado no método ngOnInit, após ser verificado que existe um valor válido, passando-o para o método getWeatherByCityName sempre que o componente é inicializado.  