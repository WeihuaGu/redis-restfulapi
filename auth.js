const isValidToken = (token) => {
  const str=Buffer.from(token, 'base64').toString('ascii');
  if(str.substring(0, str.length - 1) === process.env.TOKEN)
	return true;
  else
	return false;
}
 
const auth = async (req, res, next) => {
  if(process.env.AUTH=='true'){
    const { token } = req.headers; // 假设令牌在请求头中的字段名为 "token"
    if (token && isValidToken(token)) 
      next();
    else 
    // 令牌验证失败，返回认证失败的响应
      res.status(401).json({ status: 'failure', message: 'Authentication failed' });
  }
  else
     next() 

};
 
module.exports = auth;
