import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useGetProductQuery } from './rtk/api';
import { setSearch } from '../redux/actions';
import { useDispatch } from 'react-redux';

function NewForm() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    //console.log(useGetPostsQuery());
    const { data: product, error, isLoading } = useGetProductQuery();
    
    const onSubmit = useCallback((formData) => {

    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return(
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">ID:</label>
        <input {...register("id", {})} />
        {errors.id && <span>Ошибка ввода</span>}
        <button type="submit">Найти</button>
      </form>
      {product && (
        <div>
          <p>Найденный продукт: {JSON.stringify(product)}</p>
          <button onClick={() => dispatch(setSearch(product))}>Сохранить в кэше</button>
        </div>
      )}
    </div>
  );
}

export default NewForm;