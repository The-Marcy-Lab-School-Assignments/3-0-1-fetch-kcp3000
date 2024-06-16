const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
  return fetch(userUrl)
    .then((res) => {
      return {
        status: res.status,
        ok: res.ok,
        url: res.url
      };
    });
};

export const getUsers = () => {
  const fetchPromise = fetch(userUrl)
  return fetchPromise.then((res) => {
    return res.json()
  })
    .then((data) => {
      return (data)
    })
};

export const getUserPosts = (userId, maxNumPost) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => {
      return res.json();
    })
  // .then((data) => {
  //   console.log(data)
  // })
};

export const createNewUser = (newUserData) => {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(newUserData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
}
