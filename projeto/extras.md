## Extra 1

Adicionar a lógica de categoria nas tarefas, com isso as funcionalidades e campos mudam para:

- Adicionar uma tarefa (id, titulo, descrição e categoria)
- Editar uma tarefa salva (titulo, descrição e categoria)
- Listar tarefas de uma categoria em especifico
- Categoria é um campo opcional

### Todas a validações anteriores +
- Categoria deve ter no mínimo 5 caracteres

## Extra 2

Adicionar a lógica de vencimento nas tarefas, com isso as funcionalidades e campos mudam para:

- Adicionar uma tarefa (id, titulo, descrição, categoria e vencimento)
- Editar uma tarefa salva (titulo, descrição, categoria e vencimento)
- Listar tarefas com um campo booleano (vencido) para mostrar se a tarefa está ou não vencida
- Listar tarefas vencidas
- Listar tarefas não vencidas

### Todas a validações anteriores +
- Campo vencimento não pode ser menor que a data de hoje (momento do cadastro/edição)

## Extra 3

Adicionar totalizadores (uma função que retorna as seguintes informações)

- Quantidade de tarefas na aplicação
- Quantidade de tarefas sem categoria
- Quantidade de tarefas por categoria
- Quantidade de tarefas sem vencimento
- Quantidade de tarefas vencidas
- Quantidade de tarefas no prazo

## Extra 4

Adicionar lógica `soft delete` com isso as funcionalidades e campos mudam para:

- Adicionar uma tarefa (id, titulo, descrição, categoria, vencimento, removido)
- Listar tarefas removidas
- Recuperar tarefa removida

### Todas a validações anteriores +
- Campo removido deve ser padrão `false`, ao remover uma tarefa esse campo é alterado, assim não sendo mais listado apenas na funcionalidade especifica de listagem de tarefas removidas


> Boa sorte!!! =D
