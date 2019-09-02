import {CHANGE_INPUT_VALUE,HANDELE_CLICK,HANDELE_DELETE_ITEM} from './actionTypes'
const defaultStore ={
  inputValue:'',
  list:[]
}
export default (state=defaultStore,action)=>{
  if(action.type===CHANGE_INPUT_VALUE){
    const newState=JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type===HANDELE_CLICK){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue=''
    return newState
  }
  if(action.type===HANDELE_DELETE_ITEM){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value,1)
    return newState
  }
  return state
}