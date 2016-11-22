import React from 'react';
import ReactDom from 'react-dom';

require('./bienna.scss');

class Bienna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.close = this.close.bind(this);
  }

  close() {
    console.log(this);
  }

  render() {
    const title = this.props.title;
    const text = this.props.text;

    return (
      <div id="bienna" className="bienna">
        <div className="bienna__wrap">
          <div className="bienna__inner">
            <div className="bienna__header">{ title }</div>
            <div className="bienna__body">{ text }</div>
          </div>
          <button type="button"
            id="biennaClose"
            className="bienna__button"
            onClick={ this.close }>
            OK
          </button>
        </div>
      </div>
    );
  }
}

const element = (
  <Bienna
    title="title"
    text="text" />
);

ReactDom.render(
  element,
  document.getElementById('root')
);
