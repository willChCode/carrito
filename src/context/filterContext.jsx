import { createContext, useContext, useEffect, useState } from 'react';

//Crear contexto
export const filtersContext = createContext();

export const useFilter = () => {
  const context = useContext(filtersContext);
  if (!useFilter) throw new Error('no existe los filters');
  return context;
};
//Crear elprovider, para proveer el contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    title: null
  });
  const [isRecording, setIsRecording] = useState(false);

  let recogniton;
  //resultado y daarle valor al estado
  const handleResultVoice = e => {
    const { transcript } = e.results[0][0];
    setFilters(prevFilters => ({
      ...prevFilters,
      title: transcript
    }));
    setIsRecording(false);
    recogniton.stop();
  };
  useEffect(() => {
    if (isRecording) {
      recogniton = new window.webkitSpeechRecognition();
      console.log(recogniton);
      recogniton.continuous = true;
      recogniton.interimResults = false;
      recogniton.lang = 'es-ES';
      recogniton.onresult = handleResultVoice;
      recogniton.start();
    }
    return () => {
      if (recogniton) {
        recogniton.onresult = null;
        recogniton.stop();
      }
    };
  }, [isRecording]);

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  // console.log(isRecording);

  return (
    <filtersContext.Provider
      value={{
        filters,
        setFilters,
        handleStartRecording,
        isRecording
      }}>
      {children}
    </filtersContext.Provider>
  );
}
