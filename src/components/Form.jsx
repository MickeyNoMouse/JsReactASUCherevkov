import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSearch } from '../redux/actions';
import axios from 'axios';
import { useTable, useSortBy, useDraggable } from 'react-table';
import { useGetPostsQuery } from './rtk/api';

function Form() {
/*
  const columna = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Description', accessor: 'description' },
      { Header: 'Price', accessor: 'price' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      column,
      data,
    },
    useSortBy,
    useDraggable
  );
*/
  
  const [data, setData] = useState([]);
  const searchResult = useSelector(store => store.rootReducer.search.search.searchResult);
  const dispatch = useDispatch();
  const { register: registerCreate, handleSubmit: handleSubmitCreate, formState: { errors: errorsCreate } } = useForm();
  const { register: registerSearch, handleSubmit: handleSubmitSearch, formState: { errors: errorsSearch } } = useForm();
  const { register: registerDelete, handleSubmit: handleSubmitDelete, formState: { errors: errorsDelete } } = useForm();
  
  const onCreate = useCallback((formData) => {
    axios.post('http://127.0.0.1:8000/products/', formData)
      .then(response => {
        const createdProduct = JSON.parse(response.data); 
        setData([...data, { id: createdProduct.product_id, ...formData }]);
        console.log(createdProduct.product_id);
        alert(`Продукт создан`);
      })
      .catch(error => {
        console.error(error);
        alert('Не удалось создать продукт');
      });
  }, [data, setData]);
  

  
  
  const onSearch = useCallback((formData) => {
    
    axios.get(`http://127.0.0.1:8000/products/${formData.id}`)
    
      .then(response => {
        const foundProduct = response.data;

        const isProductExists = data.some(item => item.id === formData.id);
        if (!isProductExists) {
          setData([...data, { id: formData.id, ...foundProduct }]);
        }
        if (searchResult?.product_id == data.id) alert('Продукт найден. Данные в кэше')
    else {
        dispatch(setSearch(foundProduct));
        alert('Продукт найден на сервере');
    }
      })
      .catch(error => {
        console.error(error);
        dispatch(setSearch(null));
        alert('Продукта не существует');
      });
    
  }, [data, setData, dispatch]);


  
  const onDelete = useCallback((formData) => {
    axios.delete(`http://127.0.0.1:8000/products/${formData.id}`)
      .then(response => {
        const deletedProductId = formData.id;
        setData(data.filter(item => item.id !== deletedProductId));
        dispatch(setSearch(null));
        alert(`Продукт с id: ${deletedProductId} удален успешно`);
      })
      .catch(error => {
        console.error(error);
        alert(`Продукт с id: ${formData.id} удалить не удалось`);
      });
  }, [data, setData, dispatch]);
  

  const location = useLocation();
  const isHomePage = location.pathname === '/HomePage';
  const isAboutPage = location.pathname === '/AboutPage';

  if (isHomePage || isAboutPage) {
    return null;
  }
   
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
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
        </form>
      </div>

      <table style={{ border: '2px solid blue', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td style={{ border: '1px solid blue', padding: '5px' }}>{item.id}</td>
              <td style={{ border: '1px solid blue', padding: '5px' }}>{item.name}</td>
              <td style={{ border: '1px solid blue', padding: '5px' }}>{item.description}</td>
              <td style={{ border: '1px solid blue', padding: '5px' }}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Form;
