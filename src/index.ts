import { sequence_id } from "./config";
import { browser } from "@crawlora/browser";

export default async function ({
  urls,
}: {
  urls: string;
}) {
  const formedData = urls.trim().split("\n").map(v => v.trim())

  for await (const url of formedData) {
    await browser(async ({ page, wait, output, debug }) => {
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        debug(`Navigate to ${url}`)

        await wait(2);

        const details = await page.evaluate(() => {
          const getText = (selector: string) => document.querySelector(selector)?.textContent?.trim() || 'N/A';

          const imageElement: HTMLImageElement[] = Array.from(document.querySelectorAll('.listing-page-image-carousel-component li.wt-mr-xs-1 img')) || [];
          const images = imageElement.map((element) => element.src).join(', ') || 'N/A'

          return {
            product_title: getText('h1') || 'N/A',
            product_rating: (document.querySelector('input[name="rating"]') as HTMLInputElement)?.value || 'N/A',
            sell_price: getText('div[data-selector="price-only"] p.wt-text-title-larger')?.replace('Price:', '')?.trim(),
            original_price: getText('div[data-selector="price-only"] .wt-text-strikethrough'),
            estimated_arrival: getText('[aria-describedby="fulfillment-differentiators-estimated-delivery-date-popover"]'),
            returns_exchanges: getText('[data-selector="fulfillment-differentiators-content"] div.wt-display-flex-xs.wt-align-items-center:last-child').includes('not accepted') ? 'Not Accepted' : 'Accepted',
            reviews: getText('.reviews__shop-info h2'),
            images,
          }
        })

        await output.create({
          sequence_id,
          sequence_output: { ...details, url }
        })

        await wait(2);
      } catch (error) {
        const e = error as Error
        debug(error)
        throw new Error(e.message);
      }
    })

  }
}