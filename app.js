// XMLHttpRequest Object
// XMLHttpRequest (XHR) objects are used to interact with servers

let svgRequest = new XMLHttpRequest();

svgRequest.open('get', './assets/SmartWatch.svg')

svgRequest.onreadystatechange = () => {  //ES6
    if (svgRequest.readyState === 4) {
        let svgData = svgRequest.responseXML.documentElement
        console.log(svgData);
        let svgElement = svgRequest.response
        document.getElementById('imageContainer').innerHTML = svgElement
    }
}

svgRequest.send();