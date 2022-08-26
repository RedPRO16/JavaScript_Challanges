// setTimeout(() => {
// 	console.log('hello')
// }, 1000)
// ```
// ---

// ```js
// const callback = () => {
// 	console.log('hello')
// }

// setTimeout(callback, 1000)
// ```

// ---

// ```js
// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 1000)

// console.log('D')
// ```

// ---

// ```js
// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 0)

// console.log('D')
// ```

// ---

// ```js
// let a = 10

// const callback = () => {
// 	a = 20
// }

// setTimeout(callback, 1000)

// console.log(a)
// ```

// ---

// ```js
// let a = 10

// const callback = () => {
// 	a = 20
// }
// setTimeout(callback, 0)

// console.log(a)
// ```

// ---

// ```js
let a = 10

const callback = () => {
	a = 20
	console.log(a)
}
setTimeout(callback, 0)
// ```

// ---


// const callback = () => {
// 	return "hello"
// }
// setTimeout(callback, 2000)

