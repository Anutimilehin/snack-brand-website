import { imageSources } from './imageSources.js'

// Product details are kept together here so copy and photography are easy to update.
export const products = [
  {
    id: 'plantain-chips',
    number: '01',
    name: 'Plantain Chips',
    category: 'A familiar favourite',
    image: imageSources.plantainChips,
    alt: 'Golden plantain chips served in a dark bowl on a banana leaf',
    description: 'A crisp snack presented in a simple, familiar form.',
    detail: 'Plantain chips are part of the Jidex Foods snack range. Get in touch with our team for current availability and product enquiries.',
    tone: 'gold',
  },
  {
    id: 'chin-chin',
    number: '02',
    name: 'Chin Chin',
    category: 'A classic to share',
    image: imageSources.chinChin,
    alt: 'Nigerian chin chin pieces in a simple white serving dish',
    description: 'A classic bite-sized snack often enjoyed at home or shared with others.',
    detail: 'Chin chin is one of the products in our growing range. Contact Jidex Foods for enquiries about this product.',
    tone: 'cream',
  },
  {
    id: 'popcorn',
    number: '03',
    name: 'Popcorn',
    category: 'Made for a moment',
    image: imageSources.popcorn,
    alt: 'Fresh popcorn in a simple white bowl',
    description: 'A light, airy snack suited to a break or a shared occasion.',
    detail: 'Explore popcorn as part of the Jidex Foods snack selection. Our team can help with product enquiries.',
    tone: 'red',
  },
  {
    id: 'peanut-burger',
    number: '04',
    name: 'Peanut Burger',
    category: 'A little crunch',
    image: imageSources.peanutBurger,
    alt: 'Close-up of crunchy, egg-coated roasted groundnuts',
    description: 'A crunchy, coated groundnut snack with a distinctive shape.',
    detail: 'Peanut Burger is included in the Jidex Foods range. Contact us for more information and enquiries.',
    tone: 'gold',
  },
  {
    id: 'potato-chips',
    number: '05',
    name: 'Potato Chips',
    category: 'A crisp classic',
    image: imageSources.potatoChips,
    alt: 'Crisp golden potato chips in a ceramic bowl',
    description: 'A crisp, familiar snack for everyday breaks and get-togethers.',
    detail: 'Potato chips complete this selection of familiar snacks. Contact Jidex Foods for current product information.',
    tone: 'cream',
  },
]

// Separate hero artwork keeps every product photograph unique in the showcase below.
export const productsHeroImage =
  'https://images.unsplash.com/photo-1749281592570-2f743d7d2824?auto=format&fit=crop&w=1800&q=84'
