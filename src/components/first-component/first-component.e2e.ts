import { newE2EPage } from '@stencil/core/testing';

describe('first-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<first-component></first-component>');

    const element = await page.find('first-component');
    expect(element).toHaveClass('hydrated');
  });
});
