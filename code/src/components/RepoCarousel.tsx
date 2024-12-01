import React from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Repository } from '../types';

interface RepoCarouselProps {
  repositories: Repository[];
}

export const RepoCarousel: React.FC<RepoCarouselProps> = ({ repositories }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % repositories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + repositories.length) % repositories.length);
  };

  if (repositories.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-800 rounded-lg border border-gray-700">
        <p className="text-gray-400">No repositories in this folder</p>
      </div>
    );
  }

  const repo = repositories[currentIndex];

  return (
    <div className="relative bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-teal-400">{repo.name}</h3>
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors"
        >
          View on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      {repo.previewImage && (
        <div className="relative h-48 mb-4">
          <img
            src={repo.previewImage}
            alt={repo.name}
            className="w-full h-full object-cover rounded-lg border border-gray-700"
          />
        </div>
      )}
      
      <p className="text-gray-300 mb-4">{repo.description}</p>
      
      <div className="flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-gray-700 text-teal-400 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-gray-400">
          {currentIndex + 1} / {repositories.length}
        </span>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-700 text-teal-400 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};