//ЗАДАНИЕ 2

//Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback,
//а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  return Promise.all(updatedUsers);

  // 2й вариант решения вместо return Promise.all(updatedUsers);

  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(updatedUsers);
  //   }, 0);
  // });

  // return promise;
};

const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */

setTimeout(() => {
  console.log("%cЗАДАНИЕ 2:", "color: green; font-size: 18px");

  toggleUserState(users, "Mango").then(logger);
  toggleUserState(users, "Lux").then(logger);
}, 3000);
