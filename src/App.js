import Card from "./components/Card/Card";
import { Container } from './components/styles/Container.styled';
import { useQuery, gql } from '@apollo/client';


const App = () => {

    const GET_CHARACTERS = gql`
      query Getcharacters {
        characters {
          results {
            id
            name
            status
            species
            type
            gender
            image
            created
          }
        }
      }
    `;

  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
       <Container>
          {data.characters.results.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
    </>
  )
};

export default App;
