import React, { Component } from "react";
import {Container} from './{{name_pc}}.styled';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as {{name_cc}}Actions from "../../store/{{name_cc}}/actions";
export default class {{name_pc}} extends Component {
  render() {
    return <Container>{{name_pc}}</Container>;
  }
}
// export default connect(
//     ({ {{name_cc}} }) => ({ ...{{name_cc}} }),
//     dispatch => bindActionCreators({ ...{{name_cc}}Actions }, dispatch)
//   )( {{name_cc}} );