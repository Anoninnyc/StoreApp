import React, { Component } from 'react';
import Product from './product';

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      store: [],
      storeDisplay: [],
      filtered: false,
      sorted: false,
    };
  }

  getStore() {
    $.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js', (data, err) => {
      this.setState({
        store: JSON.parse(data).products,
        storeDisplay: JSON.parse(data).products,
      });
    });
  }

  filter() {
    this.setState({
      storeDisplay: !this.state.filtered?this.state.storeDisplay.filter(product => product.msrpInCents>2600):this.state.store,
      filtered: !this.state.filtered,
    });
  }

  sort() {
    this.setState({
      storeDisplay: this.state.storeDisplay.sort((a, b) => a.msrpInCents - b.msrpInCents),
      sorted: !this.state.sorted,
    });
  }

  render() {
    const storeFetched=!this.state.store.length;

    return (
      <div>
        {storeFetched?<a className="waves-effect waves-light btn accept" onClick={() => { this.getStore(); }}> Get Store info! </a>:null}
        {!storeFetched?<a className="waves-effect waves-light btn accept" onClick={() => { this.filter(); }}> {!this.state.filtered?"Display over $26":"Display All"}</a>:null}
        {!storeFetched?<a className="waves-effect waves-light btn accept" onClick={() => { this.sort(); }}> Sort by price </a>:null}


        <div id="productList">{this.state.storeDisplay.length?this.state.storeDisplay.map(storeItem =>
          <Product 
            key={storeItem.name}
            createdAt={storeItem.createdAt}
            imageArray={storeItem.mainImage.meta}
            price={String(storeItem.msrpInCents)}
            name={storeItem.name}
          />
        ):null}
        </div>
      </div>

    );
  }
}

export default App;
