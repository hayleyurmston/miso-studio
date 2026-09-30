/**
 * Image map. Once the images are in /public/images, set `src` for each entry.
 * Until then every slot renders a soft cream block, so layouts and alt text
 * are already in place.
 */
export type Img = { src: string | null; alt: string; w?: number; h?: number };

export const IMG = {
  logo: { src: null, alt: "MISO Studio" },
  hero: {
    src: null,
    alt: "Sunrise over a forested mountain valley in regional New South Wales",
  },
  hayley: {
    src: null,
    alt: "Hayley Urmston, founder of MISO Studio, in a light-filled studio space in Millthorpe NSW",
  },
  mist: {
    src: null,
    alt: "Misty blue mountain ranges in regional NSW under a bright, cloud-filled sky",
  },
  fee: {
    src: null,
    alt: "Fee May of Hamlet & Fields, MISO Studio's brand photography and social media partner, holding a camera",
  },
  farm: {
    src: null,
    alt: "Aerial view of a dirt road running through grassy fields with trees and a pond, photographed by Hamlet & Fields",
  },
  rockpool: {
    src: null,
    alt: "Aerial view of an ocean rock pool along a rocky coastline",
  },
  valley: {
    src: null,
    alt: "Sunset over a lush green valley with rolling hills and mountains in the distance",
  },
} satisfies Record<string, Img>;
