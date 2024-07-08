import React from 'react';
import './CommentSection.css';

const CommentSection = () => {
  return (
    <div className='comment-section mt-4 mb-5'>
      <h3>Comentarios</h3>
      <div className='comment bg-light p-3 rounded mb-3'>
        <p>
          <strong>Usuario1:</strong> ¡Me encanta este producto! Muy recomendado.
        </p>
      </div>
      <div className='comment bg-light p-3 rounded mb-3'>
        <p>
          <strong>Usuario2:</strong> El producto llegó en buen estado y a
          tiempo.
        </p>
      </div>
      <div className='comment bg-light p-3 rounded mb-3'>
        <p>
          <strong>Usuario3:</strong> Buen producto, aunque podría mejorar en
          algunos aspectos.
        </p>
      </div>
      <div className='add-comment mt-4'>
        <h4>Agregar un comentario</h4>
        <div className='mb-3'>
          <textarea
            className='form-control'
            placeholder='Escribe tu comentario aquí...'
            rows='3'
          ></textarea>
        </div>
        <button className='btn button-comment'>Enviar</button>
      </div>
    </div>
  );
};

export default CommentSection;
