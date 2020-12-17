import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import moment from 'moment'
import 'moment/locale/zh-cn'
import './styles/index.less'

moment.locale('zh-cn')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
