import React from 'react';
import { FolderList } from './components/FolderList';
import { RepoGrid } from './components/RepoGrid';
import { folders } from './data/sampleData';
import { Folder } from './types';
import { GithubIcon } from 'lucide-react';

function App() {
  const [selectedFolder, setSelectedFolder] = React.useState<Folder | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="fixed top-0 left-0 right-0 bg-teal-900 text-white p-4 border-b border-teal-800 z-10">
        <div className="container mx-auto flex items-center gap-2">
          <GithubIcon className="w-6 h-6 text-teal-400" />
          <h1 className="text-xl font-semibold text-teal-50">GitHub Repository Viewer</h1>
        </div>
      </header>
      
      <div className="pt-16 flex">
        <aside className="fixed w-80 h-[calc(100vh-4rem)] overflow-y-auto bg-gray-800 border-r border-gray-700">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-teal-400 mb-4">Categories</h2>
            <FolderList
              folders={folders}
              onFolderSelect={setSelectedFolder}
              selectedFolder={selectedFolder}
            />
          </div>
        </aside>
        
        <main className="ml-80 flex-1 p-8">
          {selectedFolder && (
            <>
              <h2 className="text-lg font-semibold text-teal-400 mb-4">
                Repositories in {selectedFolder.name}
              </h2>
              <RepoGrid repositories={selectedFolder.repositories} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;