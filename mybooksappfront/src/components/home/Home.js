import React, {Components} from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div>   
        <h1>
          Mike Ya camate pofavo
        </h1>
        <Link to="/api/authors" >
        <button>Show me the Mortys</button>
        </Link>

        <Link to="/api/authors" >
        <button>Agrega un Morty</button>
        </Link>


    </div>
  )



export default Home;