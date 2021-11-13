
import './App.css';
import Profile from './Profil/Profile';

function App() {
  const data=[
    {
      FullName:"Rami",
      Bio:"man",
      Profession:"Student",
    },
    {
      FullName:"Karim",
      Bio :"man",
      Profession :"teacher",
    },
    {
    FullName:"sahar",
      Bio:"women",
      Profession:"Student",
    }
  ]
  const handClick=(name)=>alert(`le prenom est ${name}`)
  return (
    <div className="App">
      <Profile exemple={data} func={handClick}>
        <img src="image.jfif"/>
      </Profile>
    </div>
  );
}

export default App;
