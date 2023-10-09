/*
 * @Author: bukai bukai@163.com.cn
 * @Date: 2023-10-08 16:56:55
 * @LastEditors: bukai bukai@163.com.cn
 * @LastEditTime: 2023-10-08 17:57:45
 * @FilePath: \PPTist\src\shims-vue.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // DefineComponent是一个类型定义，它接受三个类型参数：
  // 1. props类型，定义了组件的props属性的类型；
  // 2. data类型，定义了组件的data属性的类型；
  // 3. methods类型，定义了组件的所有方法的类型。
  // DefineComponent<{}, {}, any>。这意味着它接受任何props类型，任何data类型，和任何methods类型。
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
