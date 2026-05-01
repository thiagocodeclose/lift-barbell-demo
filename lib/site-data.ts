const siteData = {
  hero: {
    subtitle:
      "Denver's premier women's barbell studio. Science-backed programming built specifically for women who want to lift heavy, compete, and get seriously strong.",
  },
  stats: [
    { value: '450+', label: 'Members' },
    { value: '12', label: 'Platforms' },
    { value: '8', label: 'Coaches' },
    { value: '5 yrs', label: 'Est. 2020' },
  ],
  pillars: [
    {
      title: 'Strength Programming',
      desc: 'Evidence-based periodization built for women. Progressive overload across 8-week cycles with deload weeks built in — no guesswork.',
    },
    {
      title: 'Technique Mastery',
      desc: 'Every class starts with a movement clinic. We film your lifts, review form on screen, and refine mechanics before loading the bar.',
    },
    {
      title: 'Community Power',
      desc: 'Training alongside women who share your goals changes everything. Our floor culture is competitive, supportive, and unapologetically loud.',
    },
    {
      title: 'Nutrition Guidance',
      desc: 'Fueling for strength looks different than fueling for cardio. Our coaches help you eat to perform, recover, and hit new PRs every cycle.',
    },
  ],
  classes: [
    {
      level: 'Beginner',
      name: 'Barbell Foundations',
      desc: 'Learn the squat, hinge, push, and pull patterns with expert coaching. The 6-week intro to all four main lifts.',
      duration: '75 min',
      capacity: '8 women',
    },
    {
      level: 'All Levels',
      name: 'Powerlifting Club',
      desc: 'Squat, bench, deadlift. Structured meet prep programming available. Monday, Wednesday, Friday sessions available.',
      duration: '90 min',
      capacity: '12 women',
    },
    {
      level: 'Intermediate',
      name: 'Olympic Lifting',
      desc: 'Snatch and clean & jerk technique development. Footwork, timing, and the art of getting under the bar fast.',
      duration: '90 min',
      capacity: '8 women',
    },
    {
      level: 'Advanced',
      name: 'Comp Prep',
      desc: 'Periodized meet prep for powerlifting and weightlifting competitions. Peaking cycles, attempt selection, compete.',
      duration: '2 hr',
      capacity: '6 women',
    },
    {
      level: 'All Levels',
      name: 'Barbell Cardio',
      desc: 'Strength-based conditioning. Complexes, circuits, and loaded carries at moderate intensity. Perfect active recovery.',
      duration: '60 min',
      capacity: '14 women',
    },
    {
      level: 'Beginner',
      name: 'Kettlebell & Barbell',
      desc: 'Bridge the gap between functional training and barbell work. Ideal for transitioning from general fitness to lifting.',
      duration: '60 min',
      capacity: '12 women',
    },
  ],
  pricing: [
    {
      name: 'Foundation',
      price: 89,
      desc: 'Start your barbell journey',
      featured: false,
      features: [
        '8 classes/month',
        'Barbell Foundations access',
        'App + programming',
        'Open lifting hours',
      ],
    },
    {
      name: 'Elite',
      price: 139,
      desc: 'Train like an athlete',
      featured: true,
      features: [
        'Unlimited classes',
        'All class formats',
        'Comp prep eligible',
        '1-on-1 technique session/mo',
        'Nutrition guidance',
      ],
    },
    {
      name: 'Competition',
      price: 179,
      desc: 'Built for competitors',
      featured: false,
      features: [
        'Unlimited + priority booking',
        'Competition prep programming',
        'Meet coaching included',
        'Equipment discount',
        'Video analysis library',
      ],
    },
  ],
  cta: {
    subtitle:
      'Book a free trial class, meet your coaches, and experience what real strength training feels like.',
  },
  contact: {
    address: '2847 Larimer St, Denver, CO',
    phone: '(720) 555-0194',
  },
};

export default siteData;
