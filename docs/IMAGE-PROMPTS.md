# Burger website asset prompts

Generated using built-in image_gen in three parallel calls, one request per asset, no variants or retries.

## 1. Three burger hero

Use case: product-mockup
Asset type: restaurant website hero background photograph, wide 16:9 landscape.
Primary request: Cinematic ultra photorealistic THREE gourmet beef burgers on a charcoal black scene. Center burger slightly larger, side burgers distinct cheeses and sauces.
Composition: All three complete and clearly visible in the lower two thirds; top 30 percent dark negative space for website headline. Large delicious product presence. View from slightly below burger center with enough depth to see fresh ingredients.
Lighting: Moody amber rimlight, realistic delicate steam and smoke, crisp juicy meat detail, glossy golden buns, appetizing rich melted cheese.
Backdrop: charcoal black seamlessly compatible with website background #10100e.
Constraints: exactly three whole burgers; no text, no logos, no watermarks, no UI or mockup frame.

## 2. Ingredient sprite

Use case: product-mockup
Asset type: transparent PNG sprite sheet for CSS 3D scroll burger assembly, portrait exactly 1024x3072 pixels.
Primary request: Exactly SIX equal-height 512px rows. Each row holds one independent photorealistic hamburger ingredient centered horizontally and vertically, photographed from the exact same camera perspective: 15 degree elevated frontal view. All ingredients same 800px apparent diameter/width. Each stays inside its row with 50px minimum margins; no overlap between rows.
Row 1, pixels y=0-511: domed golden brioche top bun.
Row 2, pixels y=512-1023: red tomato slices and pickles with sauce.
Row 3, pixels y=1024-1535: melted cheddar slice.
Row 4, pixels y=1536-2047: thick grilled beef patty.
Row 5, pixels y=2048-2559: fresh green ruffled lettuce.
Row 6, pixels y=2560-3071: toasted bottom bun.
Lighting: consistent attractive soft studio illumination, true photorealistic food texture.
Background: actual full alpha transparency throughout all empty space, no simulated checkerboard.
Constraints: exactly six isolated ingredient assets, no text, no guide lines, no panels, no duplicate burger stacks, no shadows outside each row, no extra ingredients. Maintain equal row spacing and consistent centered composition for extraction.

## 3. Logo extraction

Use case: background-extraction
Asset type: clean transparent raster restaurant logo
Input images: Image 1 is the edit target, a photo/screenshot of the existing 3 MONKEY BURGER HOUSE sign.
Primary request: Extract and restore only the supplied logo into a clean high resolution transparent PNG. Remove all building, sign backdrop, screenshot margins and architectural elements.
Preserve invariants: preserve the distinctive EXACT existing 3 MONKEY BURGER HOUSE lettering, original letter shapes and stacking, yellow numeral 3, red MONKEY letters, white BURGER HOUSE letters, and black outlines/backing immediately intrinsic to the logo. Match the original quirky hand-lettered logo shape. Correct photographic softness and edge aliasing gently without redesigning.
Text verbatim: "3 MONKEY" and "BURGER HOUSE".
Constraints: Do not reinvent the brand. Do not substitute a new font. Preserve the supplied artwork and black outlines. Actual transparent alpha outside the complete extracted logo; no fake checkerboard. No new elements. Center the logo with a small transparent safety margin.



## Responsive mobile hero (built-in Imagegen)

Reference: three-burgers-hero.png. Generate one 9:16 cinematic ultrarealistic portrait with exactly three gourmet beef burgers in triangular composition: large center cheddar burger foreground, smaller bacon burger behind left, mushroom burger behind right. Black charcoal backdrop, dark tabletop bottom 15%, atmospheric negative space above for headline, mild steam, amber/red rim lighting, juicy photorealistic textures. Preserve the reference food photography style. No text, no UI, no logo. The entire burger cluster should fit the portrait.

Saved asset: public/images/mobile-hero.png, 941 × 1672. Real-time smoke is separately rendered by components/hero-smoke.tsx.
