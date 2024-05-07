"use server";

import CardItem from "../_components/card";

const Profile = async () => {
  const {user} = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`, {
    method: "GET",
    cache: "no-cache"
  }).then((res) => res.json());



  console.log(user)
  if (!user) {
    return null;
  }

  return (
    <>
      <CardItem
        age={user.age}
        biography={user.biography}
        name={user.name}
        street={user.street}
      />
    </>
  );
};

export default Profile;
