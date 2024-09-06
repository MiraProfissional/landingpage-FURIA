import React from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './styles.css';

function CardStreamers(props) {
  const streamer = props.data;

  return (
    <li className="linha-streamer">
      <img
        src={streamer.imagem}
        className="logo-streamers"
        alt={`${streamer.nomeTwitch}-logo`}
      />
      <p>{streamer.nomeTwitch}</p> <p>{streamer.qtdSeguidores}</p>
      <a
        href={streamer.linkTwitch}
        className="link-social-media-streamer"
        rel="noreferrer"
        target="_blank"
      >
        <FaExternalLinkAlt />
      </a>
    </li>
  );
}

export default CardStreamers;

CardStreamers.propTypes = {
  data: PropTypes.shape({
    nomeTwitch: PropTypes.string.isRequired,
    qtdSeguidores: PropTypes.string.isRequired,
    linkTwitch: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
};
