const gestionPage = {
    sendData : (res, data) => {
        res.writeHead(200, {'Content-Type': data.contentType});
        res.write(data.pageHTML);
        res.end();  
    },
    prepareData : (objExt) => {
        let dot = objExt.pathname.indexOf(".");
        let extension = objExt.pathname.substring(dot, objExt.pathname.length);

        let data = {
            contentType: "",
            encodage: "",
            dossier: "",
            fichier: objExt.pathname.substring(1, objExt.pathname.length)
        }

        // Gestion des différentes extensions.
        switch(extension){
            case ".html":
                data.contentType = "text/html";
                data.encodage = "UTF-8";
                data.dossier = "views/";
                break;
            case ".css":
                data.contentType = "text/css";
                data.dossier = "assets/css/";
                break;
            case ".js":
                data.contentType = "application/javascript";
                data.dossier = "assets/js/";
                break;
            case ".png":
                data.contentType = "image/png";
                data.dossier = "assets/img/";
                break;
            case ".jpg":
                data.contentType = "image/jpeg";
                data.dossier = "assets/img/";
                break;
            case ".svg":
                data.contentType = "image/svg+xml";
                data.dossier = "assets/img/";
                break;
            case ".ico":
                data.contentType = "image/x-icon";
                data.dossier = "assets/img/";
                break;
            case ".ttf":
                data.contentType = "";
                data.dossier = "assets/fonts/";
                break;
            case ".ogg":
                data.contentType = "audio/ogg";
                data.dossier = "assets/sounds/";
                break;
            default: console.log("Vous n'avez pas défini cette extension ! (ERROR FROM : gestion-page.js)")
        }
        return data;
    }
}

module.exports = gestionPage;
