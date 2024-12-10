import mockjs from "mockjs";

mockjs.mock('/home\/getData',()=>{
    console.log('getDat接口被拦截')
});