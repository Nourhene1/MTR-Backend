// models/DevisCompression.js
import mongoose from "mongoose";

const devisCompressionSchema = new mongoose.Schema({
    user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  diametre_fil: { type: Number, required: true },
  diametre_exterieur: { type: Number, required: true },
  diametre_alesage: { type: Number },
  diametre_guide: { type: Number },
  diametre_interieur: { type: Number },
  longueur_libre: { type: Number, required: true },
  nombre_spires: { type: Number },
  pas: { type: Number },
  quantite: { type: Number, required: true },
  matiere: { type: String, enum: ["Fil ressort noir", "Galvanisé", "Inox"], required: true },
  sens_enroulement: { type: String, enum: ["Gauche", "Droite"] },
  type_extremite: { type: String },
  documents: [{ type: String }], // chemins fichiers
  exigences: { type: String },
  remarques: { type: String },
  date_demande: { type: Date, default: Date.now }
});

export default mongoose.model("DevisCompression", devisCompressionSchema);
