import React, { useId } from 'react';
import { useFilter } from '../context/filterContext';
import { BiSearch } from 'react-icons/bi';

function Filtrado() {
  const { setFilters, filters } = useFilter();

  const [priceId, categoryId] = [useId(), useId()];
  console.log(priceId, categoryId);

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

  return (
    <>
      <form className='flex items-center justify-center mb-3'>
        <input
          onChange={handleChangeTitle}
          type='text'
          placeholder='Search'
          className='w-auto py-1 px-3 outline-none rounded-full border-[1px]'
        />
        <button type='submit' className='btn btn-ghost btn-sm btn-circle'>
          <BiSearch className='text-lg' />
        </button>
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
