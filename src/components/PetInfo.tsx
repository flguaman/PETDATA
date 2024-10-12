import React from 'react';
import { Pet } from '../types';

interface PetInfoProps {
  pet: Pet | null;
}

const PetInfo: React.FC<PetInfoProps> = ({ pet }) => {
  if (!pet) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <div className="w-48 h-48 bg-green-500 rounded-lg mx-auto mb-4"></div>
      <table className="w-full text-left border-collapse">
        <tbody>
          {Object.entries(pet).map(([key, value]) => (
            <tr key={key} className="border-b border-gray-700">
              <td className="py-2 pr-4 font-medium text-gray-400">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
              <td className="py-2 text-white">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PetInfo;