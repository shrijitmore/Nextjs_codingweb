// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/lan
import * as fs from 'fs'
export default async function handler(req, res) {
  let data = await fs.promises.readdir("language_data")
  let myfile;
  let alldata = []
  for(let index = 0; index < data.length;index++){
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(("language_data/" + item), "utf-8")
    alldata.push(JSON.parse(myfile))
  }
  res.status(200).json(alldata)
  // fs.promises.readdir("language_data",(err,data)=>{
  //   let alldata = [];
  //   console.log("data")
  //   data.forEach((item)=>{
  //     fs.readFile(('language_data'+item),(d)=>{
  //     alldata.push(d)  
  //     })
  //   })
  // })
  // res.status(200).json(alldata)
}
