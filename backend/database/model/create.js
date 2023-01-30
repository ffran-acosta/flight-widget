const User = require('./User')

const create = async () => {
    const user = new User({ 
        name: 'Franco Acosta', 
        description: 'Full Stack Web Developer', 
        linkedin: 'ffran-acosta', 
        github: 'fran-acosta',
        mail: 'francoaugustoacosta@gmail.com',
    })
    await user.save()
    console.log(user)
}
create()

module.exports = create

