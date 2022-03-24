import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Card } from 'react-bootstrap';

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ;
  }, [searchTerm])

  const getData = async () => {
    const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
    setData(response.data.items);
    setIsLoading(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getData();
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const listUsers = data.map((user) =>{
    return<Card key={user.id} style={{ width: '18rem' }}>
            <a href={user.html_url}>
            <Card.Img variant="top" src={user.avatar_url} />
            </a>
            <Card.Body>
              <Card.Title>Login: {user.login}</Card.Title>
              <Card.Text>
                Id: {user.id}
              </Card.Text>
            </Card.Body>
          </Card>
  })

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <h3>GitHub Users Results</h3>
      {
        isLoading && <ReactLoading type="spinningBubbles" color="#444"/>
      }
      {listUsers}
    </div>
  );
}

export default GitHub;
