import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CadastroElements from '../elements/CadastroElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly cadastroElements: CadastroElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroElements = new CadastroElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.cadastroElements.getCampoNome().fill(faker.person.firstName());
    await this.cadastroElements.getCampoNumero().fill(faker.phone.number());
    await this.cadastroElements
      .getCampoEmail()
      .fill('oglspdlwvqxchhbdse@nbmbb.com');
    await this.cadastroElements
      .getCampoAssunto()
      .fill('isto é um teste com playwright');
    await this.cadastroElements
      .getCampoMensagem()
      .fill('teste automatizado 123412341234');
    await this.cadastroElements.getBotaoCadastrar().click();
  }

  async preencherFormularioFaltandoCampos(): Promise<void> {
    await this.cadastroElements.getCampoNome().fill(faker.person.firstName());
    await this.cadastroElements.getCampoEmail().fill('a@b.com.br');
    await this.cadastroElements.getCampoNumero().fill('10');
    await this.cadastroElements.getBotaoCadastrar().click();
  }

  async validarCadastro(): Promise<void> {
    await expect(this.cadastroElements.getMessageOK()).toBeVisible();
  }

  async invalidarCadastro(): Promise<void> {
    await expect(this.cadastroElements.getMessageError()).toBeVisible();
  }
}
