import axios from 'axios';
import { useState, useEffect } from 'react';

import { GetBlock } from '../GetBlock';
import { Header } from '../Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import { PostBlock } from '../PostBlock';
import style from './App.module.scss';

function App() {

  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!users.length)
      axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
        .then(function (response) {
          const users = response.data.users.sort(function (x, y) {
            return x.registration_timestamp - y.registration_timestamp;
          });
          setUsers(users)

        })
        .catch(function (error) {
          alert(error.message);
        })
        .then(function () {
          // always executed
        });
  }, [users]);


  const showMoreUsers = () => {
    const moreUsers = users.length + 6
    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=' + moreUsers)
      .then(function (response) {
        const users = response.data.users.sort(function (x, y) {
          return x.registration_timestamp - y.registration_timestamp;
        });
        setUsers(users)
      })
  }


  useEffect(() => {
    if (!positions.length)
      axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then(function (response) {
          setPositions(response.data.positions);
        })
        .catch(function (error) {
          alert(error.message);
        })
  }, [positions]);


  let token = 0;

  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      token = data.token;

      return token;

    })
    .catch(function (error) {
    });

  // var formData = new FormData();
  // // file from input type='file' 
  // var fileField = document.querySelector('input[type="file"]');
  // formData.append('position_id', 2);
  // formData.append('name', 'Jhon');
  // formData.append('email', 'Jhon@gmail.com');
  // formData.append('phone', '+380955388485');
  // formData.append('photo', fileField.files[0]);
  // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
  //   method: 'POST',
  //   body: formData,
  //   headers: {
  //     'Token': token,
  //   },
  // })
  //   .then(function (response) { return response.json(); })
  //   .then(function (data) {
  //     console.log(data);
  //     if (data.success) {

  //     } else {

  //     }
  //   }).catch(function (error) {

  //   });








  return (
    <div className={style.app} >
      <div className={style.container}>
        <Header />
        <InfoBlock />
        <GetBlock users={users} showMoreUsers={showMoreUsers} />
        <PostBlock positions={positions} />
      </div>

    </div>
  );
}

export default App;
