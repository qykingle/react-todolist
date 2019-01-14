import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, INIT_LIST_ACTION, DELETE_TODO_ITEM } from './actionTypes'
import axios from 'axios'
// import store from './store'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
export const initListAction = (list) => ({
  type: INIT_LIST_ACTION,
  list
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://bigdata.jdy.com:3337/api/v1/tenantId')
      .then((res) => {
        const action = initListAction(res.data.data)
        dispatch(action)
        // console.log(res)
      })
  }
}
