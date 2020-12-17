import { ReactNode } from 'react'
import loadable from '@loadable/component'

export interface RouterRecordRaw {
    path: string;
    component: ReactNode;
    meta?: {
        title: string
    };
    children: RouterRecordRaw
}

const routes = [
    {
        path: '/',
        component: loadable(() => import('../views')),
        exact: true
    },
    {
        path: '/signin',
        component: loadable(() => import('../views/signin'))
    }
]

export default routes
