// Chargement des modules.
const http = require('http');
const url = require('url');
const fs = require('fs');
const gp = require('./my_modules/gestion-page');

// Traitement des requêtes.
let traitementReq = (req, res) => {
    let objExt = url.parse(req.url);

    if(objExt.pathname === '/'){
        objExt.pathname = "/index.html";
    }

    if(objExt.pathname !== null){
        let dataPrepare = gp.prepareData(objExt);
        let data = {
            contentType: dataPrepare.contentType,
            pageHTML: fs.readFileSync(dataPrepare.dossier + dataPrepare.fichier,dataPrepare.encodage)
        }
        gp.sendData(res, data);
    }
}

// On crée le serveur NodeJS.
let serveur = http.createServer(traitementReq);
// On écoute sur le port 8080.
serveur.listen(8080, () => console.log("Le serveur NodeJS est activé !"));