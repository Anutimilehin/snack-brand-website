const imageUrl = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=84`

// These photos illustrate general food and industrial settings; they are not Jidex facilities.
export const manufacturingImages = {
  hero: imageUrl('photo-1727373203588-82996710c2af', 1900),
  sourcing: imageUrl('photo-1669154777196-aca4d45b581a', 1200),
  facilityLine: imageUrl('photo-1774887810190-5de1cc9cb06e', 1400),
  facilityFloor: imageUrl('photo-1768737180431-9b986c7dd1e2', 1400),
}

export const manufacturingPageContent = {
  hero: {
    eyebrow: 'How good food comes together',
    title: ['Made with', 'intention.'],
    description:
      'Thoughtful food manufacturing brings ingredients, care and the right processes together. Explore an illustrative look at the steps behind packaged snacks.',
  },
  journey: {
    eyebrow: '01 / Production journey',
    title: 'From ingredients to a finished pack.',
    introduction:
      'Every product has its own requirements. These stages offer a general view of processes that may be part of packaged food production.',
    stages: [
      {
        number: '01',
        title: 'Raw material sourcing',
        note: 'Start with ingredients',
        text: 'Ingredients and supplies are selected to suit the product and its intended production process.',
      },
      {
        number: '02',
        title: 'Sorting and preparation',
        note: 'Prepare for processing',
        text: 'Materials can be checked, sorted and prepared before moving into the next stage.',
      },
      {
        number: '03',
        title: 'Baking and frying',
        note: 'Apply the right method',
        text: 'Depending on the product, baking or frying may be used to transform prepared ingredients.',
      },
      {
        number: '04',
        title: 'Nitrogen flushing',
        note: 'A packaging option',
        text: 'Some snack packages use nitrogen flushing to replace air inside the pack. Its use varies by product and has not been confirmed for Jidex Foods.',
      },
      {
        number: '05',
        title: 'Packaging and sealing',
        note: 'Ready for distribution',
        text: 'A suitable pack is filled and sealed to prepare it for handling and distribution.',
      },
      {
        number: '06',
        title: 'Distribution & Delivery',
        note: 'Finished products move onward',
        text: 'Once packaged and ready, finished products move into distribution, helping make Jidex Foods snacks available to retailers, wholesalers and customers.',
      },
    ],
  },
  facilities: {
    eyebrow: '02 / Inside production',
    title: 'The places and tools behind the process.',
    introduction:
      'A closer look at food production environments, equipment and the details that support a manufacturing workflow.',
  },
  quality: {
    eyebrow: '03 / Quality and food safety',
    title: 'Care at every stage.',
    introduction:
      'Hygiene, quality control, food safety, consistent production standards and responsible sourcing are important considerations in food manufacturing.',
    values: [
      { number: '01', title: 'Hygiene', text: 'Clean practices and appropriate handling matter throughout food production.' },
      { number: '02', title: 'Quality control', text: 'Checks at relevant stages can help support consistency and product requirements.' },
      { number: '03', title: 'Food safety', text: 'Safe handling and suitable controls are central considerations in making food.' },
      { number: '04', title: 'Consistent standards', text: 'Clear methods help teams work toward repeatable production outcomes.' },
      { number: '05', title: 'Responsible sourcing', text: 'Thoughtful sourcing considers ingredients, suppliers and the needs of each product.' },
    ],
    verificationNote:
      'Information about ISO 22000:2018 and NAFDAC registration is awaiting documentary verification. This page does not confirm any certification or registration status.',
  },
}
