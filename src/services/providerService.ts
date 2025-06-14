
import providersData from '../data/providers.json';

export interface Provider {
  id: string;
  name: string;
  specialization: string;
  location: string;
  rating: number;
  shortDescription: string;
  longDescription: string;
  contactEmail: string;
  phoneNumber: string;
  image: string;
}

// Simulate API delay for realistic experience
const simulateApiDelay = (delay: number = 1000) => 
  new Promise(resolve => setTimeout(resolve, delay));

export const fetchProviders = async (): Promise<Provider[]> => {
  console.log('Fetching providers...');
  await simulateApiDelay(800);
  return providersData as Provider[];
};

export const fetchProviderById = async (id: string): Promise<Provider | null> => {
  console.log(`Fetching provider with id: ${id}`);
  await simulateApiDelay(600);
  const provider = providersData.find(p => p.id === id);
  return provider ? provider as Provider : null;
};

export const searchProviders = async (query: string): Promise<Provider[]> => {
  console.log(`Searching providers with query: ${query}`);
  await simulateApiDelay(400);
  
  if (!query.trim()) {
    return providersData as Provider[];
  }
  
  const filtered = providersData.filter(provider => 
    provider.name.toLowerCase().includes(query.toLowerCase()) ||
    provider.specialization.toLowerCase().includes(query.toLowerCase()) ||
    provider.location.toLowerCase().includes(query.toLowerCase())
  );
  
  return filtered as Provider[];
};
