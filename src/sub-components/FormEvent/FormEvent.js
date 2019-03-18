import React from "react";

const FormEvent = ({ handleSubmit, handleChange, validateForm, idObject, titre, lieu, date, description, peutVenirAccompagne, codeVestimentaire }) =>

  <div className="formEvent">
    <form onSubmit={handleSubmit}>
      <label>Id : </label>
      <input id="idObject" type="text" value={idObject} onChange={handleChange} ></input><br />
      <label>Titre : </label>
      <input id="titre" type="text" required value={titre} onChange={handleChange} ></input><br />
      <label>Lieu : </label>
      <input id="lieu" type="text" required value={lieu} onChange={handleChange} ></input><br />
      <label>Date : </label>
      <input id="date" type="text" value={date} onChange={handleChange} ></input><br />
      <label>Description : </label>
      <textarea id="description" required type="text" value={description} onChange={handleChange} ></textarea><br />
      <label>Peut Venir Accompagne : </label>
      <input id="peutVenirAccompagne" type="text" value={peutVenirAccompagne} onChange={handleChange} ></input><br />
      <label>Code Vestimentaire : </label>
      <input id="codeVestimentaire" type="text" value={codeVestimentaire} onChange={handleChange} ></input><br />
      <button type="submit" disabled={validateForm}>Submit</button>
    </form>
  </div>

export default FormEvent;
