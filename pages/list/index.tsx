import { GetStaticProps } from "next";

export default function Home({ user }) {
  return (
    <div>
      <img src={user.avatar_url} alt={user.name} width="80" style={{ borderRadius: 40 }} />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/luanperosa');
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 20
  }
};
