import React, { Component } from "react";

import { LmGrid, LmColumn } from "grid";

export default class App extends Component {
  data = [];
  constructor() {
    super();

    for (let i = 0; i < 1000; i++) {
      this.data.push({
        f1: `field 1 ${i}`,
        f2: `field 2 ${i}`,
        f3: `field 3 ${i}`,
        f4: `field 4 ${i}`,
        f5: `field 5 ${i}`
      });
    }
  }
  render() {
    return (
      <div>
        <LmGrid data={this.data}>
          <LmColumn name="test 1" field="f1" />
          <LmColumn name="test 2" field="f2" />
          <LmColumn name="test 3" field="f3" />
          <LmColumn name="test 4" field="f4" />
          <LmColumn name="test 5" field="f5" />
        </LmGrid>
      </div>
    );
  }
}
