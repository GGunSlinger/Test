module.exports = {
  accounts: [
    {
      id: "12345",
      name: "Alice",
      email: "admin",
      password: "123",
      roles: ["admin"],
      permissions: ["read:any_account", "read:own_account"]
    },
    {
      id: "67890",
      name: "bob",
      email: "bob@email.com",
      password: "pAsSWoRd!",
      roles: ["subscriber"],
      permissions: ["read:own_account"]
    }
  ],
  posts: [
    {
      id: "1",
      name: "first post",
      img: "https://255320.selcdn.ru/main/12345678910.jpg",
      post_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi odit dicta expedita. Maxime, quo? Quo optio, reiciendis magni sapiente tempora accusantium dignissimos, saepe repudiandae reprehenderit molestiae odit sit in aspernatur vitae suscipit debitis enim. Sapiente quos rem, recusandae est adipisci laudantium possimus itaque officia, facilis odio, nesciunt saepe praesentium!"
    },
    {
      id: "2",
      name: "second post",
      img: "https://255320.selcdn.ru/main/12345678910.jpg",
      post_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi odit dicta expedita. Maxime, quo? Quo optio, reiciendis magni sapiente tempora accusantium dignissimos, saepe repudiandae reprehenderit molestiae odit sit in aspernatur vitae suscipit debitis enim. Sapiente quos rem, recusandae est adipisci laudantium possimus itaque officia, facilis odio, nesciunt saepe praesentium!"
    },
    {
      id: "3",
      name: "third post",
      img: "https://255320.selcdn.ru/main/12345678910.jpg",
      post_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi odit dicta expedita. Maxime, quo? Quo optio, reiciendis magni sapiente tempora accusantium dignissimos, saepe repudiandae reprehenderit molestiae odit sit in aspernatur vitae suscipit debitis enim. Sapiente quos rem, recusandae est adipisci laudantium possimus itaque officia, facilis odio, nesciunt saepe praesentium!"
    }
  ],
  post: {}
};
