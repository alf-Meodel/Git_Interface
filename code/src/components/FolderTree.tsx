import React from 'react';
import { ChevronRight, ChevronDown, Folder as FolderIcon } from 'lucide-react';
import { Folder } from '../types';

interface FolderTreeProps {
  folder: Folder;
  onFolderSelect: (folder: Folder) => void;
  selectedFolder: Folder | null;
  level?: number;
}

export const FolderTree: React.FC<FolderTreeProps> = ({
  folder,
  onFolderSelect,
  selectedFolder,
  level = 0
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isSelected = selectedFolder?.id === folder.id;

  const toggleFolder = () => {
    setIsOpen(!isOpen);
    onFolderSelect(folder);
  };

  return (
    <div className="select-none">
      <div
        className={`flex items-center p-2 hover:bg-teal-50 cursor-pointer ${
          isSelected ? 'bg-teal-100' : ''
        }`}
        style={{ paddingLeft: `${level * 1.5}rem` }}
        onClick={toggleFolder}
      >
        {folder.subFolders.length > 0 && (
          <span className="mr-1">
            {isOpen ? (
              <ChevronDown className="w-4 h-4 text-teal-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-teal-600" />
            )}
          </span>
        )}
        <FolderIcon className="w-4 h-4 text-teal-600 mr-2" />
        <span className="text-gray-700">{folder.name}</span>
      </div>
      {isOpen && folder.subFolders.map((subFolder) => (
        <FolderTree
          key={subFolder.id}
          folder={subFolder}
          onFolderSelect={onFolderSelect}
          selectedFolder={selectedFolder}
          level={level + 1}
        />
      ))}
    </div>
  );
};