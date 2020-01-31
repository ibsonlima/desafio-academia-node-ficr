const axios = require('axios');

module.exports = {
    async show(req, res) {
        try {
            // const apiGitrepos = await axios.get('https://api.github.com/users/ibsonlima/repos')
            // const {
            //     size,
            //     name,
            //     url
            // } = apiGitrepos.data;

            // const ReposUser = {
            //     size: repo.size,
            //     name: repo.name,
            //     url: repo.url
            // }
            // return console.log('ReposUser');

            const apiGit = await axios.get('https://api.github.com/users/ibsonlima/repos')
            const {
                size,
                name,
                url
            } = apiGit.data;

            gitnome = {
                name: repo.name,
                size: repo.size,
                url: repo.url
            };
            return res.json(gitnome);
            console.log("gitnome");

        } catch (error) {
            return res.json(error);
        }
    }


}