import HeaderOnly from "~/components/Layout/HeaderOnly"

import Home from "~/Page/Home"
import Following from "~/Page/Following"
import Profile from "~/Page/Profile"
import Upload from "~/Page/Upload"
import Search from "~/Page/Search"

// Router khong dang nhap moi xem duoc
const publicRouters = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/search', component: Search, layout: null},
    
]

// 
const privateRouters = [

]


export { publicRouters, privateRouters}