import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <h1 class = 'h1-contact'>Formulaire de contact</h1>

      <form class='contact-form'>
        <div class='form-content'>
          
          <label for='name' class='label-contact'>Nom et prénom : </label>
          <input 
            class='input-contact' 
            type='text' 
            id='name' 
            name='name' 
            placeholder='Nom et prénom' 
          />
          
          <label for='email' class='label-contact'>Adresse mail : </label>
          <input 
            class='input-contact' 
            type='email' 
            id='email' 
            name='email' 
            placeholder='machin@truc.com'
          />
          
          <label for='phone' class='label-contact'>N° téléphone : </label>
          <input 
            class='input-contact' 
            type='text' 
            id='phone' 
            name='phone' 
            placeholder='01234567' 
          />

          <label for='Sujet' class='label-contact'>Sujet : </label>
          <select class='select-contact' name='subject'>
            <option selected>Sélectionner l'objet de la demande</option>
            <option value='devis'>Devis</option>
            <option value='question'>Question</option>
            <option value='autre'>Autre</option>
          </select>

          <label for='message' class='label-contact'>Message : </label>
          <textarea 
            class='message-contact'
            name='message'
            id='message'
            cols='20'
            rows='10'
            placeholder='Merci de poser vos question ou donner vos commentaire'
          ></textarea>

          <label class='label-contact'>
            <input type="checkbox" />En cochant cette case, j'accepte de recevoir des informations sur les différentes offres disponibles.
          </label>

          <button class='button-contact' type='submit' value='Envoyer'>Envoyer</button>

        </div>
      </form>
    </>
  )
}

export default Contact