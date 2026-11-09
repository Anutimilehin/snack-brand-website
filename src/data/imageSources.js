import jidex from '../assets/images/Jidex.jpg'
import jidexWebp from '../assets/images/Jidex.webp'
import jidex600 from '../assets/images/Jidex-600.webp'
import jidex1000 from '../assets/images/Jidex-1000.webp'
import aboutFactory from '../assets/images/about-factory.jpg'
import aboutFactoryWebp from '../assets/images/about-factory.webp'
import aboutFactory600 from '../assets/images/about-factory-600.webp'
import aboutFactory1000 from '../assets/images/about-factory-1000.webp'
import aboutStory from '../assets/images/about-story.jpg'
import aboutStoryWebp from '../assets/images/about-story.webp'
import aboutStory600 from '../assets/images/about-story-600.webp'
import aboutStory1000 from '../assets/images/about-story-1000.webp'
import chinChin from '../assets/images/chin-chin.jpg'
import chinChinWebp from '../assets/images/chin-chin.webp'
import chinChin600 from '../assets/images/chin-chin-600.webp'
import chinChin1000 from '../assets/images/chin-chin-1000.webp'
import foodManufacturing from '../assets/images/food-manufacturing.jpg'
import foodManufacturingWebp from '../assets/images/food-manufacturing.webp'
import foodManufacturing600 from '../assets/images/food-manufacturing-600.webp'
import foodManufacturing1000 from '../assets/images/food-manufacturing-1000.webp'
import peanutBurger from '../assets/images/peanut-burger.jpg'
import peanutBurgerWebp from '../assets/images/peanut-burger.webp'
import peanutBurger600 from '../assets/images/peanut-burger-600.webp'
import peanutBurger1000 from '../assets/images/peanut-burger-1000.webp'
import plantainChips from '../assets/images/plantain-chips.jpg'
import plantainChipsWebp from '../assets/images/plantain-chips.webp'
import plantainChips600 from '../assets/images/plantain-chips-600.webp'
import plantainChips1000 from '../assets/images/plantain-chips-1000.webp'
import popcorn from '../assets/images/popcorn.jpg'
import popcornWebp from '../assets/images/popcorn.webp'
import popcorn600 from '../assets/images/popcorn-600.webp'
import popcorn1000 from '../assets/images/popcorn-1000.webp'
import potatoChips from '../assets/images/potato-chips.jpg'
import potatoChipsWebp from '../assets/images/potato-chips.webp'
import potatoChips600 from '../assets/images/potato-chips-600.webp'
import potatoChips1000 from '../assets/images/potato-chips-1000.webp'

function responsiveImage(src, webp, small, medium, width, height) {
  return {
    src,
    webpSrcSet: `${small} 600w, ${medium} 1000w, ${webp} ${width}w`,
    width,
    height,
  }
}

// WebP candidates reduce downloads; original JPEGs remain broad browser fallbacks.
export const imageSources = {
  jidex: responsiveImage(jidex, jidexWebp, jidex600, jidex1000, 1242, 1473),
  aboutFactory: responsiveImage(aboutFactory, aboutFactoryWebp, aboutFactory600, aboutFactory1000, 1600, 1067),
  aboutStory: responsiveImage(aboutStory, aboutStoryWebp, aboutStory600, aboutStory1000, 1400, 2100),
  chinChin: responsiveImage(chinChin, chinChinWebp, chinChin600, chinChin1000, 1200, 800),
  foodManufacturing: responsiveImage(foodManufacturing, foodManufacturingWebp, foodManufacturing600, foodManufacturing1000, 1400, 933),
  peanutBurger: responsiveImage(peanutBurger, peanutBurgerWebp, peanutBurger600, peanutBurger1000, 1280, 1707),
  plantainChips: responsiveImage(plantainChips, plantainChipsWebp, plantainChips600, plantainChips1000, 1400, 1400),
  popcorn: responsiveImage(popcorn, popcornWebp, popcorn600, popcorn1000, 1200, 900),
  potatoChips: responsiveImage(potatoChips, potatoChipsWebp, potatoChips600, potatoChips1000, 1200, 1807),
}
