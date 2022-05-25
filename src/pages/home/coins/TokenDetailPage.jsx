import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import axios from "axios";

const TokenDetailPage = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const serverUrl = process.env.REACT_APP_BACKEND_URL;
  const url = `${serverUrl}/api/v1/tokens`;

  useEffect(() => {
    const getToken = () => {
      axios
        .get(`${url}/${id}`)
        .then((res) => {
          setCoin(res.data.json());
        })
        .catch((e) => console.log(e))
    };
    getToken();
  }, [id]);


  return (
    <div>
      <Link to="/">
      <button>back to home</button>
      </Link>
      <h4> {coin.name}</h4>
    </div>
  )
}

export default TokenDetailPage;
