/*
 * @Author: lfx
 * @Date: 2019-12-16 23:51:35
 * @LastEditTime: 2019-12-16 23:55:56
 * @LastEditors: lfx
 * @Description: 顶部组件->时间\天气\地点栏
 */
const m = window.m
export default {
  view: () => {
    return m('main', [
      m('h1', { class: 'title' }, '标题')
    ])
  }
}
