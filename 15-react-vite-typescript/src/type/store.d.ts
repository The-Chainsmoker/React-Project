/*
 【重点】d.ts 文件仅在没有任何导入时才被视为环境模块声明.如果您提供了一个导入行，
  它现在被视为一个普通的模块文件，而不是全局文件！！！
*/
//import store from ('@/store')

// TS中提供了 ReturnType , 用于获取函数类型的返回值类型
type RootState = ReturnType<typeof import('@/store').getState>
