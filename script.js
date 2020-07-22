import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 1500,
  duration: '1m',
  // rps: 1000,
  // rps: 100000,
  // stages: [
  //   {duration: '30s', target: 1},
  //   {duration: '30s', target: 10},
  //   {duration: '30s', target: 100},
  //   {duration: '30s', target: 1000}
  // ],
};

export default function() {
  var id = Math.floor(Math.random() * 1000000) + 9000000;
  let res = http.get(`http://localhost:8090/related/pg/${id}`);
  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
}

// export default function() {
//   for (var i = 10000115; i < 10001115; i++) {
//     var payload = JSON.stringify({
//       id: i,
//       name: 'Some Crazy Name',
//       price: 20,
//       img: 'http://lorempixel.com/640/480/fashion',
//       cat: 'Department',
//       link: 'http://lorempixel.com/640/480/fashion',
//     });
//     var params = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//     http.post('http://localhost:8090/related/pg/', payload, params);
//   }
// }