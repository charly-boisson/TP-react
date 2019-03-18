const evenements = [
  {
  idObject: 1,
  titre: "Evenement 1",
  lieu: "Lieu1",
  date: "18/02/2019",
  description: "Description1",
  peutVenirAccompagne: false,
  codeVestimentaire: "Code Vestimentaire 1 "
  },
  {
  idObject: 2,
  titre: "Titre2",
  lieu: "Lieu2",
  date: "18/02/2019",
  description: "Description2",
  peutVenirAccompagne: true,
  codeVestimentaire: "Code Vestimentaire 2"
  },
  {
  idObject: 3,
  titre: "Toto Titre3",
  lieu: "Lieu3",
  date: "18/02/2019",
  description: "Description3",
  peutVenirAccompagne: true,
  codeVestimentaire: "Code Vestimentaire 3"
  }
];


export const DEFAULT_STATE = {
  evenements,
  isOpen: false,
  searchTerm: "",
  idObject: "",
  titre: "",
  lieu: "",
  date: "",
  description: "",
  peutVenirAccompagne: "",
  codeVestimentaire: "",
  error: "",
  hackers: [],
  notifications: [],
  isLoading: true,
}
