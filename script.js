import http from 'k6/http';
import { sleep } from 'k6';

// export default function() {
//   for (var i = 1; i <= 1; i++) {
//     // var id = Math.floor(Math.random()*10000000);
//     var id  = 9000000;
//     http.get(`http://localhost:8090/related/pg/${id}`);
//   }
// }

export default function() {
  for (var i = 10000115; i < 10001115; i++) {
    var payload = JSON.stringify({
      id: i,
      name: 'Some Crazy Name',
      price: 20,
      img: 'http://lorempixel.com/640/480/fashion',
      cat: 'Department',
      link: 'http://lorempixel.com/640/480/fashion',
    });
    var params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    http.post('http://localhost:8090/related/pg/', payload, params);
  }
}
