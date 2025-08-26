const User = require('../model/UserModel') 
const bcrypt = require('bcrypt');


module.exports = class UserController {

    static login (req, res) {
        res.render('login')
    }


    static async loginPost(req, res) {
    const { name, email, password } = req.body

    // find user
    const user = await User.findOne({ where: { email: email } })

    res.status(200).json(user)
  

    if (!user) {
      try {
        res.status(401).json({ Message: 'Usuário não encontrado' })
      } catch (error) {
        console.log(error)
      }

      return

    }

}


static async register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).json({ message: 'Nome obrigatório' });
    if (!email) return res.status(400).json({ message: 'Email obrigatório' });
    if (!password) return res.status(400).json({ message: 'Senha obrigatória' });

    const userExists = await User.findOne({ where: { email } });
    if (userExists) return res.status(400).json({ message: 'Usuário já cadastrado' });

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro no register:', error);
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
}



    


        


    

}

