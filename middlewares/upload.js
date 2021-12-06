const multer=require('multer')
const path=require('path')

// set up storage
const storage=multer.diskStorage({
    destination:'client/public/uploads',
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})

// init upload
const upload=multer({
    storage:storage,
    limits:{fileSize:1000000},
        fileFilter:function(req,file,cb){
            const fileTypes=/jpeg|jpg|png|gif/;

            const extname=fileTypes.test(path.extname(file.originalname).toLowerCase())
            const mimeType=fileTypes.test(file.mimetype)

            if(extname&&mimeType){
                return cb(null,true)
            }else{
                cb('Error:Images only');
            }
        }
})
module.exports=upload