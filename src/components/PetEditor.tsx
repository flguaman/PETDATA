import React, { useState, useEffect } from 'react';
import { Pet } from '../types';

interface PetEditorProps {
  pet: Pet | null;
  onSave: (updatedPet: Pet) => void;
}

const PetEditor: React.FC<PetEditorProps> = ({ pet, onSave }) => {
  const [editedPet, setEditedPet] = useState<Pet | null>(null);

  useEffect(() => {
    setEditedPet(pet);
  }, [pet]);

  if (!editedPet) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedPet({ ...editedPet, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedPet);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Editor de Datos</h2>
      {Object.entries(editedPet).map(([key, value]) => (
        <div key={key} className="mb-4">
          <label htmlFor={key} className="block text-sm font-medium text-gray-300 mb-2">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          <input
            type={key === 'age' ? 'number' : key === 'birthDate' ? 'date' : 'text'}
            id={key}
            name={key}
            value={value}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
      >
        Guardar
      </button>
    </form>
  );
};

export default PetEditor;