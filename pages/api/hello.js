// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function apiServer(req, res){
  res.json({message: 'from hello.js'})
  console.log('called')
}