#安装依赖
npm install

#运行demo01的例子
npm run demo01-dev

#如果要编译和发布
npm run demo01-build

#编写单页面的步骤
JavaScript
创建组件：创建单页面应用需要渲染的组件
创建路由：创建VueRouter实例
映射路由：调用VueRouter实例的map方法
启动路由：调用VueRouter实例的start方法
HTML
使用v-link指令
使用<router-view>标签

#v-link指令
用了这么久的v-link指令，是该介绍一下它了。

v-link 是一个用来让用户在 vue-router 应用的不同路径间跳转的指令。该指令接受一个 JavaScript 表达式，并会在用户点击元素时用该表达式的值去调用 router.go。

具体来讲，v-link有三种用法：

<!-- 字面量路径 -->
<a v-link="'home'">Home</a>

<!-- 效果同上 -->
<a v-link="{ path: 'home' }">Home</a>

<!-- 具名路径 -->
<a v-link="{ name: 'detail', params: {id: '01'} }">Home</a>
v-link 会自动设置 <a> 的 href 属性，你无需使用href来处理浏览器的调整，原因如下：

它在 HTML5 history 模式和 hash 模式下的工作方式相同，所以如果你决定改变模式，或者 IE9 浏览器退化为 hash 模式时，都不需要做任何改变。

在 HTML5 history 模式下，v-link 会监听点击事件，防止浏览器尝试重新加载页面。

在 HTML5 history 模式下使用 root 选项时，不需要在 v-link 的 URL 中包含 root 路径。



#demo01
第一个单页面应用

#demo02
嵌套路由

#demo03
具名路径

#demo04
路由对象

在使用了 vue-router 的应用中，路由对象会被注入每个组件中，赋值为 this.$route ，并且当路由切换时，路由对象会被更新。

路由对象暴露了以下属性：

$route.path
字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news" 。
$route.params
对象，包含路由中的动态片段和全匹配片段的键值对
$route.query
对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，会得到 $route.query.favorite == 'yes' 。
$route.router
路由规则所属的路由器（以及其所属的组件）。
$route.matched
数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
$route.name
当前路径的名字，如果没有使用具名路径，则名字为空。
在页面上添加以下代码，可以显示这些路由对象的属性：



#demo05
让链接处于活跃状态


#basic
是单页面可直接打开运行

#basic/demo06
是钩子函数的讲解

路由的切换过程，本质上是执行一系列路由钩子函数，钩子函数总体上分为两大类：

全局的钩子函数
组件的钩子函数
全局的钩子函数定义在全局的路由对象中，组件的钩子函数则定义在组件的route选项中。

全局钩子函数
全局钩子函数有2个：

beforeEach：在路由切换开始时调用
afterEach：在每次路由切换成功进入激活阶段时被调用
组件的钩子函数
组件的钩子函数一共6个：

data：可以设置组件的data
activate：激活组件
deactivate：禁用组件
canActivate：组件是否可以被激活
canDeactivate：组件是否可以被禁用
canReuse：组件是否可以被重用
切换对象
每个切换钩子函数都会接受一个 transition 对象作为参数。这个切换对象包含以下函数和方法：

transition.to
表示将要切换到的路径的路由对象。
transition.from
代表当前路径的路由对象。
transition.next()
调用此函数处理切换过程的下一步。
transition.abort([reason])
调用此函数来终止或者拒绝此次切换。
transition.redirect(path)
取消当前切换并重定向到另一个路由。
博文链接：http://www.cnblogs.com/keepfool/p/5690366.html
