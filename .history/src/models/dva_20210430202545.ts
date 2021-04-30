export default{
    namespace:'dva', //调用model的时候，通过命名空间调用，不要和其他的model同名

    state:{},//状态，跟react中的state类似，和redux中保存的state一样

    effect:{},//调用服务端接口，获取数据

    reducer:{},//更新state

}