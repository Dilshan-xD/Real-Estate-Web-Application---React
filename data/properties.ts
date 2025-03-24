import { Property } from '@/types/property'

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in B1',
    type: 'flat',
    price: 220000,
    bedrooms: 2,
    description: 'A stunning modern apartment in Birmingham city centre featuring an open plan living space, high-end appliances, and a private balcony with city views. The property benefits from secure parking and 24-hour concierge service.',
    shortDescription: 'Modern 2-bed apartment with city views',
    postcode: 'B1 1LW',
    dateAdded: '2024-01-02',
    images: [
      '/flat 1/5640738_1709177848_5969.jpeg?height=400&width=600&text=Living Room',
      '/flat 1/5640738_1709177851_0345.jpeg?height=400&width=600&text=Kitchen',
      '/flat 1/5640738_1709177852_8496.jpeg?height=400&width=600&text=Bedroom 1',
      '/flat 1/5612387_1703157158_6981.jpeg?height=400&width=600&text=Bedroom 2',
      '/flat 1/x5640738_1709177855_035.jpeg.pagespeed.ic.3GC9VP6x76.webp?height=400&width=600&text=Bathroom',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4862,
      lng: -1.8904
    }
  },
  {
    id: '2',
    title: 'Victorian Terrace House',
    type: 'house',
    price: 450000,
    bedrooms: 4,
    description: 'A beautifully maintained Victorian terrace house with period features throughout. The property offers spacious living areas, a modern fitted kitchen, four double bedrooms, and a landscaped garden.',
    shortDescription: 'Spacious 4-bed Victorian house with garden',
    postcode: 'B13 9QR',
    dateAdded: '2024-01-05',
    images: [
      '/house 1/5703511_1726392514_7567.jpeg?height=400&width=600&text=Exterior',
      '/house 1/5703511_1726392515_3144.jpeg?height=400&width=600&text=Living Room',
      '/house 1/5703511_1728015246_6886.jpeg?height=400&width=600&text=Kitchen',
      '/house 1/5703511_1728015247_743.jpeg?height=400&width=600&text=Master Bedroom',
      '/house 1/5703511_1728015248_997.jpeg?height=400&width=600&text=Garden',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4500,
      lng: -1.8900
    }
  },
  {
    id: '3',
    title: 'Luxury Studio Apartment',
    type: 'flat',
    price: 175000,
    bedrooms: 1,
    description: 'A luxurious studio apartment perfect for young professionals or investors. Features include high-spec finishes, integrated appliances, and a prime location close to transport links.',
    shortDescription: 'Modern studio apartment in prime location',
    postcode: 'B1 2HP',
    dateAdded: '2024-01-10',
    images: [
      '/flat 2/5726566_1734582640_7286.jpeg?height=400&width=600&text=Living Area',
      '/flat 2/5726566_1734582637_4911.jpeg?height=400&width=600&text=Kitchenette',
      '/flat 2/5726566_1734582633_7316.jpeg?height=400&width=600&text=Bathroom',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4800,
      lng: -1.8950
    }
  },
  {
    id: '4',
    title: 'Charming Cottage in Moseley',
    type: 'house',
    price: 350000,
    bedrooms: 3,
    description: 'A delightful 3-bedroom cottage in the heart of Moseley Village. This property boasts original features, a cozy living room with a fireplace, a country-style kitchen, and a beautiful garden perfect for entertaining.',
    shortDescription: 'Quaint 3-bed cottage with character',
    postcode: 'B13 8HJ',
    dateAdded: '2024-01-15',
    images: [
      '/house 2/488308_1641506877_1836.jpg?height=400&width=600&text=Exterior',
      '/house 2/488308_1641506877_8919.jpg?height=400&width=600&text=Living Room',
      '/house 2/488308_1641506874_8789.jpg?height=400&width=600&text=Kitchen',
      '/house 2/488308_1641506875_6834.jpg?height=400&width=600&text=Bedroom 1',
      '/house 2/488308_1641506543_7835.jpg?height=400&width=600&text=Garden',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4472,
      lng: -1.8855
    }
  },
  {
    id: '5',
    title: 'Penthouse Apartment with Skyline Views',
    type: 'apartment',
    price: 550000,
    bedrooms: 3,
    description: 'Stunning penthouse apartment offering panoramic views of Birmingham\'s skyline. Features include floor-to-ceiling windows, a spacious open-plan living area, a designer kitchen, and a private roof terrace.',
    shortDescription: 'Luxurious 3-bed penthouse with city views',
    postcode: 'B1 1RF',
    dateAdded: '2024-01-20',
    images: [
      '/apt 1/5688969_1721895672_4397.jpeg?height=400&width=600&text=Living Room',
      '/apt 1/5688969_1721895966_6498.jpeg?height=400&width=600&text=Kitchen',
      '/apt 1/5688969_1721895968_5483.jpeg?height=400&width=600&text=Bedroom 1',
      '/apt 1/5688969_1721895970_2195.jpeg?height=400&width=600&text=Roof Terrace',
      '/apt 1/5688969_1721895981_2637.jpeg?height=400&width=600&text=City View',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4800,
      lng: -1.9060
    }
  },
  {
    id: '6',
    title: 'Family Home in Sutton Coldfield',
    type: 'house',
    price: 650000,
    bedrooms: 5,
    description: 'Spacious 5-bedroom detached house in a sought-after area of Sutton Coldfield. This family home features a large kitchen-diner, separate living and dining rooms, a study, and a beautifully landscaped garden with a patio area.',
    shortDescription: 'Spacious 5-bed family home with garden',
    postcode: 'B74 2TY',
    dateAdded: '2024-01-25',
    images: [
      '/house 3/5726182_1734453980_2676.jpeg?height=400&width=600&text=Exterior',
      '/house 3/5726182_1734453974_0839.jpeg?height=400&width=600&text=Kitchen Diner',
      '/house 3/5726182_1734453964_9028.jpeg?height=400&width=600&text=Living Room',
      '/house 3/5726182_1734453960_7912.jpeg?height=400&width=600&text=Garden',
      '/house 3/5726182_1734453956_867.jpeg?height=400&width=600&text=Bedroom 1',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.5700,
      lng: -1.8242
    }
  },
  {
    id: '7',
    title: 'Contemporary Loft Apartment',
    type: 'apartment',
    price: 280000,
    bedrooms: 2,
    description: 'Stylish loft apartment in a converted warehouse. This property features exposed brick walls, high ceilings, and large windows. The open-plan living space includes a modern kitchen and a mezzanine level perfect for a home office.',
    shortDescription: 'Trendy 2-bed loft in converted warehouse',
    postcode: 'B3 1SJ',
    dateAdded: '2024-02-01',
    images: [
      '/apt 2/5718749_1731910175_8512.jpeg?height=400&width=600&text=Living Area',
      '/apt 2/5718749_1731910183_7339.png?height=400&width=600&text=Kitchen',
      '/apt 2/5718749_1731910192_0477.png?height=400&width=600&text=Bedroom 1',
      '/apt 2/5718749_1731910201_5701.png?height=400&width=600&text=Mezzanine',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4889,
      lng: -1.9092
    }
  },
  {
    id: '8',
    title: 'Cozy Bungalow in Harborne',
    type: 'house',
    price: 400000,
    bedrooms: 2,
    description: 'Charming 2-bedroom bungalow in the popular suburb of Harborne. This property offers easy single-level living with a bright living room, modern kitchen, two good-sized bedrooms, and a well-maintained garden. Perfect for downsizers or small families.',
    shortDescription: 'Delightful 2-bed bungalow in quiet suburb',
    postcode: 'B17 0NP',
    dateAdded: '2024-02-05',
    images: [
      '/house 4/5714192_1730184464_7843.jpeg?height=400&width=600&text=Exterior',
      '/house 4/5714192_1730184459_736.jpeg?height=400&width=600&text=Living Room',
      '/house 4/5714192_1730184457_5481.jpeg?height=400&width=600&text=Kitchen',
      '/house 4/5714192_1730184455_5695.jpeg?height=400&width=600&text=Bedroom 1',
      '/house 4/5714192_1730184453_0436.jpeg?height=400&width=600&text=Garden',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4569,
      lng: -1.9544
    }
  },
  {
    id: '9',
    title: 'Eco-Friendly New Build',
    type: 'house',
    price: 500000,
    bedrooms: 4,
    description: 'Brand new 4-bedroom eco-home built to the highest environmental standards. Features include solar panels, ground source heat pump, triple glazing, and smart home technology. The property offers open-plan living, a high-spec kitchen, and a low-maintenance garden.',
    shortDescription: 'Modern 4-bed eco-home with smart features',
    postcode: 'B29 6JT',
    dateAdded: '2024-02-10',
    images: [
      '/house 5/x5724392_1733910000_3558.jpeg.pagespeed.ic.bD0oac1UCv.webp?height=400&width=600&text=Exterior',
      '/house 5/x5724392_1733823690_4578.jpeg.pagespeed.ic.IkWqIabWLM.webp?height=400&width=600&text=Living Room',
      '/house 5/x5724392_1733823512_4498.jpeg.pagespeed.ic.YBBJspSJrn.webp?height=400&width=600&text=Kitchen',
      '/house 5/x5724392_1733823511_7057.jpeg.pagespeed.ic.AN6ymNNV_V.webp?height=400&width=600&text=Garden',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4397,
      lng: -1.9367
    }
  },
  {
    id: '10',
    title: 'Converted Church Apartment',
    type: 'apartment',
    price: 320000,
    bedrooms: 2,
    description: 'Unique 2-bedroom apartment in a converted Gothic church. This property retains many original features including high vaulted ceilings and stained glass windows. The open-plan living area showcases the church\'s architecture while providing modern comforts.',
    shortDescription: 'Unique 2-bed apartment in converted church',
    postcode: 'B5 7QU',
    dateAdded: '2024-02-15',
    images: [
      '/apt 3/5638224_1729416259_9927.jpeg?height=400&width=600&text=Living Area',
      '/apt 3/5638224_1729416258_8307.jpeg?height=400&width=600&text=Kitchen',
      '/apt 3/5638224_1729416257_5913.jpeg?height=400&width=600&text=Bedroom 1',
      '/apt 3/5638224_1729416256_3716.jpeg?height=400&width=600&text=Stained Glass',
    ],
    floorPlan: '/placeholder.svg?height=800&width=600&text=Floor Plan',
    location: {
      lat: 52.4720,
      lng: -1.8978
    }
  }
]

