// 1. 安装 react-router-dom：yarn add react-router-dom --save

// 2. 我们需要使用 ReactRouter 的容器组件
// 2.1 BrowserRouter 浏览器的 history API, history 模式，路径没有 # 号
// 2.2 HashRouter 通过 hash 路由，路径后面有 #
// 2.3 MemoryRouter 在内存中管理路由，要 ReactNative 中使用

// 3. 跑通基本路由：
// 3.1 需要从 react-router-dom 中导入 HashRouter、Route 组件
// 3.2 HashRouter 尽量放在应用的顶层，HashRouter 要接收一个子节点
// 3.3 在 HashRouter 下面配置 Route；Route 组件有两个属性，path 和 component；Route 组件的作用当页面中的路径（hashRouter # 后面的就是路径）和 Route 的 path 属性的值一样时，就会渲染 component对应的组件

// 4. 路由的匹配规则：把页面地址栏中路径从 /home 变为 /home/abc，发现 Home 组件依然在页面中；这是因为路由匹配是模糊匹配的，只要开头匹配，就认为匹配成功，就会显示对应的组件；如果有一个组件，你想让它任何地方都显示，把它的 path 设为 / 即可

// 5. Link 组件: 功能和 VueRouter 的 router-link 组件的功能类似，可以设置一个 to 属性，值是一个路径，点击它的时候可以把页面中 url 的路径切换到 to 属性指定的路径；
// Link 会被渲染成一个 a 标签，但是咱们开发的时候尽量不要写 a 标签；因为路由不仅有 hash 模式还是 history 模式；写 Link 它会自动根据模式切换路径；

// 6. 嵌套路由：例如在某个页面下面还有二级导航，例如 /user 下还有 /user/add 和 /user/list
// 6.1 如果在 /user 下面有嵌套路由，我们需要在 /user 对应的组件中添加 Route 组件；新添加的 Route 组件的 path 是嵌套路由，如 /user/add component 就是嵌套路由对应的组件

// 7. 编程式导航：用代码切路由；所有被路由渲染的组件，它的 props 中都有路由的信息，通过 props 可以取得路由信息；其中 props.history.push() 是用来切换路由的；参数接收一个你想去往的路径

// 8. 动态路由：动态路由路径中有一段是不固定的，/user/detail/:id 最后这一段 /:id 就是动态的了，动态路由是用来传递数据的；这个路由一般也是嵌套的，所以需要 配置 Route 组件；在路由对应的组件中，如果要获取动态路由参数：props.match.params 对象；






