import React from 'react';
import { ExternalLink, GitFork, Copy, Check } from 'lucide-react';
import { Repository } from '../types';
import { CopyButton } from './CopyButton';

interface RepoGridProps {
  repositories: Repository[];
}

export const RepoGrid: React.FC<RepoGridProps> = ({ repositories }) => {
  if (repositories.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-800 rounded-lg border border-gray-700">
        <p className="text-gray-400">No repositories in this folder</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {repositories.map((repo) => (
        <div key={repo.id} className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden hover:border-teal-500 transition-colors">
          {repo.previewImage && (
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-48 group"
            >
              <img
                src={repo.previewImage}
                alt={repo.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            </a>
          )}
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-teal-400">{repo.name}</h3>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-gray-300 mb-4 line-clamp-2">{repo.description}</p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <GitFork className="w-4 h-4 text-teal-400" />
                <CopyButton
                  text={`git clone ${repo.url}.git`}
                  label="HTTPS"
                  className="text-gray-400 hover:text-teal-400"
                />
                <span className="text-gray-600">|</span>
                <CopyButton
                  text={`git clone git@github.com:${repo.url.replace('https://github.com/', '')}.git`}
                  label="SSH"
                  className="text-gray-400 hover:text-teal-400"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};