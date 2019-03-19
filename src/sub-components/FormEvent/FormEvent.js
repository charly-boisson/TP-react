import React from "react";

const FormEvent = ({ handleSubmit, handleChange, validateForm, id, title, body, userId}) =>

  <div className="formEvent">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Id</label>
        <input id="id" type="number" className="form-control" required value={id} onChange={handleChange} placeholder="Entrer id"></input>
      </div>
      <div className="form-group">
        <label>Titre</label>
        <input id="title" type="text" className="form-control" required value={title} onChange={handleChange} placeholder="Entrer titre"></input>
      </div>
      <div className="form-group">
        <label>Body</label>
        <input id="body" type="text" className="form-control" required value={body} onChange={handleChange} placeholder="Entrer body"></input>
      </div>
      <div className="form-group">
        <label>Id user</label>
        <input id="userId" type="number" className="form-control" required value={userId} onChange={handleChange} placeholder="Enter userId"></input>
      </div>
      <button type="submit" className="btn btn-primary" disabled={validateForm} >Créer</button>
    </form>
  </div>

export default FormEvent;
