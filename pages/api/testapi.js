// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/testapi?slug=python
import * as fs from 'fs'
export default function handler(req, res) {
  fs.readFile(`language_data/${req.query.slug}.json`,"utf-8",(err,data)=>{
    if(err){
      res.status(500).json("No such a blog found")
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
  
}
