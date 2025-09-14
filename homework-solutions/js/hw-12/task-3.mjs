// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
//       Пример:
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell
//           email: Shanna@melissa.tv
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

function getUsers() {
  const response = fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  }).then((response) => response.json());
  return response;
}

function getAlbums() {
  const response = fetch('https://jsonplaceholder.typicode.com/albums', {
    method: 'GET',
  }).then((response) => response.json());
  return response;
}

function getPhotos() {
  const response = fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET',
  }).then((response) => response.json());
  return response;
}

// возвращает массив альбомов с кол-вом фото вида
//       Album name 1 (10 photos)
//       Album name 2 (100 photos)
//
function getUserAlbumsList(userId, albumsList, photosList){
  const userAlbums = albumsList.filter((element) => element.userId === userId);
  // console.log(`user == ${userId} >> albums number == ${userAlbums.length})`)
  const albums = userAlbums.map((album) => {
    let count = 0;
    photosList.forEach((photo) => {
      if (photo.albumId === album.id) {
        count++;
      }
    });
    // console.log(`user == ${userId} >> albumId == ${album.id} >> count == ${count})`);
    return `${album.title} (${count} photos)`;


  });
  return albums;
}

// возвращает новый объект юзера вида
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
function getUserObject(rawUserObject, userAlbumsList) {
  return {
    name: rawUserObject.name,
    email: rawUserObject.email,
    phone: rawUserObject.phone,
    company: rawUserObject.company.name,
    albums: userAlbumsList,
  };
}

const fetchPromises = Promise.all([getUsers(), getAlbums(), getPhotos()]);

const result = fetchPromises.then((element) => {
  const usersList = element[0];
  const albumsList = element[1];
  const photosList = element[2];

  const newUsersObject = [];

  usersList.forEach((rawUserObject) => {
    newUsersObject.push(
      getUserObject(
        rawUserObject, 
        getUserAlbumsList(
          rawUserObject.id, 
          albumsList, 
          photosList
        )
      )
    );
  });

  console.log(newUsersObject);
});
