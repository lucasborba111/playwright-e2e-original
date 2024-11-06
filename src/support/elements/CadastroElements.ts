import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoCadastrar(): Locator {
    return this.page.locator('text=Enviar mensagem');
  }

  getCampoNome(): Locator {
    return this.page.locator('input[name="nome"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getCampoNumero(): Locator {
    return this.page.locator('input[name="telefone"]');
  }

  getCampoAssunto(): Locator {
    return this.page.locator('input[name="assunto"]');
  }

  getCampoMensagem(): Locator {
    return this.page.locator('textarea[name="mensagem"]');
  }
}
