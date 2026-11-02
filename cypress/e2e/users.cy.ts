import { UsersPage } from '../pages/users.page';

describe('Jornada Principal - Gerenciamento de Usuários', () => {
  const usersPage = new UsersPage();

  beforeEach(() => {
    usersPage.visit('/');
  });

  it('USR-01: Validar o carregamento da tabela de usuários', () => {
    usersPage.validateTableLoaded();
  });

  it('USR-03: Localizar um usuário existente na tabela', () => {
    usersPage.validateTableLoaded();
    usersPage.searchUser('Alice');
    usersPage.validateUserPresent('Alice');
  });

  it('USR-04 [Negativo]: Validar o comportamento para um usuário inexistente', () => {
    usersPage.validateTableLoaded();
    usersPage.searchUser('UsuarioInexistenteXYZ999');
    usersPage.validateNoResults();
  });
});