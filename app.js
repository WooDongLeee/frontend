
// express 'hello world' 예제 


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require('express');
const app = express();
const port = 8080;

// if (typeof document !== 'undefined'){
//   const documentRef = useRef(document);
//   var container = document.getElementById('map');
//   var options = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3 
//   };

//   var map = new kakao.maps.Map(container, options);
// }

var container = document.getElementById('map');
var options = {
	center: new kakao.maps.LatLng(33.450701, 126.570667),
	level: 3 
};

var map = new kakao.maps.Map(container, options);

