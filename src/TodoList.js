import React, {Component} from 'react'
import {
  CHANGE_INPUT_VALUE,
  HANDELE_CLICK,
  HANDELE_DELETE_ITEM
} from './store/actionTypes'
import {connect} from 'react-redux'
const TodoList = (props)=>{
  const {
    inputValue,
    handleInputChange,
    handleClick,
    handeleDeleteItem,
    list
  } = props
  return(
    <div>
      <div>
        <input onChange={handleInputChange}
               value={inputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li onClick={() => {
              handeleDeleteItem(index)
            }} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
// class TodoList extends Component {
//   render() {
//     const {
//       inputValue,
//       handleInputChange,
//       handleClick,
//       handeleDeleteItem,
//       list
//     } = this.props
//     return (
//       <div>
//         <div>
//           <input onChange={handleInputChange}
//                  value={inputValue} />
//           <button onClick={handleClick}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => {
//               return <li onClick={() => {
//                 handeleDeleteItem(index)
//               }} key={index}>{item}</li>
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store.dispath,props
const mapDispathToProps = (dispath) => {
  return {
    handleInputChange(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value

      }
      dispath(action)
    },
    handleClick(e) {
      const action = {
        type: HANDELE_CLICK
      }
      dispath(action)
    },
    handeleDeleteItem(index) {
      const action = {
        type: HANDELE_DELETE_ITEM,
        value: index
      }
      dispath(action)
    }
  }
}
// TodoList 是一个UI组件经过connect以后就会把他变成一个容器组件
export default connect(mapStateToProps, mapDispathToProps)(TodoList)