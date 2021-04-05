// import { Http } from './http';
// import { API_PREF } from '../consts';
//
// export const isAuth = (email, password) => {
//   return Http.post(`${API_PREF}/auth/signin`, {
//     email,
//     password,
//   });
// };

// fetch(`${endpoint}user/${record.id}/`, {
//   method: 'put',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': `Bearer ${auth}`
//   },
//   body: JSON.stringify(record)
// })
//   .then((result) => result.json())
//   .then((result) => {
//
//     if (result.id) {
//       dispatch(savedUser( result ));
//     } else {
//       dispatch(savingUserError( result ));
//     }
//
//   });
