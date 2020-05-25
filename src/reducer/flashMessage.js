import {ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE} from '../constants/index'



const flashMessages = (state=[],action={}) => {
  switch(action.type){
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          // 生成一个随机id
          id:Math.random()*10e6>>>2,
          type:action.message.type,
          text:action.message.text

        }
      ]
    case DELETE_FLASH_MESSAGE:
      // 删除消息
      for(let i = 0;i < state.length;i++){
        if(action.id === state[i].id){
          state.splice(i,1);
          return [...state]
        }
      }
    default:
      return state;
  }
}

export default flashMessages;