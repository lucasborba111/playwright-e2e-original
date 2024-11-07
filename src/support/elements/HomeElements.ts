import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator('[name="q"]').nth(0);
  }

  getSearchButton(): Locator {
    return this.page.locator('a[href="#search-header"]').nth(0);
  }
}
