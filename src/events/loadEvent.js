import loadHandler from "../handlers/loadHandler.js"

const loadEvent = () => {
    window.addEventListener("load", loadHandler);
}

 loadEvent();

 export default loadHandler