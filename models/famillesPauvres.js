const mongoose = require('mongoose');

const schema = mongoose.Schema


const famillesPauvresschema = new schema({

    num_dossier: {
        type: String,
        required: true,
        value: "CRTGHF"

    },
    // بيانات خاصة بصاحب الحق
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    
    date_n: {
        type: Date,
        required: true
    },
    lieu_n: {
        type: String
    },

    localisation: {
        type: [String],
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    num_tele: {
        type: Number,
        required: true
    },
    cin: {
        type: Number,
        required: true
    },
    type_Carte_traitement: {
        type: String,
        required: true
    },
    num_securite_sociale: {
        type: Number,
        required: true
    },
  
    // 
    // بيانات خاصة بالقرين
    nom_m: {
        type: String,
        required: true
    },
    prenom_m: {
        type: String,
        required: true
    },
    
    date_n_m: {
        type: Date,
        required: true
    },
    lieu_n_m: {
        type: String
    },
    
    cin_m: {
        type: Number,
        required: true
    },
    // الحالة المدنية
    // حالة وفاة
    Deces: {
        type: Boolean
    },
    // حالة طلاق

    divorce: {
        type: Boolean
    },
    // حالة اعاقة
    handicap: {
        type: Boolean

    },
    malade: {
        type: String

    },
      //
      // المهنة
      travail: {
        type: String,
        required: true
    },
    // مكان عمل الزوج
    lieu_travail_mari: {
        type: String

    },
    lieu_travail_femme: {
        type: String

    },
    // الأبناء
    fils: [{
        nom_f: String,
        prenom_f: String,
        date_n_f: Date,
        annee_scolaire: String,
        sexe_f: String,
        taille_f: String,

    }],
    // وضع مقر السكن
    detailes: {
        type: String

    },
    image: {
        type: [String]

    },
    Commentaire: {
        type: String
    }



}
)

const familles = mongoose.model('familles', famillesPauvresschema)
module.exports = familles

// module.exports = Person = mongoose.model('person',Userchema)