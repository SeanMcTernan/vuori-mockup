export const GITHUB_RAW_BASE =
  'https://raw.githubusercontent.com/SeanMcTernan/vuori-mockup/main/images';

export const imageSavings = {
  // Hero images (served at viewport width, PNG → AVIF)
  '0316_sp26_homepage_hero_villa_desktop.png': { original: '4.8 MB', cdn: '530 KB', percent: 89 },
  '0316_sp26_homepage_hero_villa_mobile.png': { original: '1.3 MB', cdn: '145 KB', percent: 89 },

  // Sub-hero (served at ~50vw, PNG → AVIF)
  '0316_sp26_homepage_sub_metacotton_desktop.png': { original: '3.8 MB', cdn: '418 KB', percent: 89 },
  '0316_sp26_homepage_sub_w_denim_desktop.png': { original: '3.5 MB', cdn: '385 KB', percent: 89 },

  // Blissblend (served at viewport width, PNG → AVIF)
  'sp26_0223_homepage_blissblend_sub_desktop.png': { original: '4.2 MB', cdn: '462 KB', percent: 89 },
  'sp26_0223_homepage_blissblend_sub_mobile.png': { original: '1.1 MB', cdn: '121 KB', percent: 89 },

  // Footer hero (served at viewport width, PNG → AVIF)
  '0213_homepage_footer_desktop.png': { original: '4.6 MB', cdn: '506 KB', percent: 89 },
  '0213_homepage_footer_mobile.png': { original: '1.2 MB', cdn: '132 KB', percent: 89 },

  // Logo
  'vuori_gradient_logo.png': { original: '48 KB', cdn: '8 KB', percent: 83 },

  // Product images — PNGs (large originals served at ~20vw via AVIF)
  'vw3015srb_sp26_w_bottoms_detail_8.png': { original: '7.6 MB', cdn: '152 KB', percent: 98 },
  'v302tbl_sp26_m_bottoms_detail_12_9dcaa480-9497-43f5-b198-be05a9f157e6.png': { original: '6.6 MB', cdn: '132 KB', percent: 98 },
  'vw303reh_sp26_w_bottoms_front_2.png': { original: '5.2 MB', cdn: '104 KB', percent: 98 },
  'vw3176blk_sp26_w_bottoms_detail_12.png': { original: '4.8 MB', cdn: '96 KB', percent: 98 },
  'vw1011cer_sp26_w_tops_front_4.png': { original: '4.3 MB', cdn: '86 KB', percent: 98 },
  'v126tlh_sp26_m_tops_front_2.png': { original: '5.1 MB', cdn: '102 KB', percent: 98 },

  // Product images — JPGs (already compressed, served smaller via AVIF)
  'sp26_look069_w_aaron_feaver_pasadena_00222.jpg': { original: '783 KB', cdn: '94 KB', percent: 88 },
  'v188tlh_sp26_m_tops_front_2.jpg': { original: '309 KB', cdn: '62 KB', percent: 80 },
  'sp26_d3_look058_m_aaron_feaver_goldstein_00502.jpg': { original: '717 KB', cdn: '86 KB', percent: 88 },
  'v1116tbl_sp26_m_tops_creative_11.jpg': { original: '482 KB', cdn: '72 KB', percent: 85 },

  // Category images — Men (PNGs served at ~11vw via AVIF)
  'sp26-popularcategories-shortsleevetees.png': { original: '1.0 MB', cdn: '40 KB', percent: 96 },
  'sp26-popularcategories-shorts.png': { original: '1.1 MB', cdn: '44 KB', percent: 96 },
  'sp26-popularcategories-hoodies.png': { original: '1.0 MB', cdn: '40 KB', percent: 96 },
  'sp26-popularcategories-pants.png': { original: '1.2 MB', cdn: '48 KB', percent: 96 },
  'sp26-popularcategories-boardshorts.png': { original: '1.1 MB', cdn: '44 KB', percent: 96 },
  'sp26-popularcategories-long_sleeves.png': { original: '1.0 MB', cdn: '40 KB', percent: 96 },
  'sp26-popularcategories-joggers.png': { original: '1.0 MB', cdn: '40 KB', percent: 96 },
  'sp26-popularcategories-accessories.png': { original: '1.0 MB', cdn: '40 KB', percent: 96 },
  'sp26-popularcategories-jackets.png': { original: '1.1 MB', cdn: '44 KB', percent: 96 },

  // Category images — Women (PNGs served at ~11vw via AVIF)
  'sp26-popularcategories-matchingsets.png': { original: '1.1 MB', cdn: '44 KB', percent: 96 },
  'sp26-popularcategories-sweatshirts.png': { original: '1.2 MB', cdn: '48 KB', percent: 96 },
  'sp26-popularcategories-leggings_and_tanks.png': { original: '1.1 MB', cdn: '44 KB', percent: 96 },
  'sp26-popularcategories-womens_shorts.png': { original: '1.0 MB', cdn: '40 KB', percent: 96 },
  'sp26-popularcategories-womensswim.png': { original: '1.0 MB', cdn: '40 KB', percent: 96 },
  'sp26-popularcategories-lstops.png': { original: '1.0 MB', cdn: '40 KB', percent: 96 },
  'sp26-popularcategories-dreamknit_pants.png': { original: '1.1 MB', cdn: '44 KB', percent: 96 },
  'sp26-popularcategories-axs-womens.png': { original: '1.1 MB', cdn: '44 KB', percent: 96 }
};

export function getSavings(file) {
  return imageSavings[file] || null;
}
