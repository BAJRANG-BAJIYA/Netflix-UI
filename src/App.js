
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner'
import Row from './Components/Row'
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row 
        title = "NETFLIX ORIGINALS" 
        fetchUrl = {requests.fetchNetFlixOriginals}
        isLargeRow = {true}
        />
        <Row title = "Trending Now" fetchUrl = {requests.fetchTreding}/>
        <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
        <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
        <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
