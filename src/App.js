import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import dataElement from './Data';

function App() {
  const card = dataElement.map((item, index) => {
    return (
       <><Card
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl} />
        {index !== dataElement.length - 1 && <hr className="section--divider" />}
        </>
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="location">
          {card}
      </section>      
    </div>
  );
}

export default App;
