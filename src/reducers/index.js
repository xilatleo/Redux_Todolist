import {combineReducers} from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import itemEditing from './itemEditing'

const myReducers = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing

})

export default myReducers