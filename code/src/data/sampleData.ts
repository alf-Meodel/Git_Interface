import { Folder } from '../types';

export const folders: Folder[] = [
  {
    id: 'doc',
    name: 'Documentation',
    subFolders: [
      {
        id: 'tutorials',
        name: 'Tutorials',
        subFolders: [],
        repositories: [
          {
            id: 'tutorial-1',
            name: 'React Tutorial',
            description: 'Comprehensive React tutorial for beginners',
            url: 'https://github.com/username/react-tutorial',
            previewImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
          }
        ]
      },
      {
        id: 'guides',
        name: 'Guides',
        subFolders: [],
        repositories: []
      }
    ],
    repositories: []
  },
  {
    id: 'code',
    name: 'Code',
    subFolders: [],
    repositories: [
      {
        id: 'project-1',
        name: 'TypeScript Utils',
        description: 'Collection of TypeScript utility functions',
        url: 'https://github.com/username/ts-utils',
        previewImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'projects',
    name: 'Projects',
    subFolders: [],
    repositories: [
      {
        id: 'project-2',
        name: 'Portfolio Website',
        description: 'Personal portfolio built with React and TypeScript',
        url: 'https://github.com/username/portfolio',
        previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }
];