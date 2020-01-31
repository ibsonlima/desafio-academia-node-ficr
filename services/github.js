const axios = require('axios');
module.exports = {



    async show(req, res) {
        try {

            const apiGit = await axios.get('https://api.github.com/users/thymendes')
            const {
                name,
                login,
                html_url,
                bio,
                repos_url,
                avatar_url,
                location
            } = apiGit.data;

            gitnome = {
                nome: name,
                login: login,
                Url: html_url,
            }

            return res.json(gitnome)

        } catch (error) {
            return res.json(error);
        }


    }


}