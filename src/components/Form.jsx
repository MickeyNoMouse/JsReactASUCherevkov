import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSearch } from '../redux/actions';

import axios from 'axios';

function RegistrationForm() {

  const { register: registerCreate, handleSubmit: handleSubmitCreate, formState: { errors: errorsCreate } } = useForm();
  const { register: registerSearch, handleSubmit: handleSubmitSearch, formState: { errors: errorsSearch } } = useForm();
  const { register: registerDelete, handleSubmit: handleSubmitDelete, formState: { errors: errorsDelete } } = useForm();

  const [createResult, setCreateResult] = useState(null);
  const [deleteResult, setDeleteResult] = useState(null);

  const searchResult = useSelector(store => store.search.search.searchResult);
  console.log(searchResult);
  const dispatch = useDispatch();

  const onCreate = useCallback((data) => {

    console.log("данные для создания:", data);

    axios.post('http://127.0.0.1:8000/products/', data)
      .then(response => {
        const js = JSON.parse(response.data)
        console.log('Первый then', js);
        setCreateResult(js);
        dispatch(setSearch(js));
        alert(`Продукт создан`);

      })
      .catch(error => {
        console.error(error);
        setCreateResult(null);
        dispatch(setSearch(null));
        alert('Не удалось создать продукт');
      })
  }, []);


  const onSearch = useCallback((data) => {

    console.log("найденный результат:", searchResult);
    console.log(searchResult?.product_id, data.id)
    if (searchResult?.product_id == data.id) alert('Продукт найден. Данные в кэше')
    else {
      axios.get(`http://127.0.0.1:8000/products/${data.id}`)
        .then(response => {
          console.log(response.data);
          dispatch(setSearch(response.data));
          alert('Продукт найден на сервере');
        })
        .catch(error => {
          console.error(error);
          dispatch(setSearch(null));
          alert('Продукта не существует');
        });
    }
  }, [searchResult, dispatch]);

  const onDelete = useCallback((data) => {

    console.log("ID в функции onDelete:", data.id);

    axios.delete(`http://127.0.0.1:8000/products/${data.id}`)
      .then(response => {
        console.log(response.data);
        setDeleteResult(response.data);
        dispatch(setSearch(null));
        alert(`Продукт с id: ${data.id} удален успешно`);
      })
      .catch(error => {
        console.error(error);
        setDeleteResult(null);
        alert(`Продукт с id: ${data.id} удалить не удалось`);
      })
  }, [searchResult, dispatch]);

  const location = useLocation();
  const isHomePage = location.pathname === '/HomePage';
  const isAboutPage = location.pathname === '/AboutPage';

  if (isHomePage || isAboutPage) {
    return null;
  }

  return (
    <>
      <form onSubmit={handleSubmitCreate(onCreate)}>
        <div>
          <h1>Создать:</h1>
          <label htmlFor="name">Name:</label>
          <input {...registerCreate("name", {})} />
          {errorsCreate.name && <span>Ошибка ввода</span>}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input {...registerCreate("description", {})} />
          {errorsCreate.description && <span>Ошибка ввода</span>}
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input {...registerCreate("price", { pattern: /^\d*(\.\d+)?$/ })} />
          {errorsCreate.price && <span>Введите число</span>}
        </div>

        <button type="submit">Создать</button>

    


      </form>

      <form onSubmit={handleSubmitSearch(onSearch)}>
        <div>
          <h1>Найти:</h1>
          <label htmlFor="id">ID:</label>
          <input {...registerSearch("id", {})} />
          {errorsSearch.id && <span>Ошибка ввода</span>}
        </div>
        <button type="submit">Найти</button>
        {searchResult && <p>Объект: {JSON.stringify(searchResult)}</p>}
      </form>

      <form onSubmit={handleSubmitDelete(onDelete)}>
        <div>
          <h1>Удалить:</h1>
          <label htmlFor="id">ID:</label>
          <input {...registerDelete("id", {})} />
          {errorsDelete.id && <span>Ошибка ввода</span>}
        </div>
        <button type="submit">Удалить</button>
        {deleteResult && <p>{JSON.stringify(deleteResult)}</p>}
      </form>
    </>
  );
}

export default RegistrationForm;