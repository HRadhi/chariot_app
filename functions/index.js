const functions = require("firebase-functions");
const admin = require ('firebase-admin');

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((email, context) => {
    console.log('hello from function cloud')
    //get user data and add costum claim (admin)
    return admin.auth().getUserByEmail(email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return {
            message: ` Success ! ${email} has been made an admin`
        }
    }).catch(err => {
        return err;
    })
});