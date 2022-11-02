import React from 'react';
import './Contact.css';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Installation de 
// - react-hook-form | npm i react-hook-form
// - @hookform/resolvers | npm i @hookform/resolvers
// - yup | npm i yup

const Contact = () => {

// On supprime les useState, l'appel à {useState}, les onChange
// const [name, setName] = useState(null);
// etc

  const schema = yup
  .object ({
    name: yup
    .string()
    .max(50)
    .required("Requis : merci de rentrer vos nom et prénom"), // doubles quotes ici : ""

    email: yup
    .string()
    .email("Merci de rentrer une adresse email valide")
    .max(255)
    .required("Requis : merci de rentrer une adresse mail"),

    phone: yup
    .number()
    .typeError("Merci de rentrer un numéro de téléphone valide")
    .required("Requis : merci de rentrer un numéro de téléphone"),

    message: yup.string().required("Requis : merci de rentrer un message"),
  })
  .required();

  const { register, formState: {errors}, handleSubmit} = useForm ({resolver: yupResolver(schema)});

  const onSubmit = () => {
    alert('Merci pour votre message')
  }

  return (
    <>
      <h1 className='h1-contact'>Formulaire de contact</h1>

      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-content'>
          
          <label htmlFor='name' className='label-contact'>Nom et prénom : </label>
          <input 
            className='input-contact' 
            type='text' 
            id='name' 
            name='name' 
            placeholder='Nom et prénom' 
            // onChange={(e) => setName(e.target.value)}
            {...register('name')}
          />
          {errors.name && <p id='c-yup'>{errors.name.message}</p>}
          
          <label htmlFor='email' className='label-contact'>Adresse mail : </label>
          <input 
            className='input-contact' 
            type='email' 
            id='email' 
            name='email' 
            placeholder='machin@truc.com'
            {...register('email')}
          />
          {errors.email && <p id='c-yup'>{errors.email.message}</p>}
          
          <label htmlFor='phone' className='label-contact'>N° téléphone : </label>
          <input 
            className='input-contact' 
            type='text' 
            id='phone' 
            name='phone' 
            placeholder='01234567'
            {...register('phone')}
          />
          {errors.phone && <p id='c-yup'>{errors.phone.message}</p>}

          <label htmlFor='Sujet' className='label-contact'>Sujet : </label>
          <select 
            className='select-contact' 
            name='subject'
            {...register('subject')}
          >
            <option selected>Sélectionner l'objet de la demande</option>
            <option value='devis'>Devis</option>
            <option value='question'>Question</option>
            <option value='autre'>Autre</option>
          </select>

          <label htmlFor='message' className='label-contact'>{' '} Message : </label>
          <textarea 
            className='message-contact'
            name='message'
            id='message'
            cols='20'
            rows='10'
            placeholder='Merci de poser vos question ou donner vos commentaire'
            {...register('message')}
          ></textarea>
          {errors.message && <p id='c-yup'>{errors.message.message}</p>}

          <label className='label-contact'>
            <input type="checkbox" />En cochant cette case, j'accepte de recevoir des informations sur les différentes offres disponibles.
          </label>

          <button className='button-contact' type='submit' value='Envoyer'>Envoyer</button>

        </div>
      </form>
    </>
  )
}

export default Contact