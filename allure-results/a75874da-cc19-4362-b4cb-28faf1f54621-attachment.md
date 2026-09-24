# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot.spec.ts >> Taking screenshot
- Location: tests/screenshot.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "National Geographic"
Received: "Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html lang="en-IN" class="useInterFont en-fonts-loaded">…</html>
       - unexpected value "Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com"

```

```yaml
- img "Image"
- img "Image"
- link "Image Image":
  - /url: /flights-travel-uhp-at-store?marketplace=FKT
  - img "Image"
  - img "Image"
- img
- text: Location not set Select delivery location
- img
- banner:
  - button "Search for Products, Brands and More":
    - img "Search Icon"
  - textbox "Search for Products, Brands and More"
  - link "Login":
    - /url: /login?ret=/
    - img "Login"
    - text: Login
  - img "Chevron"
  - link "Login":
    - /url: /login?ret=/
  - link "More":
    - /url: "#"
  - img "Chevron"
  - link "Cart Cart":
    - /url: /viewcart?marketplace=FLIPKART
    - img "Cart"
    - text: Cart
- link "For You":
  - /url: https://www.flipkart.com/
  - img
  - heading "For You" [level=1]
- link "Fashion":
  - /url: /ss-26-base-inline-at-store
  - img
  - text: Fashion
- link "Mobiles":
  - /url: /mobile-phones-store
  - img
  - text: Mobiles
- link "Electronics":
  - /url: /new-elec-clp-march-at-store
  - img
  - text: Electronics
- link "Beauty":
  - /url: /bpc-bau-new-inline-at-store
  - img
  - text: Beauty
- link "Home":
  - /url: /home-kitchen-25-at-store
  - img
  - text: Home
- link "Appliances":
  - /url: /bbd26-at-store
  - img
  - text: Appliances
- link "Toys, baby..":
  - /url: /toysbc-new26-inline-at-store
  - img
  - text: Toys, baby..
- link "Food & Health":
  - /url: /fnhc-2025-new-at-store
  - img
  - text: Food & Health
- link "Auto Accessories":
  - /url: /aa-2025-new-at-store
  - img
  - text: Auto Accessories
- link "Sports & Fitness":
  - /url: /sf-inline-2025-at-store
  - img
  - text: Sports & Fitness
- link "Furniture":
  - /url: /india-ka-furniture-studio-inlines-at-store
  - img
  - text: Furniture
- link "Books":
  - /url: /books-at-store
  - img
  - text: Books
- link "2 Wheelers":
  - /url: /twowheelers-at-store
  - img
  - text: 2 Wheelers
- link "Image":
  - /url: /early-bird-deals-store?param=087&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=437027P6OV4V_IAD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&offer=nb%3Amp%3A08axdita22&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=MIIR68LFBAPP_IAD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /mivi-one-5g/p/itm596121720eed0?pid=MOBHR3ZPGHBTGAUG&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1GBDKQEGHU5X_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /boltt-evo-sky-blue-64-gb/p/itmf046d663a1fd7?pid=MOBHPP59WKSV4FYG&marketplace=FLIPKART&lid=LSTMOBHPP59WKSV4FYGYPMLV6&pageUID=1790156714591&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=J5BKWZNSBR31_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/~cs-eqj8mq0wb8/pr?sid=g9b&collection-tab-name=beardo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=B8175KPFD0QL_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /audio-video/headset/earphones/pr?sid=0pm%2Cfcn%2C821&p%5B%5D=facets.price_range.from%3D5999&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=KKVISJB82A2T_IAD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /vivo-t4-lite-5g-prism-blue-2026-4gb-128gb/p/itm49fb53d099f3c?pid=MOBHNCRKRGZ4MJDK&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=4S0C9KU72YJZ_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /televisions/~cs-zdgsav4sms/pr?sid=ckf%2Cczl&collection-tab-name=realmeTechLife+Television&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1DK27S2SZY0D_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /0pm/~cs-0j4urze7ct/pr?sid=0pm&collection-tab-name=soundbars&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TIPP5HQ06RNS_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /clothing-and-accessories/topwear/~cs-tj1hs5ycq5/pr?sid=clo%2Cash&p%5B%5D=facets.brand%255B%255D%3DWROGN&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=142&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=6E4E6H1R4F49_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /mens-footwear/pr?sid=osp%2Ccil&p%5B%5D=facets.brand%255B%255D%3DPUMA&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MKFGRXQ81C8E_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/hair-care-and-accessory/hair-care/pr?sid=g9b%2Clcf%2Cqqm&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DPilgrim&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=V2SF4U96RRL5_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/fragrances/perfume/pr?sid=g9b%2C0yh%2Cjhz&p%5B%5D=facets.brand%255B%255D%3DBELLAVITA&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=PYLBFPHN0DAW_AD&BU=Mixed
  - img "Image"
