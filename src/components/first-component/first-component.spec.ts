import { newSpecPage } from '@stencil/core/testing';
import { FirstComponent } from './first-component';

describe('first-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FirstComponent],
      html: `<first-component></first-component>`,
    });
    expect(page.root).toEqualHtml(`
      <first-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </first-component>
    `);
  });
});
