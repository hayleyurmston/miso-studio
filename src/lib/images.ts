/**
 * Image map. Once the images are in /public/images, set `src` for each entry.
 * Until then every slot renders a soft cream block, so layouts and alt text
 * are already in place.
 */
export type Img = { src: string | null; alt: string; w?: number; h?: number };

export const IMG = {
  logo: { src: "/images/miso-studio-logo.webp", alt: "MISO Studio", w: 446, h: 206 },
  bannerRidge: { src: "/images/banners/golden-ridge.webp", alt: "Golden light over a ridge in the Central West NSW ranges" },
  bannerCliffs: { src: "/images/banners/ocean-cliffs.webp", alt: "Aerial view of ocean waves breaking against coastal cliffs" },
  bannerBeach: { src: "/images/banners/beach-waves.webp", alt: "Aerial view of waves rolling onto a sandy beach" },
  bannerCove: { src: "/images/banners/cove.webp", alt: "A quiet rocky cove at sunset" },
  bannerHills: { src: "/images/banners/blue-hills.webp", alt: "Blue forested hills rolling to the horizon" },
  hero: {
    src: "/images/hero-sunrise-valley.webp",
    alt: "Sunrise over a forested mountain valley in regional New South Wales",
  },
  hayley: {
    src: "/images/hayley-urmston.webp",
    alt: "Hayley Urmston, founder of MISO Studio, in a light-filled studio space in Millthorpe NSW",
  },
  mist: {
    src: "/images/misty-mountains.webp",
    alt: "Misty blue mountain ranges in regional NSW under a bright, cloud-filled sky",
  },
  fee: {
    src: "/images/fee-may-hamlet-and-fields.webp",
    alt: "Fee May of Hamlet & Fields, MISO Studio's brand photography and social media partner, holding a camera",
  },
  farm: {
    src: "/images/farm-hamlet-and-fields.webp",
    alt: "Aerial view of a dirt road running through grassy fields with trees and a pond, photographed by Hamlet & Fields",
  },
  rockpool: {
    src: "/images/rock-pool.webp",
    alt: "Aerial view of an ocean rock pool along a rocky coastline",
  },
  valley: {
    src: null,
    alt: "Sunset over a lush green valley with rolling hills and mountains in the distance",
  },
} satisfies Record<string, Img>;
