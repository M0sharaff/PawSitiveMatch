
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
    description: 'Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks. He is great with kids and other dogs.',
    photos: [
      'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZG9nJTIwfGVufDB8fHx8MTc1MjY3MDgxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1589965716319-4a041b58fa8a?q=80&w=800&h=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=800&h=600&auto=format&fit=crop'
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
    description: 'Lucy is a calm and affectionate Siamese cat who enjoys cuddling and basking in sunbeams. She has beautiful blue eyes and a sleek coat.',
    photos: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNzUyNjU5OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=800&h=600&auto=format&fit=crop'
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
    description: 'Max is a loyal and intelligent German Shepherd. He is highly trainable and eager to please, making him a perfect companion for an experienced owner.',
    photos: [
      'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZXR8ZW58MHx8fHwxNzUyNjY5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    traits: ['Loyal', 'Intelligent', 'Trainable', 'Protective'],
    history: 'Max was surrendered by his owner due to a change in living situation. He knows basic commands.',
    careRequirements: 'Needs an experienced owner who can provide firm guidance and continued training.',
  },
  {
    id: 4,
    name: 'Milo',
    species: 'Cat',
    breed: 'Tabby Kitten',
    age: 'Baby',
    gender: 'Male',
    size: 'Small',
    location: 'Berkeley, CA',
    description: 'Milo is a curious and playful kitten full of energy and love. His adorable stripes and playful pounce will steal your heart.',
    photos: [
      'https://images.pexels.com/photos/7788649/pexels-photo-7788649.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', 
      'https://images.unsplash.com/photo-1595433707802-6b2626ef1991?q=80&w=800&h=600&auto=format&fit=crop'
    ],
    traits: ['Playful', 'Curious', 'Energetic', 'Affectionate'],
    history: 'Born at the shelter, Milo is well-socialized with his siblings and people.',
    careRequirements: 'Needs a family that can keep up with his playful antics and provide lots of toys.',
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
    description: 'Daisy is a sweet and gentle senior Beagle looking for a comfortable home to spend her golden years. She loves short walks and long naps.',
    photos: [
        'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8cGV0fGVufDB8fHx8MTc1MjY2OTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    traits: ['Gentle', 'Sweet-tempered', 'Loves Naps', 'Quiet'],
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
    description: 'Kiwi is a cheerful and chatty parakeet that loves to sing and interact with people. His bright green feathers will light up any room.',
    photos: [
        'https://images.unsplash.com/photo-1544924790-2b4a21c4b276?q=80&w=800&h=600&auto=format&fit=crop'
    ],
    traits: ['Chatty', 'Cheerful', 'Social', 'Intelligent'],
    history: 'Looking for a home that can give him more attention and social interaction.',
    careRequirements: 'Requires a spacious cage, a varied diet, and daily interaction to stay happy and healthy.',
  },
];

export const petFilters = {
    species: [...new Set(pets.map(p => p.species))],
    age: [...new Set(pets.map(p => p.age))],
    gender: [...new Set(pets.map(p => p.gender))],
    size: [...new Set(pets.map(p => p.size))],
}
