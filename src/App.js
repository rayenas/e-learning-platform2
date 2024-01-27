import './App.css';
import Navbar from './nav/Navbar';
import Navbarl from './nav/Navbarl';

function App() {
  // Define some dummy user information
  const accountInfo = {
    name: "Rayen",
    photo: "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/365412593_3316195845272031_3087395920138562957_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=4eYUTYXr2r4AX8DX5DE&_nc_ht=scontent.ftun16-1.fna&oh=00_AfCdHyJpFxi7jHiKwl-kb0UkLPmZqAKXahYzZiV_nvJ0-Q&oe=65B94206"
  };

  return (
    <div className="App">
      <Navbar accountInfo={accountInfo} />
      {/* Assuming you also need to pass accountInfo to Navbarl */}
      <Navbarl accountInfo={accountInfo} />
    </div>
  );
}

export default App;
