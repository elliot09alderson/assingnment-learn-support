
import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Provider } from '../services/providerService';
import { Card, CardContent } from '@/components/ui/card';

interface ProviderCardProps {
  provider: Provider;
  onClick: () => void;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider, onClick }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border border-gray-200 bg-white"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-semibold text-lg">
              {provider.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {provider.name}
            </h3>
            
            <div className="mt-1 flex items-center text-sm text-blue-600">
              <span className="bg-blue-100 px-2 py-1 rounded-full">
                {provider.specialization}
              </span>
            </div>
            
            <div className="mt-2 flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{provider.location}</span>
            </div>
            
            <div className="mt-2 flex items-center space-x-1">
              {renderStars(provider.rating)}
              <span className="ml-2 text-sm text-gray-600">
                {provider.rating}/5
              </span>
            </div>
            
            <p className="mt-3 text-sm text-gray-600 line-clamp-2">
              {provider.shortDescription}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
