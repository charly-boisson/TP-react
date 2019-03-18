import React from "react";

const FormEvent = ({ handleSubmit, handleChange, validateForm, id, title, body, userId}) =>

  <div className="formEvent">
    <form onSubmit={handleSubmit}>
      <label>Id : </label>
      <input id="id" type="number" required value={id} onChange={handleChange} ></input><br />
      <label>Titre : </label>
      <input id="title" type="text" required value={title} onChange={handleChange} ></input><br />
      <label>Body : </label>
      <input id="body" type="text" value={body} onChange={handleChange} ></input><br />
      <label>Id user : </label>
      <input id="userId" type="number" value={userId} onChange={handleChange} ></input><br />
      <button type="submit" disabled={validateForm}>Créer</button>
    </form>
  </div>

export default FormEvent;
