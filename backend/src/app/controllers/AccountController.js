
class AccountController{
	
	// [GET] 
	index(req,res){
		res.send('doandung')
	}
}

module.exports = new AccountController;