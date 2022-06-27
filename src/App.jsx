import React from 'react';
import {
  ApolloProvider
} from "@apollo/client";
import Home from './pages/Home';
import { client } from './graphql/config';
import { Container } from 'reactstrap';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';

import 'bootstrap/dist/css/bootstrap.min.css';

// const theme = createTheme();

function App() {
  return (
    <ApolloProvider client={client}>
      <Container
        fluid="sm"
        className='w-auto'
      >
        <Home />
      </Container>
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      {/* <main> */}
      {/* <Box
            sx={{
              // bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
            maxWidth="sm"
          >
            <Container fixed >
              
            </Container>
          </Box> */}
      {/* </main> */}
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
}

export default App;
