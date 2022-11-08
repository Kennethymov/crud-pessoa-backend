import User from './User';  

(async () => {
  const user = await User.findOne({
    where: { id: 1 }
  });
  console.log(user?.dataValues);
  process.exit(0);
})();