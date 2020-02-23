import React from "react";
import Date from "../Date/index"


class Time extends React.Component {
  constructor() {
      super();

      const today = Date;

      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      var dateTime = Date+' '+time;

      this.state = {
          time: time
      };
  }
}
export default Time

