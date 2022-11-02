import React from 'react'
import './Contact.css'

const Contact = () => {

// On supprime les useState, l'appel à {useState}, les onChange

  return (
    <>
      <h1 className='h1-contact'>Formulaire de contact</h1>

      <form className='contact-form'>
        <div className='form-content'>
          
          <label htmlFor='name' className='label-contact'>Nom et prénom : </label>
          <input 
            className='input-contact' 
            type='text' 
            id='name' 
            name='name' 
            placeholder='Nom et prénom' 
            
          />
          
          <label htmlFor='email' className='label-contact'>Adresse mail : </label>
          <input 
            className='input-contact' 
            type='email' 
            id='email' 
            name='email' 
            placeholder='machin@truc.com'
            
          />
          
          <label htmlFor='phone' className='label-contact'>N° téléphone : </label>
          <input 
            className='input-contact' 
            type='text' 
            id='phone' 
            name='phone' 
            placeholder='01234567'
            
          />

          <label htmlFor='Sujet' className='label-contact'>Sujet : </label>
          <select className='select-contact' name='subject'>
            <option selected>Sélectionner l'objet de la demande</option>
            <option value='devis'>Devis</option>
            <option value='question'>Question</option>
            <option value='autre'>Autre</option>
          </select>

          <label htmlFor='message' className='label-contact'>Message : </label>
          <textarea 
            className='message-contact'
            name='message'
            id='message'
            cols='20'
            rows='10'
            placeholder='Merci de poser vos question ou donner vos commentaire'
            
          ></textarea>

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