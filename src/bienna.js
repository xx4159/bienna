import React from 'react';
import ReactDom from 'react-dom';

require('./bienna.scss');

function Bienna(props) {
  return <div id="bienna" className="bienna">
    <div className="bienna__wrap">
      <div className="bienna__inner">
        <div className="bienna__header">{ props.title }</div>
        <div className="bienna__body">{ props.text }</div>
      </div>
      <button type="button" id="biennaClose" className="bienna__button">OK</button>
    </div>
  </div>;
}

const element = (
  <Bienna title="title" text="text" />
);

ReactDom.render(
  element,
  document.getElementById('root')
);
