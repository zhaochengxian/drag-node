# drag-node(拖拽配置页面生成--后端部分)

## Technology
```
node
mongodb
mongoose

```
## Third party package

```
nodemon--代码监控维持服务
GraphQL--开发中

```

### how to use

```
npm run dev or yarn dev

```
## the following is the api des（restful）
### Api-get(查询页面列表)


| paramsName         | Type                                  | Default Value  | Description                          |
| ------------------ | ------------------------------------- | -------------- | ------------------------------------ |
| status             | string                                | 1              | 页面状态 1开启，0 关闭                        |
| pageName           | string                                |                | 页面名称                      |
| pageNum           | string                                |                | 页码                     |
| pageSize          | string                                |                | 每页数据                   |

### Api-post(页面生成)


| paramsName         | Type                                  | Default Value  | Description                          |
| ------------------ | ------------------------------------- | -------------- | ------------------------------------ |
| status             | string                                | 1              | 页面状态1开启，0 关闭                  |
| pageName           | string                                | -              | 页面名称                           |
| backgroundImage    | string                                | -              | 运营app或者小程序分享背景图 |
| shareImage         | String                                | -              | 运营app或者小程序分享右下角图                 |
| paperwork.         | String                                | -              | 分享文案              |
| remark             | String                                | -              | 备注                            |
| pageConfig         | String                                | -              | 页面配置信息json数组                        |

### Api-put(页面更新)


| paramsName         | Type                                  | Default Value  | Description                          |
| ------------------ | ------------------------------------- | -------------- | ------------------------------------ |
| id                | string                                | 1              | 页面id                |
| status             | string                                | 1              | 页面状态1开启，0 关闭                  |
| pageName           | string                                | -              | 页面名称                           |
| backgroundImage    | string                                | -              | 运营app或者小程序分享背景图 |
| shareImage         | String                                | -              | 运营app或者小程序分享右下角图                 |
| paperwork.         | String                                | -              | 分享文案              |
| remark             | String                                | -              | 备注                            |
| pageConfig         | String                                | -              | 页面配置信息json数组                        |

### Api-delete(页面删除)

| paramsName         | Type                                  | Default Value  | Description                          |
| ------------------ | ------------------------------------- | -------------- | ------------------------------------ |
| id                | string                                | 1              | 页面id                |

### Api-put(页面关闭)

| paramsName         | Type                                  | Default Value  | Description                          |
| ------------------ | ------------------------------------- | -------------- | ------------------------------------ |
| id                | string                                | 1              | 页面id                |
| status             | string                                | 1              | 页面状态1开启，0 关闭                  |

### add params demo

```
 {
        status: 1,
        pageName: '页面名称',
        backgroundImage: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653551031&t=ab35ef12fad3a0b01451ff93ac0fc773',
        shareImage: 'https://img2.baidu.com/it/u=2147843660,3054818539&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',
        paperwork: '分享文案',
        remark：'备注',
        pageConfig:[
            {
                  id:'1',
                  modelType: '1',
                  price: '价格',
                  priceFont: '12',
                  priceColor: 'red',
                  url:'图片跳转地址',
                  image:'https://img2.baidu.com/it/u=2147843660,3054818539&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=312'
                  type:'活动类型' 
                 children?: [
                     {
                         id:'1.1',
                         modelType: '1',
                         price: '价格',
                         priceFont: '12',
                         priceColor: 'red',
                         url:'图片跳转地址',
                         image:'https://img2.baidu.com/it/u=2147843660,3054818539&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=312'
                         type:'活动类型' 
                     }
                 ]
            }
           
        ]
        
    }

```

### 示范图片

![image](https://github.com/zhaochengxian/drag-front-end/blob/ed4858aa74df9f4e7f9badb1535611126bea9b69/1.png)
### Drag and drop configuration to generate page front-end code

[github](https://github.com/zhaochengxian/drag-front-end).
