// react
import React from 'react'
// 主容器
import IndexApp from './containers'
// 渲染器
import {render} from 'react-dom'
// redux provider
import {Provider} from 'react-redux'
// react热更新
import {AppContainer} from 'react-hot-loader'
// 仓库
import configureStore from './configureStore'
// 设置div容器
let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

// mountNode是真正的挂载元素
const mountNode = document.getElementById('app');
const store = configureStore();

render(
    <AppContainer>
        <Provider store={store}>
            <IndexApp/>
        </Provider>
    </AppContainer>
    ,
    mountNode
);

// 热更新
if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}