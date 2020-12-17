import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import router from './router'
const App: FC = () => {
    return (
        <Router>
            <Switch>
                {
                    router.map(item => {
                        console.log('item: ', item)
                        return (
                            <Route
                                component={item.component}
                                key={item.path}
                                path={item.path}
                                exact={item.exact}
                            />
                        )
                    })
                }
            </Switch>
        </Router >
    )
}

export default App
