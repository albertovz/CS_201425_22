import './App.css';
import React, { useEffect, useState } from 'react';

var var_id;

function App(props) {

  const [usernames, setUsername] = useState([]);

  // const { users, onAdd, onRemove } = props;
  const url = 'http://localhost:3000/api_v1/user/';

  useEffect(() => {
    fetch(`${url}users`)
      .then((response) => {
        return (
          response.json()
        )
      })
      .then((usernames) => {
        return (
          setUsername(usernames.statusMsg.rows)
        )

      })
  }, [])

  const onRegister = () => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;
    var phone_number = document.getElementById('phone-number').value;
    // alert(username)
    const data = {
      user: username,
      email: email,
      psw: psw,
      phone_number: phone_number
    }
    alert('Usuario registrado correctamente')
    fetch(`${url}register/?username=${data.user}&email=${data.email}&password=${data.psw}&phone_number=${data.phone_number}`, { method: 'POST' })
      .then((response) => {
        fetch(`${url}users`)
          .then((response) => {
            return (
              response.json()
            )
          })
          .then((usernames) => {
            return (
              setUsername(usernames.statusMsg.rows)
            )

          })
      })


  }

  const onRemove = (data) => {
    alert('Usuario eliminado correctamente')
    fetch(`${url}remove/?id=${data.id}`, { method: 'DELETE' })
      .then((response) => {
        fetch(`${url}users`)
          .then((response) => {
            return (
              response.json()
            )
          })
          .then((usernames) => {
            return (
              setUsername(usernames.statusMsg.rows)
            )

          })
      })

  };

  const onUpgradeBtn = (data) => {
    fetch(`${url}users/?id=${data.id}`, { method: 'GET' })
      .then((response) => {
        return (
          response.json()
        )
          .then((usernames) => {
            return (
              setUsername(usernames.statusMsg.rows)
            )

          })
      })

    usernames.map(user => {
      if (data.id === user.id) {
        const info = {
          username: user.username,
          email: user.email,
          psw: user.password,
          phone_number: user.phone_number
        }

        document.getElementById('username-upgrade').value = info.username;
        document.getElementById('email-upgrade').value = info.email;
        document.getElementById('psw-upgrade').value = info.psw;
        document.getElementById('phone-number-upgrade').value = info.phone_number;

        var_id = user.id;
      }
    })

  }

  const onUpgrade = () => {

    usernames.map(user => {
      console.log(var_id, user.id)
      if (var_id === user.id) {

        var name = document.getElementById('username-upgrade').value;
        var mail = document.getElementById('email-upgrade').value;
        var password = document.getElementById('psw-upgrade').value;
        var phone = document.getElementById('phone-number-upgrade').value;

        const info = {
          username: name,
          email: mail,
          psw: password,
          phone_number: phone
        }
        alert('Usuario actualizado correctamente')
        fetch(`${url}update?username=${info.username}&email=${info.email}&password=${info.psw}&phone_number=${info.phone_number}&id=${var_id}`,
          { method: 'PUT' })
          .catch(err => console.error(err))
          .then((response) => {
            return (
              response.json()
            )
              .then((usernames) => {
                return (
                  setUsername(usernames.statusMsg.rows)
                )

              })
          })

        fetch(`${url}users`,
          { method: 'GET' })
          .then((response) => {
            return (
              response.json()
            )
          })
          .then((usernames) => {
            return (
              setUsername(usernames.statusMsg.rows)
            )

          })
      }
    })

  }

  return (

    <section>
      <div>
        <form>
          <div id="container">
            <div className='class-color-left'>
              <h1>Nuevo usuario</h1>
              <label htmlFor="email"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="username" id="username" />

              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" id="email" />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" id="psw" />

              <label htmlFor="phone-number"><b>Phone Number</b></label>
              <input type="text" placeholder="Phone Number" name="phone-number" id="phone-number" />
              <hr />

              <button type="submit" className="registerbtn" onClick={onRegister}>Agregar usuario</button>
            </div>

            <div className='class-color-right'>
              <h1>Editar usuario</h1>
              <label htmlFor="email"><b>Username</b></label>
              <input type="text" placeholder="Username" name="username" id="username-upgrade" />

              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Email" name="email" id="email-upgrade" />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Password" name="psw" id="psw-upgrade" />

              <label htmlFor="phone-number"><b>Phone Number</b></label>
              <input type="text" placeholder="Number" name="phone-number" id="phone-number-upgrade" />
              <hr />

              <button type="submit" className="registerbtn" onClick={onUpgrade}>Actualizar usuario</button>
            </div>

          </div>
        </form>
      </div>

      <div>
        <div>
          <table border='1'>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {usernames.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.phone_number}</td>
                    <button className='btn-upgrade' onClick={() => onUpgradeBtn(user)}>Editar</button>
                    <div key={user.id}>
                      <button className='btn-delete' onClick={() => onRemove(user)}>Eliminar</button>
                    </div>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>



  )

}

export default App;
