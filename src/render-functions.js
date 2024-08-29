// import { positionToOffset } from "vitest/utils.js";

export const setupPageBasics = (parentEl) => {
  parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

  const statusDiv = parentEl.querySelector('#status');
  const usersUl = parentEl.querySelector('#users-list');
  const postsUl = parentEl.querySelector('#posts-list');
  const newUserForm = parentEl.querySelector('#new-user-form');
  const newUserDiv = parentEl.querySelector('#new-user');

  return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};
/** FEEDBACK: Switch statusDiv and statusInfoObj so that when the tests use it, it doesn't get an error! */
export const renderStatus = (statusDiv, statusInfoObj) => {
  const h2Tag = document.createElement('h2')
  h2Tag.setAttribute('id', 'status-heading')
  h2Tag.textContent = `Info on - ${statusInfoObj.url}`

  const pTag = document.createElement('p')
  pTag.setAttribute('id', 'status-code')

  if (statusInfoObj.ok) {
    pTag.textContent = `Status code: ${statusInfoObj.status}, OK!`
  } else {
    pTag.textContent = `Status code: ${statusInfoObj.status}, FAIL!`
  }
  statusDiv.append(h2Tag, pTag); //test is saying this isn't correct but for the life of me i can't figure out what's wrong with it
};

export const renderUsers = (userUl, users) => {
  userUl.innerHTML = ''
  users.forEach((user) => {
    const list = document.createElement('li')
    list.setAttribute('class', 'user-card')
    /** FEEDBACK: You forgot to add a class of user-card here! */
    const button = document.createElement('button')
    button.setAttribute('data-user-id', `${user.id}`)
    button.textContent = `Load ${user.username}'s posts`

    list.append(button)
    userUl.append(list)

  })

};

export const renderPosts = (postsUl, posts) => {
  postsUl.innerHTML = ''
  /** FEEDBACK: This list item should be inside of the forEach loop! */
  // const list = document.createElement('li')
  posts.forEach((post) => {
    const list = document.createElement('li')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    h2.textContent = `${post.title}`
    p.textContent = `${post.body}`

    list.append(h2, p)
    postsUl.append(list)

  })//i think i broke it
}

export const renderNewUser = (newUserDiv, newUserInfo) => {
  /** FEEDBACK: You may need to clear out the newUserDiv before appending elements to it! */

  newUserDiv.innerHTML = ''

  const h2Tag = document.createElement('h2')
  h2Tag.textContent = `${newUserInfo.username}`

  const pTag = document.createElement('p')
  pTag.textContent = `${newUserInfo.email}`

  newUserDiv.append(h2Tag, pTag)
};