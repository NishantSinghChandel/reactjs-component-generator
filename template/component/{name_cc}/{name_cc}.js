import React, {Component} from 'react';
import './{{name_cc}}.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as {{name_cc}}Actions from "../../store/{{name_cc}}/actions";
export default class {{name_cc}} extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-{{name_sc}}">Hello! component {{name_cc}}</div>;
    }
  }
// export default connect(
//     ({ {{name_cc}} }) => ({ ...{{name_cc}} }),
//     dispatch => bindActionCreators({ ...{{name_cc}}Actions }, dispatch)
//   )( {{name_cc}} );