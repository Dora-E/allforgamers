import axios from "axios";
const tokenName = "authToken";

export function apiHandler() {
    // utile pour normaliser la connection à l'API back
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    if (!backendURL)
        throw new Error("fournir URL de base pour effectuer appel AJAX");

    const instance = axios.create({
        // les requêtes effectuées avec axios prennent par défaut l'url du backend
        baseURL: backendURL,
    });

    instance.interceptors.request.use(
        (config) => {
            // Ce code est exécuté avant l'envoi de chaque requête axios
            // important : on configure le type des entêtes en JSON
            config.headers["Content-Type"] = "application/json";

            // on essaie de récupérer le token d'auth dans le local storage
            // READ THE DOC : https://jwt.io/
            // et aussi ... https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
            const localAuthToken = window.localStorage.getItem(tokenName);
            // console.log("auth token ? >>> ", localAuthToken);

            // si le token JWT existe, on l'envoie dans l'entête (header) de chaque requête HTTP partant vers le backend
            // READ THE DOC : https://developer.mozilla.org/fr/docs/Web/HTTP/Headers
            if (localAuthToken) config.headers["x-authenticate"] = localAuthToken; // la clé de l'entête
            // si le token est absent, le serveur rejettera la requête entrante sur les routes protégées ...
            return config;
        },
        (error) => {
            // Do something with request error...
            return Promise.reject(error);
        }
    );

    return instance;
}