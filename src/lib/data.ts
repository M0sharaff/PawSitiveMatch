
export type Pet = {
  id: number;
  name: string;
  species: 'Dog' | 'Cat' | 'Other';
  breed: string;
  age: 'Baby' | 'Young' | 'Adult' | 'Senior';
  gender: 'Male' | 'Female';
  size: 'Small' | 'Medium' | 'Large';
  location: string;
  description: string;
  photos: string[];
  traits: string[];
  history: string;
  careRequirements: string;
};

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 'Young',
    gender: 'Male',
    size: 'Large',
    location: 'Sunnyvale, CA',
    description: 'Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks.',
    photos: [
      'https://images.unsplash.com/photo-1590212151088-e24a75345d31?q=80&w=800&h=600&fit=crop', 
      'https://images.unsplash.com/photo-1611250282119-94c61e479a37?q=80&w=800&h=600&fit=crop', 
      'https://images.unsplash.com/photo-1548679913-9e4a3b054a4f?q=80&w=800&h=600&fit=crop'
    ],
    traits: ['Friendly', 'Energetic', 'Playful', 'Loves Kids'],
    history: 'Found as a stray, Buddy has been socialized at the shelter and is now ready for a forever home.',
    careRequirements: 'Requires a home with a yard and an active family that can provide plenty of exercise.',
  },
  {
    id: 2,
    name: 'Lucy',
    species: 'Cat',
    breed: 'Siamese',
    age: 'Adult',
    gender: 'Female',
    size: 'Medium',
    location: 'San Francisco, CA',
    description: 'Lucy is a calm and affectionate Siamese cat who enjoys cuddling and basking in sunbeams.',
    photos: [
      'https://images.unsplash.com/photo-1596223522204-f1489117650f?q=80&w=800&h=600&fit=crop', 
      'https://images.unsplash.com/photo-1604430459992-a1b9f551a2a4?q=80&w=800&h=600&fit=crop'
    ],
    traits: ['Affectionate', 'Calm', 'Loves to Cuddle', 'Vocal'],
    history: 'Her previous owner could no longer care for her. She is litter-trained and well-behaved.',
    careRequirements: 'Prefers a quiet household. Gets along with other cats but not dogs.',
  },
  {
    id: 3,
    name: 'Max',
    species: 'Dog',
    breed: 'German Shepherd',
    age: 'Adult',
    gender: 'Male',
    size: 'Large',
    location: 'Oakland, CA',
    description: 'Max is a loyal and intelligent German Shepherd. He is highly trainable and eager to please.',
    photos: ['https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=800&h=600&fit=crop'],
    traits: ['Loyal', 'Intelligent', 'Trainable', 'Protective'],
    history: 'Max was surrendered by his owner due to a change in living situation. He knows basic commands.',
    careRequirements: 'Needs an experienced owner who can provide firm guidance and continued training.',
  },
  {
    id: 4,
    name: 'Milo',
    species: 'Cat',
    breed: 'Domestic Shorthair',
    age: 'Baby',
    gender: 'Male',
    size: 'Small',
    location: 'Berkeley, CA',
    description: 'Milo is a curious and playful kitten full of energy and love.',
    photos: [
      'https://images.pexels.com/photos/7788649/pexels-photo-7788649.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', 
      'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=800&h=600&fit=crop'
    ],
    traits: ['Playful', 'Curious', 'Energetic'],
    history: 'Born at the shelter, Milo is well-socialized with his siblings and people.',
    careRequirements: 'Needs a family that can keep up with his playful antics.',
  },
  {
    id: 5,
    name: 'Daisy',
    species: 'Dog',
    breed: 'Beagle',
    age: 'Senior',
    gender: 'Female',
    size: 'Medium',
    location: 'Palo Alto, CA',
    description: 'Daisy is a sweet and gentle senior Beagle looking for a comfortable home to spend her golden years.',
    photos: ['https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&h=600&fit=crop'],
    traits: ['Gentle', 'Sweet-tempered', 'Loves Naps'],
    history: 'Her owner passed away. She is in good health for her age.',
    careRequirements: 'A quiet home with a soft bed is all she needs. Enjoys short, leisurely walks.',
  },
  {
    id: 6,
    name: 'Kiwi',
    species: 'Other',
    breed: 'Parakeet',
    age: 'Young',
    gender: 'Male',
    size: 'Small',
    location: 'San Jose, CA',
    description: 'Kiwi is a cheerful and chatty parakeet that loves to sing and interact with people.',
    photos: ['https://images.unsplash.com/photo-1552728089-57bdde3e70aa?q=80&w=800&h=600&fit=crop'],
    traits: ['Chatty', 'Cheerful', 'Social'],
    history: 'Looking for a home that can give him more attention.',
    careRequirements: 'Requires a spacious cage and daily interaction.',
  },
];

export const petFilters = {
    species: [...new Set(pets.map(p => p.species))],
    age: [...new Set(pets.map(p => p.age))],
    gender: [...new Set(pets.map(p => p.gender))],
    size: [...new Set(pets.map(p => p.size))],
}
