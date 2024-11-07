import { Page } from '@playwright/test';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async searchProductByName(): Promise<void> {
    await this.homeElements.getSearchButton().click();
    await this.homeElements.getSearchField().fill('Criciúma');
    await this.homeElements.getSearchField().press('Enter');
  }
}
