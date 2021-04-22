import { useState, useEffect } from 'react';

type userTypes = {
  avatar_url: string,
  name: string,
  bio: string
}

export default function Home() {
  const [user, setUser] = useState<userTypes>();

  async function requestData() {
    const response = await fetch('https://api.github.com/users/luanperosa');
    const user = await response.json();

    setUser(user);
  }

  useEffect(() => {
    requestData();
  },[]);
  
  return (
    <div>
      {
        user !== undefined && (
          <>
            <img src={user.avatar_url} alt={user.name} width="80" style={{ borderRadius: 40 }} />
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
          </>
        )
      }
    </div>
  )
}
