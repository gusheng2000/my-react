// 封装axios
import axios from "axios";
const baseUrl = '/api'

//封装逻辑
class httpRequest {

    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInSideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            Headers: {}
        }
        return config
    }

    request(options) {
        //这行代码使用了 JavaScript 的对象展开运算符（spread operator），
        //它允许一个表达式在地方被扩展为多个元素（用于数组）或多个键值对（用于对象）。
        //这种语法是在 ES6 (ECMAScript 2015) 中引入的，并在后续版本中得到了增强。
        options = { ...this.getInSideConfig(), options }
        const instance = axios.create()
        //axios 绑定拦截器
        this.interception(instance)
        return instance(options)
    }

    interception(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
}
const request = new httpRequest(baseUrl)
export default request