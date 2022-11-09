const User = {
  id: 1,
  name: 'Kennethy Magno Oliveira Valerio',
  email: 'kennethymov@gmail.com',
  birthDate: "1991/10/11"
}

const userAlready = {
  name: 'Kennethy Magno Oliveira Valerio',
  email: 'kennethymov@gmail.com',
  birthDate: "1991/10/11"
}

const newUser = {
  name: 'Fulana Siclano Beltrano',
  email: 'fulano123@gmail.com',
  birthDate: "1985/07/27"
}

const newUserWrong = {
  name: 'Fulana Siclano Beltrano',
  email: 'fulano123',
  birthDate: "1985/07/27"
}

const newUserCreated = {
  id: 2,
  name: 'Fulana Siclano Beltrano',
  email: 'fulano123@gmail.com',
  birthDate: "1985/07/27"
}

const userErrorEmail = {email: 'errado@admin.com', password:'secret_admin'}

const adminErrorPassword = {email: 'admin@admin.com', password:'senha_errada'}

export {
  User,
  userAlready,
  newUser,
  newUserWrong,
  newUserCreated,
  userErrorEmail,
  adminErrorPassword
}