- img "Image"
- text: Popular picks
- link "Image Top Sellers Top Rated":
  - /url: /all/~cs-5091d3c60f3b035f66e275af0f168278/pr?sid=clo%2Cqfl%2Cwp7%2Czpk&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJWRVNINDgzR0JVRlNHRU5OIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Top Sellers Top Rated
- link "Image Widest Range Top Rated":
  - /url: /all/~cs-71b4805644da688ed1e32d6c7dba171c/pr?sid=clo%2Cqfl%2Cq5u%2Cla2&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJQQU5IRlhKWUdTVFVKUUU3IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Widest Range Top Rated
- link "Image Top Sellers Special offer":
  - /url: /all/~cs-011c40f38fd2473f6253c4c52f2cbbe2/pr?sid=tng%2C56a%2Cfq8%2Cgl8&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUmVtb3RlIENvbnRyb2wgVG95IFZlaGljbGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiUkNUSEpQWFE3NFJGS0ZHNCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&BU=Mixed
  - img "Image"
  - text: Top Sellers Special offer
- link "Image Top Picks Top Rated":
  - /url: /all/~cs-06b9e529d446e670f6a502dc973a1ef3/pr?sid=clo%2C8on%2Czpd%2C9og&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTQVJIRzRKRlZFUUpLUldSIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Top Picks Top Rated
- img "Image"
- text: In demand
- link "Image Big Savings Special offer":
  - /url: /all/~cs-613f0fb90f5ef5d8b5f340a7fc4ae6c4/pr?sid=mcr%2C73x%2Cydh&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ29pbnMgJiBCYXJzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQ09ORUFSR1QzS0RaWkcyUCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&BU=Mixed
  - img "Image"
  - text: Big Savings Special offer
- link "Image Decorate your home From ₹49":
  - /url: /home-decor/wall-decor-items/pr?sid=arb%2Ca77&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.promo%255B%255D%3Dvl%253A03c02ccf27&droppedD2%5B%5D=8b340172-9493-49d3-aed0-97666b6b718e%2C5346df03-cbf0-11ee-bf57-02010a413f46&pageUID=1757410467259&sort=price_asc&param=9641&hpid=-BpLt43tUHWQoK7PUXufVap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTQ5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiV0RDSDM1MllCRU5XN1hUSCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhbGwgRGVjb3IiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
  - img "Image"
  - text: Decorate your home From ₹49
- link "Image Cello, Milton & more From ₹99":
  - /url: /kitchen-cookware-serveware/water-bottles-flasks/pr?sid=upp%2C3t7&marketplace=FLIPKART&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&hpid=waYMRWTFVix796pRh7tpx6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQk9UR0ZWVDlQREtNUUpURiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGVyIEJvdHRsZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
  - img "Image"
  - text: Cello, Milton & more From ₹99
- link "Image Grab or Gone Min 50% Off":
  - /url: /kitchen-cookware-serveware/cookware/pressure-cookers/pr?sid=upp%2Ctnx%2Cgsl&marketplace=FLIPKART&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&hpid=dC9e0r-R6jB8-ZsmLeHoXKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBSQ0ZHRlpUWkZHQUZTVUgiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcmVzc3VyZSBDb29rZXJzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Grab or Gone Min 50% Off
- link "Image":
  - /url: /big-billion-days-store?param=09877676&BU=Mixed
  - img "Image"
