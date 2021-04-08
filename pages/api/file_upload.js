import multer from 'multer';
import initMiddleware from '../../libs/init-middleware';
const fs = require('fs');

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const multerAny = initMiddleware(
  upload.any()
);
/*
type NextApiRequestWithFormData = NextApiRequest & {
  files: any[],
}
*/
export const config = {
  api: {
      bodyParser: false,
  },
}
//
export default async function (req, res){
  try{
    await multerAny(req, res);
    if (!req.files?.length || req.files.length > 1) {
      res.statusCode = 400;
      res.end();
      return;
    }
//console.log("len=", req.files.length)
    const blob= req.files[0];
console.log("originalname=", blob.originalname)
    var originalname = blob.originalname
    var dir_base = "/home/naka/work/node/react/nextjs_3_9file/"
    var dir_public = dir_base + "public/uploads/"
    var new_name = "temp_" + originalname
    fs.rename(dir_public+ originalname , dir_public + new_name, (err) => {
      if (err) throw err;
    });    
//console.log(dir_base)
//console.log(blob)
    res.json({});
  } catch (err) {
      console.log(err);
      res.status(500).send(); 
  }   
};

