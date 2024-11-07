import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Pesquisa de noticia na eldorado', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.eldorado_home_QA')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.eldorado_home_QA')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Procurar noticia pelo nome', async () => {
    await homePage.searchProductByName();
  });
});
