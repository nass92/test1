
import './App.css';
import React from 'react'
import Na from './components/header'
import BlockArticle from './components/Article'
const App = () => {
  const [crypto, setCrypto] = React.useState('')
  return (
    <React.Fragment>
      <Na setCrypto={setCrypto} />
      <h1 className='text-center mb-4'>Blockchain</h1>
      <main>
        <div className='row p-4'>
          <BlockArticle crypto={crypto} />
        </div>
      </main>

    </React.Fragment>
  );
}

export default App;
