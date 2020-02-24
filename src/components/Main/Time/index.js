import React from "react";
import Date from "../Date/index"
import moment from "moment"

class Time extends React.Component {
  constructor() {
      super();

      this.state = {
          time: moment().format("dddd hh a")
      };
  }
}
export default Time

