## vue3

### 基本语法  

```js
vue.createApp({
    template:""
    data(){//vue3中一定要选择方法来使用data否则会报错
    return {
        
    }
}
})
```

动态绑定一个对象

```html
<body>
    <div id="app">
        {{message}}
        <div v-bind="obj">yes</div>
    </div>
    <script>
        Vue.createApp({
            data() {
                return {
                    message: "hello world",
                    value: "style",
                    obj: {
                        name: "ZHANGSAN",
                        age: 18,
                        height: 1.88
                    }
                }
            }
        }).mount("#app")
    </script>

</body>
```

