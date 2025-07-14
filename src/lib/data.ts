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
    photos: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
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
    photos: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
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
    photos: ['https://placehold.co/800x600.png'],
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
    photos: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
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
    photos: ['https://placehold.co/800x600.png'],
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
    photos: ['https://placehold.co/800x600.png'],
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