- text: Brands in Spotlight
- link "Image":
  - /url: /clothing-and-accessories/topwear/~cs-tj1hs5ycq5/pr?sid=clo%2Cash&p%5B%5D=facets.brand%255B%255D%3DWROGN&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=141&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=P13AAAYF41FN_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/~cs-gpsqt1zlz4/pr?sid=g9b&collection-tab-name=colgate+visible+white&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WBTB7VBWIAT6_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /reh/plk/~cs-x610bsx500/pr?sid=reh%2Cplk&collection-tab-name=Arisrocart&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=30AORQ0J3VJX_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /wearable-smart-devices/smart-watches/~cs-kvkzd0p1jx/pr?sid=ajy%2Cbuh&collection-tab-name=BRILLIA&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NYHKX6KV29LL_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /triggr-kraken-x4-13mm-drivers-40ms-latency-enc-60h-battery-rubber-finish-v5-4-bluetooth-gaming/p/itm11fd34f2ddfb6?pid=ACCHEYBVMHMUZCTC&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HXA7CTOVV6HB_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /audio-video/headset/headphones/wireless-headphones/~cs-05as29k6fs/pr?sid=0pm%2Cfcn%2Cgc3%2Cka8&collection-tab-name=Wireless+Headphones&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=I65QOBTO2KR0_AD&BU=Mixed
  - img "Image"
- img "Image"
- text: In demand
- link "Image Deal of the Day From ₹99":
  - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.price_range.from%3D99&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DShocknshop&p%5B%5D=facets.brand%255B%255D%3DCurren&p%5B%5D=facets.brand%255B%255D%3DWristy&p%5B%5D=facets.brand%255B%255D%3DFOGG&p%5B%5D=facets.brand%255B%255D%3DCHARLIEKEEN&p%5B%5D=facets.brand%255B%255D%3DLOUIS%2BDEVIN&p%5B%5D=facets.brand%255B%255D%3Dluxurit&p%5B%5D=facets.brand%255B%255D%3DLOIS%2BCARON&p%5B%5D=facets.brand%255B%255D%3DANALOGUE&p%5B%5D=facets.brand%255B%255D%3DRUSTET&p%5B%5D=facets.brand%255B%255D%3DAcnos&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollection&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollections&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DMATRIX&p%5B%5D=facets.brand%255B%255D%3DTime%2BMatrix&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DPIRASO&p%5B%5D=facets.brand%255B%255D%3DEDDY%2BHAGER&p%5B%5D=facets.brand%255B%255D%3DLIMESTONE&p%5B%5D=facets.brand%255B%255D%3DLORENZ&p%5B%5D=facets.brand%255B%255D%3DSKMEI&p%5B%5D=facets.brand%255B%255D%3DTIMEWEAR&p%5B%5D=facets.brand%255B%255D%3DCasado&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.brand%255B%255D%3DABREXO&p%5B%5D=facets.brand%255B%255D%3DSeptem&p%5B%5D=facets.brand%255B%255D%3DNAVlFORCE&p%5B%5D=facets.brand%255B%255D%3DNAVIFORCE&p%5B%5D=facets.brand%255B%255D%3DOVERFLY&p%5B%5D=facets.brand%255B%255D%3DNIBOSI&p%5B%5D=facets.brand%255B%255D%3DV2A&p%5B%5D=facets.brand%255B%255D%3DAlix&p%5B%5D=facets.brand%255B%255D%3DKitcone&p%5B%5D=facets.brand%255B%255D%3DLongbo&p%5B%5D=facets.brand%255B%255D%3DBruno%2BMilano&p%5B%5D=facets.brand%255B%255D%3DBENYAR&p%5B%5D=facets.brand%255B%255D%3DSylvi&p%5B%5D=facets.brand%255B%255D%3DBenling&p%5B%5D=facets.brand%255B%255D%3DOLEVS&p%5B%5D=facets.brand%255B%255D%3DYHMEI&param=768787&hpid=_LEB_oDVnnx6rheeL0HHXap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiV0FUSEJGUjdQS0tON0VaViIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGNoZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
  - img "Image"
  - text: Deal of the Day From ₹99
- link "Image PLANCK Upto 90% off":
  - /url: /kitchen-cookware-serveware/kitchen-storage-containers/kitchen-containers/pr?sid=upp%2C5ix%2C01e&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DPLANCK&hpid=eFNJ0G-MdVPSGSkLIMp-dKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcHRvIDkwJSBvZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJDTlRHTVhYN0JOUFpHRldBIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiS2l0Y2hlbiBDb250YWluZXJzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: PLANCK Upto 90% off
- link "Image Best Deal Ever From ₹299":
  - /url: /furniture/shoe-racks-more/shoe-rack/~cs-yhovxl0i62/pr?sid=wwe%2C0ye%2Cn0l&collection-tab-name=Shoe+rack&param=34567&hpid=hoDyLH28aPc7UJnDfdZQuqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTI5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNIS0g3UkpLWVc0SkRHTVoiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJTaG9lIFJhY2siXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
  - img "Image"
  - text: Best Deal Ever From ₹299
