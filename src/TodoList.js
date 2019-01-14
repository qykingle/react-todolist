import React, { Component } from 'react'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
// import { Input, Button, List } from 'antd'
import store from './store'
import { getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    // console.log(this.state)
    // 输入框内容变更
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    // 提交
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render () {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  componentDidMount () {
    const action = getTodoList()
    store.dispatch(action)
  }
  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
    // console.log(e.target.value)
  }
  handleStoreChange () {
    // console.log('store change')
    this.setState(store.getState())
  }
  handleBtnClick () {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete (index) {
    // index.persist()
    const action = getDeleteItemAction(index)
    // console.log(index)
    store.dispatch(action)
  }
}

export default TodoList
