# Projeto de Login em React - DIO

Este é um projeto de uma tela de login em React, utilizando `react-hook-form` para o controle dos formulários e `yup` para validação dos dados. O projeto inclui validação de email e senha, desabilitação do botão "Entrar" quando os campos não são válidos, e a funcionalidade de limpar os campos após o login.

## Funcionalidades

- **Validação de formulário com `react-hook-form` e `yup`:**
  - O email é validado para garantir que seja um formato de email válido.
  - A senha deve conter no mínimo 6 caracteres.

- **Botão de login desabilitado:**
  - O botão "Entrar" permanece desabilitado enquanto os campos de email e senha estiverem inválidos.

- **Limpeza dos campos após o login:**
  - Após clicar no botão "Entrar", os campos de email e senha são limpos automaticamente.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [react-hook-form](https://react-hook-form.com/)
- [yup](https://github.com/jquense/yup)

## Alterações Recentes
- Bloqueio do botão "Entrar " quando os campos estão inválidos :
  - O botão "Entrar" agora fica desabilitado quando o e-mail ou senha estão incorretos ou vazios.

- Limpeza dos campos após clicar no botão "Entrar" :
  - Após o login, os campos de e-mail e senha são limpos automaticamente.

Contribuição
Sinta-se à vontade para enviar solicitações pull ou abrir problemas para sugerir melhorias ou relatar problemas.

