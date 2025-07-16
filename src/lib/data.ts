
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
      'https://images.unsplash.com/photo-1740235452766-ef4fe170b63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkb2clMjBnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MHx8fHwxNzUyNjY1OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1589963928139-380d1933568c?q=80&w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=800&h=600&fit=crop'
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
      'https://images.unsplash.com/photo-1669095658634-2a5d9fae6d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2F0JTIwc2lhbWVzZXxlbnwwfHx8fDE3NTI2NjU5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=800&h=600&fit=crop'
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
    photos: ['https://images.unsplash.com/photo-1620009130148-64da1612e86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkb2clMjBnZXJtYW4lMjBzaGVwaGVyZHxlbnwwfHx8fDE3NTI2NjU5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'],
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
    photos: ['https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=800&h=600&fit=crop'],
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
