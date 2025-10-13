// export interface BlogPost {
//   id: string;
//   title: string;
//   excerpt: string;
//   content: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   category: string;
//   tags: string[];
//   imageUrl: string;
//   publishedAt: string;
//   readTime: number;
// }

export const blogPosts = [
  {
    id: "1",
    title: "The Art of French Pastry: Mastering the Perfect Croissant",
    excerpt: "Discover the secrets behind creating flaky, buttery croissants that rival your favorite Parisian bakery.",
    content: `Making croissants from scratch is a labor of love that requires patience, precision, and practice. But the reward—a perfectly flaky, buttery pastry that melts in your mouth—is absolutely worth the effort.

## The Science of Lamination

The key to a perfect croissant lies in the lamination process. This involves folding butter into dough multiple times to create hundreds of thin, alternating layers. When baked, the water in the butter creates steam, causing the layers to separate and puff up.

## Essential Tips for Success

1. **Temperature is Everything**: Keep your butter and dough cold throughout the process. If the butter melts into the dough, you'll lose those precious layers.

2. **Patience Pays Off**: Don't rush the resting periods. The dough needs time to relax between folds, or it will become tough and elastic.

3. **Quality Ingredients**: Use European-style butter with at least 82% fat content for the best flavor and texture.

## The Process

Start with a simple yeasted dough made from flour, milk, sugar, salt, and yeast. After the initial rise, roll it into a rectangle and place a large slab of cold butter in the center. Fold the dough over the butter like a letter, then roll and fold three times, chilling between each turn.

## Shaping and Baking

Cut the dough into triangles, gently stretch them, and roll from the wide end to the point. Let them proof until nearly doubled, then bake in a hot oven until deeply golden brown.

The first bite of a homemade croissant, still warm from the oven, is pure magic. The satisfying shatter of the crispy exterior giving way to soft, buttery layers inside—it's an experience every home baker should have at least once.`,
    author: {
      name: "Sophie Laurent",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    category: "Baking",
    tags: ["French Cuisine", "Pastry", "Bread"],
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop",
    publishedAt: "2025-10-05",
    readTime: 8,
  },
  {
    id: "2",
    title: "Farm-to-Table: Why Seasonal Cooking Matters",
    excerpt: "Learn how cooking with seasonal ingredients can transform your meals and support local communities.",
    content: `There's something magical about biting into a tomato at the height of summer or savoring butternut squash on a crisp autumn evening. Seasonal cooking isn't just a trend—it's a return to how humans have eaten for millennia.

## The Benefits of Eating Seasonally

### Better Flavor
Produce picked at peak ripeness and sold locally simply tastes better. That strawberry that traveled 2,000 miles can't compete with one picked yesterday from a nearby farm.

### Nutritional Value
Fruits and vegetables begin losing nutrients the moment they're harvested. Seasonal, local produce reaches your table faster, preserving more vitamins and minerals.

### Environmental Impact
Eating seasonally reduces the carbon footprint of your meals. Less transportation, less refrigeration, and less energy-intensive greenhouse growing all add up.

### Economic Support
Buying from local farmers keeps money in your community and helps small farms stay in business.

## Getting Started

Visit your local farmers market and ask vendors what's at its peak. Build relationships with farmers—they're often happy to share recipes and cooking tips for their produce.

## Planning Your Seasonal Menu

### Spring
Focus on tender greens, asparagus, peas, and early strawberries. Light, fresh preparations celebrate the awakening of the growing season.

### Summer
Embrace tomatoes, zucchini, corn, berries, and stone fruits. Grilling and raw preparations showcase summer's bounty.

### Fall
Root vegetables, winter squashes, apples, and pears take center stage. Heartier cooking methods like roasting and braising feel appropriate.

### Winter
Citrus fruits, storage crops, and hardy greens get us through the cold months. Slow-cooked dishes provide comfort.

The rhythm of the seasons connects us to the land and to each other. It's a simple way to eat better, support your community, and rediscover the joy of anticipation—waiting all year for asparagus season or the first peaches of summer makes them taste even sweeter.`,
    author: {
      name: "Marcus Green",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    category: "Sustainability",
    tags: ["Farm-to-Table", "Seasonal", "Local"],
    imageUrl: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop",
    publishedAt: "2025-10-08",
    readTime: 6,
  },
  {
    id: "3",
    title: "Spice Route: Exploring Indian Home Cooking",
    excerpt: "Journey through the diverse flavors of Indian cuisine and learn to build your spice pantry from scratch.",
    content: `Indian cuisine is not a monolith—it's a tapestry of regional styles, family traditions, and personal touches passed down through generations. Let's explore the fundamentals that will open up a world of flavor in your kitchen.

## Building Your Spice Collection

You don't need 50 different spices to start cooking Indian food. Begin with these essentials:

### The Foundation
- Cumin (jeera)
- Coriander (dhania)
- Turmeric (haldi)
- Red chili powder
- Garam masala
- Mustard seeds

### The Enhancement Layer
- Cardamom
- Cinnamon
- Cloves
- Fenugreek
- Asafoetida (hing)

## The Art of Tempering (Tadka)

One of the most important techniques in Indian cooking is tempering—heating whole spices in oil or ghee to release their essential oils and create a flavor base. The sizzle of mustard seeds or the crackle of curry leaves is music to an Indian cook's ears.

## Regional Diversity

### North Indian Cooking
Rich gravies, tandoor-cooked breads, and dairy-based dishes characterize the north. Think butter chicken, naan, and paneer dishes.

### South Indian Cooking
Coconut, curry leaves, tamarind, and rice define the south. Dosas, sambar, and coconut chutneys are staples.

### East Indian Cooking
Fish, mustard, and poppy seeds feature prominently. Bengali sweets are legendary.

### West Indian Cooking
From Gujarati vegetarian dishes to Goan seafood curries, the west offers incredible variety.

## Tips for Success

1. **Toast Your Spices**: Dry-roasting whole spices before grinding releases incredible aromatics.

2. **Fresh is Best**: Spices lose potency over time. Buy in small quantities and replace annually.

3. **Layer Your Flavors**: Add spices at different stages of cooking for complexity.

4. **Don't Fear Fat**: Ghee and oil aren't just cooking mediums—they're flavor carriers.

Indian home cooking is about comfort, love, and bringing people together. Start simple, taste as you go, and don't be afraid to adjust spices to your preference. Every family has their own version of each dish, and soon you'll develop yours too.`,
    author: {
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    category: "World Cuisine",
    tags: ["Indian", "Spices", "Techniques"],
    imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop",
    publishedAt: "2025-10-10",
    readTime: 7,
  },
  {
    id: "4",
    title: "Knife Skills 101: The Foundation of Great Cooking",
    excerpt: "Master essential knife techniques that will make you faster, safer, and more confident in the kitchen.",
    content: `A sharp knife and good technique are the foundation of efficient, enjoyable cooking. Let's break down the essential skills every home cook should master.

## Choosing the Right Knife

You don't need a drawer full of specialized knives. Three knives will handle 95% of your kitchen tasks:

### Chef's Knife (8-10 inches)
Your workhorse for chopping, slicing, and mincing. Invest in a good one.

### Paring Knife (3-4 inches)
For small, detailed work like peeling and trimming.

### Serrated Bread Knife
For bread, tomatoes, and other items with tough exteriors.

## The Cuts You Need to Know

### The Dice
- **Small dice (brunoise)**: 1/8-inch cubes
- **Medium dice**: 1/4-inch cubes
- **Large dice**: 3/4-inch cubes

### The Julienne
Matchstick-sized pieces, perfect for stir-fries and salads.

### The Chiffonade
Thin ribbons of leafy herbs or greens.

### The Mince
Very fine pieces, essential for garlic, ginger, and herbs.

## Essential Techniques

### The Claw Grip
Curl your fingers under, using your knuckles as a guide for the knife. This protects your fingertips and provides control.

### The Rocking Motion
For herbs and garlic, keep the tip of the knife on the board and rock the blade up and down.

### The Slice
Use a smooth, forward and down motion. Let the knife do the work—don't apply excessive downward pressure.

## Knife Maintenance

### Sharpening vs. Honing
- **Honing**: Realigns the edge. Do this regularly with a honing steel.
- **Sharpening**: Removes metal to create a new edge. Do this a few times per year.

### Care Tips
1. Hand wash and dry immediately
2. Store in a knife block or on a magnetic strip
3. Use a wooden or plastic cutting board, never glass or marble
4. Never put knives in the dishwasher

## Practice Makes Perfect

Start slow and focus on consistency. Speed will come naturally as your muscle memory develops. Put on some music, grab a bag of onions, and practice your dicing. Your future self will thank you every time you cook.

Remember: A sharp knife is safer than a dull one. A dull knife requires more pressure and is more likely to slip.`,
    author: {
      name: "James Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    category: "Techniques",
    tags: ["Skills", "Basics", "Tools"],
    imageUrl: "https://images.unsplash.com/photo-1606757819934-d61a9f7279d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwaGVhbHRoeXxlbnwxfHx8fDE3NTUyODgxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishedAt: "2025-10-01",
    readTime: 5,
  },
  {
    id: "5",
    title: "The Mediterranean Diet: More Than Just Olive Oil",
    excerpt: "Explore the principles of Mediterranean eating and how it can transform your health and enjoyment of food.",
    content: `The Mediterranean diet has been crowned the world's healthiest diet for several years running. But it's not really a "diet" in the restrictive sense—it's a lifestyle built around fresh ingredients, shared meals, and the pleasure of eating.

## The Core Principles

### Abundance of Plants
Fill your plate with vegetables, fruits, whole grains, legumes, nuts, and seeds. These should form the foundation of your meals.

### Quality Fats
Olive oil is the primary fat source, along with nuts, seeds, and fatty fish. These provide healthy monounsaturated and omega-3 fatty acids.

### Moderate Protein
Fish and seafood several times a week, poultry and eggs in moderation, and less red meat.

### Herbs and Spices
Flavor comes from fresh herbs, garlic, onions, and spices rather than salt.

## A Day of Mediterranean Eating

### Breakfast
Greek yogurt with berries, walnuts, and honey. Whole grain toast with olive oil and tomato.

### Lunch
Mixed green salad with chickpeas, cucumber, tomatoes, olives, and feta. Olive oil and lemon dressing. Whole grain bread.

### Dinner
Grilled fish with roasted vegetables and quinoa. Side of white beans with herbs.

### Snacks
Fresh fruit, raw vegetables with hummus, a handful of almonds.

## The Social Component

Perhaps the most important aspect of Mediterranean eating is the social ritual of sharing meals. Taking time to sit down, eat slowly, and enjoy food with others contributes to both physical and mental wellbeing.

## Getting Started

You don't have to live in Greece to eat this way. Here's how to begin:

1. **Stock Your Pantry**: Extra virgin olive oil, canned tomatoes, beans, whole grains, nuts, and dried herbs.

2. **Shop the Perimeter**: Focus on fresh produce, fish, and dairy at the grocery store.

3. **Cook at Home**: Most Mediterranean meals are simple preparations that let quality ingredients shine.

4. **Make It Social**: Invite friends over for a simple meal of grilled fish, salad, and good bread.

## The Health Benefits

Research shows the Mediterranean diet reduces risk of heart disease, stroke, type 2 diabetes, and certain cancers. It supports brain health, healthy aging, and weight management.

But beyond the statistics, this way of eating simply feels good. There's no restriction or deprivation—just wholesome, delicious food shared with people you love. That's a recipe for a long, happy life.`,
    author: {
      name: "Elena Papadopoulos",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
    category: "Nutrition",
    tags: ["Mediterranean", "Healthy", "Lifestyle"],
    imageUrl: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&h=600&fit=crop",
    publishedAt: "2025-09-28",
    readTime: 6,
  },
  {
    id: "6",
    title: "Fermentation at Home: Sauerkraut, Kimchi, and Beyond",
    excerpt: "Unlock the ancient art of fermentation and discover how to make probiotic-rich foods at home.",
    content: `Fermentation is one of humanity's oldest food preservation techniques, and it's experiencing a renaissance. Beyond the health benefits, fermented foods offer complex, tangy flavors that can't be replicated any other way.

## Why Ferment?

### Gut Health
Fermented foods are rich in beneficial bacteria that support digestive health and immune function.

### Preservation
Before refrigeration, fermentation kept food safe to eat for months.

### Flavor Development
The transformation of cabbage into sauerkraut or cucumbers into pickles creates entirely new taste experiences.

### Nutrient Enhancement
Fermentation can increase vitamin content and make minerals more bioavailable.

## Getting Started: Basic Sauerkraut

The beauty of sauerkraut is its simplicity: cabbage and salt. That's it.

### The Process
1. Shred one medium cabbage
2. Massage with 1 tablespoon of salt until it releases liquid
3. Pack tightly into a clean jar, pressing down to eliminate air pockets
4. Ensure cabbage is submerged in its own brine
5. Cover loosely and let sit at room temperature for 5-10 days
6. Taste daily until it reaches your preferred tanginess

## Level Up: Kimchi

Kimchi takes fermentation in a spicier direction with Korean chili flakes (gochugaru), garlic, ginger, and fish sauce creating a complex, addictive flavor.

### Basic Kimchi Formula
- Napa cabbage
- Korean chili flakes
- Garlic and ginger
- Fish sauce or soy sauce for umami
- Optional: radish, scallions, carrots

## Fermentation Basics

### Equipment
- Glass jars (mason jars work perfectly)
- A weight to keep vegetables submerged
- A cloth or loose lid for airflow

### Temperature
Room temperature (65-75°F) is ideal. Warmer = faster fermentation.

### Salt
Use non-iodized salt. Iodine can inhibit fermentation.

### Patience
Fermentation takes time. Resist the urge to refrigerate too soon.

## Troubleshooting

### Mold
Surface mold can happen if vegetables aren't submerged. Remove it and ensure brine covers everything.

### Kahm Yeast
A white film that's harmless but can affect flavor. Skim it off.

### Too Salty
Use less salt next time, or rinse before eating.

### Not Fermenting
Check temperature and ensure you used enough salt to prevent bad bacteria while allowing good bacteria to thrive.

## Beyond Vegetables

Once you've mastered basic ferments, explore kombucha, sourdough bread, yogurt, and kefir. Each uses different organisms and techniques, but the principle remains the same: creating conditions where beneficial microbes thrive.

Fermentation connects us to food traditions spanning thousands of years and cultures around the world. Plus, it's fun to check on your jars and see (and smell) the transformation happening. Start simple, stay curious, and enjoy the bubbles!`,
    author: {
      name: "Hannah Muller",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
    category: "Fermentation",
    tags: ["Fermentation", "Probiotics", "Preservation"],
    imageUrl: "https://images.unsplash.com/photo-1496074620649-6b1b02e5c1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGRpbm5lcnxlbnwxfHx8fDE3NTUyOTIzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishedAt: "2025-09-25",
    readTime: 7,
  },
];

export const blogCategories = [
  "All Posts",
  "Baking",
  "Techniques",
  "World Cuisine",
  "Nutrition",
  "Sustainability",
  "Fermentation",
];