- link "Image Best deals From ₹249":
  - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&p%5B%5D=facets.price_range.from%3D249&p%5B%5D=facets.price_range.to%3DMax&Param=3598&hpid=806BEL_97phh8CSf62Kzaap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTI0OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkVUSEhZQlQzR1ZWRUZFVVQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJLdXJ0YSBzZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Best deals From ₹249
- img "Image"
- text: Shop before the sale!
- link "Image":
  - /url: /boat-storm-infinity-plus-20-days-big-battery-asap-charge-1-96-4-97-cm-hd-display-smartwatch/p/itm8850196df8194?pid=SMWHB97A4F7FKFCN&lid=LSTSMWHB97A4F7FKFCN9KHTYQ&marketplace=FLIPKART&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&p%5B%5D=facets.bottom_type%255B%255D%3DSharara&p%5B%5D=facets.discount_range_v1%255B%255D%3D70%2525%2Bor%2Bmore&param=876546&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /kitchen-cookware-serveware/cookware/pr?sid=upp%2Ctnx&marketplace=FLIPKART&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /home-furnishing/bed-linen-blankets/bedsheets/pr?sid=jra%2Cknw%2Cqcw&p%5B%5D=facets.pattern%255B%255D%3DJaipuri%2BPrints&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3D267&p%5B%5D=facets.price_range.to%3DMax&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /eat/~cs-ly814iolew/pr?sid=eat&collection-tab-name=Breakfast+Essentials&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&Param=47683&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /furniture/furniture-accessories/home-temple/pr?sid=wwe%2Cq7b%2C9zz&p%5B%5D=facets.price_range.from%3D299&p%5B%5D=facets.price_range.to%3DMax&param=67823&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /furniture/tables/portable-laptop-tables/pr?sid=wwe%2Cki7%2Cd4s&p%5B%5D=facets.price_range.from%3D299&p%5B%5D=facets.price_range.to%3DMax&param=78326&BU=Mixed
  - img "Image"
- button "Next Slide":
  - img
- img "Image"
- text: Best Value Deals on Fashion
- link:
  - /url: /offers-list/best-value-deals-on-fashion?screen=dynamic&pk=contentTags%3DGCD_THEME_8%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
  - img
- link "Image Men’s Sports Shoes Min. 70% Off":
  - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp%2Ccil%2C1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Men’s Sports Shoes Min. 70% Off
- link "Image Men’s Slippers & Flip Flops Min. 70% Off":
  - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp%2Ccil%2Ce1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Men’s Slippers & Flip Flops Min. 70% Off
- link "Image Women's Sarees Min. 50% Off":
  - /url: https://www.flipkart.com/all/~cs-c6d1c0bc13f17c317f6447e890166c33/pr?sid=clo%2C8on%2Czpd%2C9og&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Women's Sarees Min. 50% Off
- link "Image Men’s Casual Shoes Min. 70% Off":
  - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp%2Ccil%2Ce1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Men’s Casual Shoes Min. 70% Off
