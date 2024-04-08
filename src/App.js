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
      <div className='container_content_myname'>
      <div className="content_myname">
        <hr className="section--divider_myname" />
        <h1 className="h1_content_myname" style={{ fontSize: '16px' }}>© Mọi bản quyền thuộc về<span><strong> Huỳnh Vĩnh Tiến</strong></span> - 2024 All rights reserved.</h1>
        </div>
        </div>
    </div>
    
  );
}

export default App;
