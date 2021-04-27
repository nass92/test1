
import './App.css';
import React from 'react'
import Na from './components/header'
import BlockArticle from './components/Article'
import Title from "./components/Title"
const App = () => {
  const [crypto, setCrypto] = React.useState('')
  return (
    <React.Fragment>
      <Na setCrypto={setCrypto} />
      <Title />
      <main>
        <div className='row p-4'>
          <BlockArticle crypto={crypto} />
        </div>
      </main>

    </React.Fragment>
  );
}

export default App;
