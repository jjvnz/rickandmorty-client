import Card from "./components/Card/Card";
import { Container } from './components/styles/Container.styled';
import { useQuery, gql } from '@apollo/client';
import Global from "./components/styles/Global.styled";
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    body: '#002449'
  },
  mobile: '768px',
}


const App = () => {

  const GET_CHARACTERS = gql`
      query Getcharacters {
        characters{
          results{
            image
            name
            id
            status
            type
            gender
            species
            created
            location{
              name
            }
            origin{
              name
            }
          }
        }
      }
    `;

  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
    <ThemeProvider theme={theme}>
      <Global/>
       <Container>
          {data.characters.results?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
    </ThemeProvider>
    </>
  )
};

export default App;
