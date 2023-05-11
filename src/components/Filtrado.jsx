import React, { useEffect, useId, useRef, useState } from 'react';
import { useFilter } from '../context/filterContext';
import { BiSearch } from 'react-icons/bi';
import { FaMicrophone } from 'react-icons/fa';

function Filtrado() {
  const { setFilters, filters, handleStartRecording, isRecording } =
    useFilter();
  const inputRef = useRef(null);
  const [priceId, categoryId] = [useId(), useId()];
  // console.log(priceId, categoryId);

  const handleChangePrice = e => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }));
  };

  const handleChangeCategory = e => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }));
  };
  const handleChangeTitle = e => {
    setFilters(prevState => ({
      ...prevState,
      title: e.target.value
    }));
  };

  useEffect(() => {
    if (filters.title) {
      inputRef.current.value = filters.title;
      // setTranscript(''); // se resetea la transcripción para permitir búsquedas múltiples
    }
  }, [filters.title]);
  return (
    <>
      <form className='flex items-center justify-center mb-3 '>
        <BiSearch size={20} className='mx-2' />
        <input
          onChange={handleChangeTitle}
          ref={inputRef}
          type='search'
          placeholder='Search'
          className='w-auto py-1 px-3 outline-none border-x-[1px]'
        />
        <FaMicrophone
          onClick={handleStartRecording}
          size={20}
          className={`mx-2 ${isRecording && 'text-sky-500'}`}
        />
      </form>

      <div className='flex justify-around mb-6 mt-6 '>
        <div className=' flex gap-2 items-center'>
          <label className='font-bold' htmlFor={priceId}>
            Price:{' '}
          </label>
          <input
            className='range range-xs range-primary'
            type='range'
            id={priceId}
            min='0'
            max='1000'
            onChange={handleChangePrice}
          />
          <span>${filters.minPrice}</span>
        </div>
        <div className='flex items-center gap-2'>
          <label className='font-bold' htmlFor={categoryId}>
            Category:{' '}
          </label>
          <select
            className='outline-none'
            id={categoryId}
            onChange={handleChangeCategory}>
            <option value='all'>Todas</option>
            <option value='laptops'>Portatiles</option>
            <option value='smartphones'>Celulares</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Filtrado;
