// token: 叫做令牌，不是和cookie或者session一样的一种技术，是一种用于身份校验机制；

// sign: 签名

// token: 一般用户登录的时候，客户端会传递用户的用户名和密码给服务端，服务端匹配后，会根据用户id、登录时间等信息生成一个字符串，并且还要给这个字符串加密，甚至还需要签名；
// 生成token以后会返回给客户端，客户端下次再请求的时候要带着这个token来，服务器就会认识这个token，接着对token进行校验，如果通过继续响应，如果不通过就返回错误，要求用户重新登录；

// 常见的token使用方式：
// 1. 把token放到cookie中，http请求时会自动带着token
// 2. 服务端把token作为数据返回客户端，客户端需要手动保存token；可以存在localStorage中，下次再请求的时候要把token从ls中取出来，再作为参数发送给服务端；
// 3. 服务端返回token后，可以把token放到请求头里面，让服务端从请求头里面取；

// 和服务端同事沟通确定用哪种方式传递token；