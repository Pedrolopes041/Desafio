import CardItem from "../_components/card";
import { getUser } from "../api/user/route";

const Profile = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <>
      <CardItem age={user.age} biography={user.biography} name={user.name} street={user.street} />
    </>
  );
};

export default Profile;
