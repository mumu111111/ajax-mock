function setRouter(app){ 
 var router = app; 

// function setRouter(app) {
//     var router = app;
//
//
//
        router.get('/loadmore',function(req,res){
        var curIdx= req.query.index
        var len= req.query.length
        var data=[]
        for(var i=0;i<len;i++){
            data.push('内容'+(parseInt(curIdx)+i))
        }
        res.send(data)
    })

}
//     router.get('/loadMore', function(req, res) {
//     res.send(['ruoyu','dddd','dddddd','dadada','dadadada'])})}
 module.exports.setRouter = setRouter