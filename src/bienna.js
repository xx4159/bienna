import React from 'react';
import ReactDom from 'react-dom';

require('./bienna.scss');

class Bienna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.open = this.open.bind(this);
  }

  open() {
    console.log(this);
  }

  render() {
    return (
      <div id="bienna" className="bienna">
          <div className="bienna__wrap">
            <div className="bienna__inner">
              <div className="bienna__header">{ this.props.title }</div>
              <div className="bienna__body">{ this.props.text }</div>
            </div>
            <button type="button"
              id="biennaClose"
              className="bienna__button"
              onClick={ this.open }>OK</button>
          </div>
        </div>
    );
  }
}

const element = (
  <Bienna title="title" text="text" />
);

ReactDom.render(
  element,
  document.getElementById('root')
);
