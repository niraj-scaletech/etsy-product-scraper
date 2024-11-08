# Etsy Product Scraper (By URL)

## Overview

The  **Etsy Product Scraper (By URL)** is a specialized tool that automates the collection of detailed product information from individual Etsy product pages. It efficiently extracts essential data, including product title, rating, current price, original price, and more, directly from the product detail page URL.


## **Extracted Data Fields**

| **Field**             | **Description**                                               |
|-----------------------|---------------------------------------------------------------|
| **url**               | URL of the Etsy product page.                                 |
| **product_title**     | Title of the product listed on Etsy.                          |
| **product_rating**    | Rating of the product based on customer reviews.              |
| **sell_price**        | Current selling price of the product.                         |
| **original_price**    | Original price of the product before discounts.               |
| **estimated_arrival** | Estimated arrival date or shipping time for the product.      |
| **returns_exchanges** | Product’s return and exchange policy.                         |
| **reviews**           | The number of customer reviews for the product.               |
| **images**            | URLs of images associated with the product.                   |


## Input Parameters

- **Product details page URLs**:  
    A list of Etsy product page URLs (one per line) to scrape detailed product information.

  **Example**:  
    - https://www.etsy.com/listing/1561347771/personalized-gym-bag-for-men-waxed?ref=listing_page_ad_row-6&pro=1&plkey=a480abdaa37666c497b614bc8df54ee4a95c8656%3A1561347771&listing_id=1561347771&listing_slug=personalized-gym-bag-for-men-waxed
    
    - https://www.etsy.com/in-en/listing/1813613475/christmas-ornament-kit-holiday-ornament?click_key=6e6bc4047abd0b03f90636f546dc876e1a8c06f1%3A1813613475&click_sum=5b913ad6&ref=gm_gift_idea_related_listings-14&pro=1&sts=1
    
    - https://www.etsy.com/in-en/listing/1525873562/personalized-planet-night-lamp-custom?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=lighting&ref=sr_gallery-1-1&pro=1&etp=1&sts=1&ret=1&content_source=366bd6f711f5a544181edc26246a1d0682a570c3%253A1525873562&search_preloaded_img=1&organic_search_click=1 

## How to Use

1. **Step 1**: Click `Try it!`
2. **Step 2**: Enter Product detailed page URLs (input ONE URL per line)
3. **Step 3**: Click the `Submit` button to start the scraping process.


## Sample Data Preview

| **url**                                           | **product_title**                 | **images**                            | **reviews**           | **sell_price** | **original_price**   | **product_rating** | **estimated_arrival** | **returns_exchanges** |
|---------------------------------------------------|-----------------------------------|---------------------------------------|-----------------------|----------------|----------------------|--------------------|-----------------------|-----------------------|
| https://www.etsy.com/listing/1561347771/...       | Personalized Gym Bag for Men...   | https://i.etsystatic.com/46240522/... | 34 shop reviews       | ₹ 14,308       | ₹ 17,885             | 4.75               | 13-18 Nov             | Accepted              |
| https://www.etsy.com/in-en/listing/1813613475/... | Christmas Ornament Kit, Holiday...| https://i.etsystatic.com/46240522/... | 11,850 shop reviews   | ₹ 1,920+       | ₹ 2,743+             | 4.8473             | N/A                   | Accepted              |
| https://www.etsy.com/in-en/listing/1525873562/... | Personalized Planet Night Lamp... | https://i.etsystatic.com/46240522/... | 793 reviews           | ₹ 2,455+       | ₹ 4,463+             | 4.7987             | N/A                   | Accepted              |


## Notes

Please contact our support team if you have any questions about this app or if you would like to have a customized version.

## Is Scraping Etsy.com Legal?

Web scraping is generally legal if you scrape publicly available non-personal data. What you do with the data is another question. Learn more about the legality of web scraping in this [article](#). If you're not sure, please seek professional legal advice.




