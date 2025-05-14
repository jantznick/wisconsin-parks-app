import React, { createContext, useContext, useState } from 'react';
import { Park } from '../data/parks';

interface SelectedParkContextType {
  selectedPark: Park | null;
  setSelectedPark: (park: Park | null) => void;
}

const SelectedParkContext = createContext<SelectedParkContextType | undefined>(undefined);

export function SelectedParkProvider({ children }: { children: React.ReactNode }) {
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);

  return (
    <SelectedParkContext.Provider value={{ selectedPark, setSelectedPark }}>
      {children}
    </SelectedParkContext.Provider>
  );
}

export function useSelectedPark() {
  const context = useContext(SelectedParkContext);
  if (context === undefined) {
    throw new Error('useSelectedPark must be used within a SelectedParkProvider');
  }
  return context;
} 