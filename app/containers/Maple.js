import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'

import { translate, Interpolate } from 'react-i18next';
import i18n from '../i18n-server';

function mapStateToProps(state) {
  return { lng: state.lng };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}


class Maple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    };
    //React.initializeTouchEvents(true);  //启用触摸事件处理。
  }
  componentWillMount() {
    this.setState({
      test: i18n.t('a:test1')
    });
  }   //服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用,只调用一次
  componentDidMount() {
  }    //客户端都只调用一次，在初始化渲染执行之后立刻调用,只调用一次
  //componentWillReceiveProps(nextProps) {} //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。在该函数中调用 this.setState() 将不会引起第二次渲染。
  //shouldComponentUpdate(nextProps, nextState) {}  //在接收到新的 props 或者 state，将要渲染之前调用。该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。如果确定新的 props 和 state 不会导致组件更新，则此处应该 返回 false。
  //componentWillUpdate(nextProps, nextState) {}  //在接收到新的 props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用。    使用该方法做一些更新之前的准备工作。
  //componentDidUpdate(prevProps, prevState) {}  //在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。     使用该方法可以在组件更新之后操作 DOM 元素。
  //componentWillUnmount() {}   //在组件从 DOM 中移除的时候立刻被调用。   在该方法中执行任何必要的清理，比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。
  test = (a, event) => {
    console.log(a);
    console.log(this);
    console.log(event.target);
    console.log(i18n.t('a:test1'));
  };
  render() {
    return (
      <div>
        <button onClick={ (event) => this.test('ss', event) }>Maple</button>
        {this.props.children}
        <span>{i18n.t('a:test1')}</span>
      </div>
    );
  }
}
//<span>{i18n.t('a:test1')}</span>
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maple)