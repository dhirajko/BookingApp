const httpRedirect=(req, res, next)=> {
    if (req.protocol === 'https') {
        console.log(req.protocol, req.secure);
        next();
    } else {
        console.log('redirected');
        res.redirect('https://' + req.headers.host + req.url);
    }
};

module.exports=httpRedirect;