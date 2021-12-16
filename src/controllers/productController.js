const productController = {
    
    productCart : function(req, res){
        return res.render('productCart');
    },
    productDetail : function(req, res){
        return res.render('productDetail');
    },
    productCreate : function(req, res){
        return res.render('productCreate');
    },
    productEdit : function(req, res){
        return res.render('productEdit');
    }
}

module.exports = productController;