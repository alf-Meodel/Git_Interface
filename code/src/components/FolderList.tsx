import React from 'react';
import { ChevronRight, ChevronDown, Folder as FolderIcon } from 'lucide-react';
import { Folder } from '../types';

interface FolderListProps {
  folders: Folder[];
  onFolderSelect: (folder: Folder) => void;
  selectedFolder: Folder | null;
}

interface FolderItemProps {
  folder: Folder;
  onFolderSelect: (folder: Folder) => void;
  selectedFolder: Folder | null;
  level: number;
}

const FolderItem: React.FC<FolderItemProps> = ({
  folder,
  onFolderSelect,
  selectedFolder,
  level
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
        className={`flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md transition-colors ${
          isSelected ? 'bg-gray-700 text-teal-400' : 'text-gray-300'
        }`}
        style={{ paddingLeft: `${level * 1.5}rem` }}
        onClick={toggleFolder}
      >
        {folder.subFolders.length > 0 && (
          <span className="mr-1">
            {isOpen ? (
              <ChevronDown className="w-4 h-4 text-teal-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-teal-400" />
            )}
          </span>
        )}
        <FolderIcon className="w-4 h-4 text-teal-400 mr-2" />
        <span>{folder.name}</span>
      </div>
      {isOpen && folder.subFolders.map((subFolder) => (
        <FolderItem
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

export const FolderList: React.FC<FolderListProps> = ({
  folders,
  onFolderSelect,
  selectedFolder
}) => {
  return (
    <div className="space-y-1">
      {folders.map((folder) => (
        <FolderItem
          key={folder.id}
          folder={folder}
          onFolderSelect={onFolderSelect}
          selectedFolder={selectedFolder}
          level={0}
        />
      ))}
    </div>
  );
};