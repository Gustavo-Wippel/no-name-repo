module.exports = {
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'refactor', 'test', 'docs', 'style']],
    'scope-empty': [2, 'never'],
  },

  prompter: async (inquirer) => {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Selecione o tipo de alteração que você está enviando',
        choices: [
          { name: 'feat: Nova funcionalidade', value: 'feat' },
          { name: 'fix: Correção de bug', value: 'fix' },
          { name: 'chore: Tarefas diversas', value: 'chore' },
          { name: 'refactor: Refatoração de código', value: 'refactor' },
          { name: 'test: Adição ou correção de testes', value: 'test' },
          { name: 'docs: Mudanças em documentação', value: 'docs' },
          { name: 'style: Estilização e formatação', value: 'style' },
        ],
      },
      {
        type: 'list',
        name: 'scope',
        message: 'Selecione o módulo relacionado à mudança',
        choices: [
          { name: 'usuarios: Usuários', value: 'usuarios' },
          { name: 'solicitacoes: Listagem de Solicitações', value: 'solicitacoes' },
          { name: 'relatorios: Relatórios', value: 'relatorios' },
          { name: 'configuracoes: Configurações', value: 'configuracoes' },
        ],
      },
      {
        type: 'input',
        name: 'subject',
        message: 'Escreva uma breve descrição do que foi alterado',
      },
      {
        type: 'list',
        name: 'team',
        message: 'Selecione o time responsável pela tarefa',
        choices: [
          { name: 'OF: Time OF', value: 'OF' },
          { name: 'PTF: Time PTF', value: 'PTF' },
          { name: 'BM: Time BM', value: 'BM' },
        ],
      },
      {
        type: 'input',
        name: 'task',
        message: 'Informe o número da tarefa (Ex: PTF-1234)',
        validate: (value) =>
          /^[A-Z]+-\d+$/.test(value)
            ? true
            : 'O número da tarefa deve estar no formato correto, exemplo: PTF-1234',
      },
    ]);

    return answers;
  },
};
