// const urlBaseG = require('../services/githubService')
const urlBaseF = require("../services/facebookService")

require("dotenv").config();
module.exports = {
  async get(req, res) {
    try {
      const resultFace = await urlBaseF.get(`me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender%2Cfirst_name%2Clast_name%2Clocation&access_token=${process.env.FACE_TOKEN}`); //(`https://graph.facebook.com/v5.0/me?fields=id%2Cname%2Caddress%2Cbirthday%2Cemail%2Cgender%2Cfirst_name%2Clast_name%2Clocation&access_token=EAAIbgFzeGfcBAKYXzVYzvaot1VS2m6C7WIz34JlhZCu5bTyqC9T9TZCjDR8qIj49KGdyVCcMMZCZA99sesbhjqLCyZCBEahKoyp8mx1wFPLH6RyDZAwmYnGPxVZCDavURwpaPDuKusHbXFOnN8oVmEBPKycRofrPQ2EcAkap5ouWOLGvjY3lkZBISDQTH18Ge4qTWyCjEnC0ninjTdV1ReJkFd35ciu4PWP8ksYCuETscQZDZD`);

      const {
        id,
        name,
        last_name,
        birthday,
        gender,
        email,
        picture
      } = resultFace.data;

      //console.log("facebook_profile", resultFace);

      const profile = {
        id,
        name,
        last_name,
        birthday,
        gender,
        email,
        picture
      };


      return res.json(profile);
    } catch (err) {
      console.error("ERROR: Problemas com o a Aplicação!");
    }
  }
};