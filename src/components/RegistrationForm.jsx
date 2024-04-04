import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = useCallback((data) => {
    console.log(data); 
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/HomePage';
  const isAboutPage = location.pathname === '/AboutPage';


  if (isHomePage || isAboutPage) {
    return null; 
  }

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <h1>Форма регистрации</h1>
        <label htmlFor="username">Username:</label>
        <input {...register("username", { required: true })} />
        {errors.username && <span>Это поле обязательно</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Введите корректный email</span>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}

export default RegistrationForm;
