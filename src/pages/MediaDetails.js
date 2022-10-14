import React, { useEffect, useState } from "react";
import Media from "./Media";
import { useParams } from "react-router-dom";
import axios from "axios";

export const MediaDetails = () => {
  const [media, setMedia] = useState({});
  const { _id } = useParams();

  const getMediaDetails = async () => {
    const result = await axios.get(`https://ironrest.herokuapp.com/moodify/${_id}`);
    const data = result.data;
    setMedia(data);
  };

  useEffect(() => {
    getMediaDetails(_id);
  }, [_id]);

  return (
    <div>
      <Media {...media} />
    </div>
  );
};