- text: Hang on, loading content Flipkart - Your go-to place for Online Shopping +
- contentinfo:
  - text: ABOUT
  - link "Contact Us":
    - /url: /helpcentre?otracker=footer_navlinks
  - link "About Us":
    - /url: https://corporate.flipkart.net/corporate-home
  - link "Careers":
    - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
  - link "Flipkart Stories":
    - /url: http://stories.flipkart.com/?otracker=footer_navlinks
  - link "Press":
    - /url: http://stories.flipkart.com/category/top-stories/news/
  - link "Corporate Information":
    - /url: /corporate-information
  - text: GROUP COMPANIES
  - link "Myntra":
    - /url: https://www.myntra.com/
  - link "Cleartrip":
    - /url: https://www.cleartrip.com/
  - link "Shopsy":
    - /url: https://www.shopsy.in
  - text: HELP
  - link "Payments":
    - /url: /pages/payments
  - link "Shipping":
    - /url: /pages/shipping
  - link "Cancellation & Returns":
    - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
  - link "FAQ":
    - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
  - text: CONSUMER POLICY
  - link "Cancellation & Returns":
    - /url: /pages/returnpolicy?otracker=footer_navlinks
  - link "Terms Of Use":
    - /url: /pages/terms?otracker=footer_navlinks
  - link "Security":
    - /url: /pages/paymentsecurity?otracker=footer_navlinks
  - link "Privacy":
    - /url: /pages/privacypolicy?otracker=footer_navlinks
  - link "Sitemap":
    - /url: /sitemap?otracker=footer_navlinks
  - link "Grievance Redressal":
    - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
  - link "EPR Compliance":
    - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
  - link "FSSAI Food Safety Connect App":
    - /url: https://fssai.gov.in/cms/food-safety-connect.php
  - text: "Mail Us:"
  - paragraph: Flipkart Internet Private Limited,
  - paragraph: Buildings Alyssa, Begonia &
  - paragraph: Clove Embassy Tech Village,
  - paragraph: Outer Ring Road, Devarabeesanahalli Village,
  - paragraph: Bengaluru, 560103,
  - paragraph: Karnataka, India
  - text: "Social:"
  - link "Facebook":
    - /url: https://www.facebook.com/flipkart
    - img "Facebook"
  - link "Twitter":
    - /url: https://www.twitter.com/flipkart
    - img "Twitter"
  - link "YouTube":
    - /url: https://www.youtube.com/flipkart
    - img "YouTube"
  - link "Instagram":
    - /url: https://www.instagram.com/flipkart
    - img "Instagram"
  - text: "Registered Office Address:"
  - paragraph: Flipkart Internet Private Limited,
  - paragraph: Buildings Alyssa, Begonia &
  - paragraph: Clove Embassy Tech Village,
  - paragraph: Outer Ring Road, Devarabeesanahalli Village,
  - paragraph: Bengaluru, 560103,
  - paragraph: Karnataka, India
  - paragraph: "CIN : U51109KA2012PTC066107"
  - paragraph
  - paragraph:
    - text: "Telephone:"
    - link "044-45614700":
      - /url: tel:044-45614700
    - text: /
    - link "044-67415800":
      - /url: tel:044-67415800
  - img "Become a Seller"
  - link "Become a Seller":
    - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
  - img "Advertise"
  - text: Advertise
  - img "Gift Cards"
  - link "Gift Cards":
    - /url: /the-gift-card-store?otracker=footer_navlinks
  - img "Help Center"
  - link "Help Center":
    - /url: /helpcentre?otracker=footer_navlinks
  - text: © 2007-2026 Flipkart.com
  - img "Payment methods"
- contentinfo
- button "✕"
- text: Login
- paragraph: Get access to your Orders, Wishlist and Recommendations
- text: Log in for the best experience Enter your phone number to continue
- button "+91":
  - text: "+91"
  - img
- spinbutton "Phone Number"
- text: Phone Number
- paragraph
- paragraph
- text: Use Email-ID By continuing, you confirm that you are above 18 years of age, and you agree to the Flipkart's
- link "Terms of Use":
  - /url: https://www.flipkart.com/pages/terms
- text: and
- link "Privacy Policy":
  - /url: https://www.flipkart.com/pages/privacypolicy
- button "Continue" [disabled]
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test';
  2  | 
  3  | test('Taking screenshot' , {tag: "@fullpage"}, async ({page})=>{
  4  |     await page.goto('https://flipkart.com/');
  5  |     await page.waitForTimeout(2000);
  6  |     await page.screenshot({path: 'screenshots/full_page_amazon_screenshot.png', fullPage: true});
> 7  |     await expect(page).toHaveTitle('National Geographic');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  8  | })
  9  | 
  10 | 
  11 | //screenshot of just an element
  12 | test('Taking element screenshot' , async ({page})=>{
  13 |     await page.goto('https://amazon.in/');
  14 |     await page.waitForTimeout(5000);
  15 |     await page.locator('#nav-link-accountList').screenshot({path: 'screenshots/login_button_area_screenshot.png'});
  16 |     // await expect(page).toHaveTitle('');
  17 | })
  18 | 
  19 | 
  20 | //screenshot of just an element
  21 | test('Taking element screenshot 2' , async ({page})=>{
  22 |     await page.goto('https://amazon.in/');
  23 |     await page.waitForTimeout(5000);
  24 |     await page.locator('.theming-card-background').screenshot({path: 'screenshots/first_card_screenshot.png'});
  25 |     // await expect(page).toHaveTitle('');
  26 | })
```