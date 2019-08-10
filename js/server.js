createServer = () => {
    const http = require('http');
    const port = 8080;

    let server = http.createServer(function (req, res) {
        res.writeHead(200, {"Content-type": "text/plain"});
        console.log("Server running at port "+port);

        getData(req, res);
    });

    server.listen(port);
};

getData = (req, res) => {
    let userFormData, parsedFormData = "";

    if (req.method === 'POST') {
        req.on('data', function (data) {
            userFormData = data.toString('utf8');
            parsedFormData = JSON.parse(userFormData);
            newUserEmail(parsedFormData);
        });

        newUserEmail(parsedFormData);
    }
};

newUserEmail = (userFormData, server) => {
    const nodeMailer = require("nodemailer");
    const userEmail = userFormData.Email;
    const userName = userFormData.Name;
    const userCompany = userFormData.Company_Name;
    const userPhoneNum = userFormData.Phone_Number;
    const userStreetAddress = userFormData.Street_Address;
    const userZip = userFormData.Zip_Code;
    const userJobType = userFormData.Job_Type;
    const userMessage = userFormData.Message;

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: "protekCorpContact@gmail.com",
            clientId: "104901128016-5uthd23cejj9mb9j893q83oniu48djp9.apps.googleusercontent.com",
            clientSecret: "xTRIvzjwZY1UGKX9a8PYiljb",
            refreshToken: "1/W2V1xfxCX8S1lf9vBRCrXS7Dm_mHOVTGG1Rb-ipEsoE",
            accessToken: "ya29.GlsfB5__e8F0Y6RySaLQKEBE12LJCHZ4LDXQcw7ENhL9jBSY1u-kI2ZVjZsSoPmgOvtYkRI9AloXoWKibnhUa8FWWy_KfOKr3qRplIqrSoZGVqoD2upqhccGmxEw"
        }
    });

    let protekMail = {
        from: 'protekCorpContact@gmail.com',
        to: "turretskid@gmail.com",
        subject: userName+" - "+userJobType,
        text: "Name: "+userName+"\n\n"+"Email: "+userEmail+"\n\n"+"Phone Number: "+userPhoneNum+"\n\n"+"Job Type: "+userJobType+"\n\n"+"Location: "+userStreetAddress+", "+userZip+"\n\n"+"Company: "+userCompany+"\n\n"+"Message: "+userMessage
    };

    let userMail = {
        from: 'protekCorpContact@gmail.com',
        to: userEmail,
        subject: 'Thank you for contacting Protek Corporation',
        text: 'Thank you for contacting Protek Corporation. We will get back to you as soon as possible. If you have any more questions or issues you can call us at: (765)966-3473'
    };

    if(userFormData.Email !== undefined || userFormData.Name !== undefined){
        transporter.sendMail(protekMail, userMail, function(){
        });
        transporter.sendMail(userMail, function(){
        });
    }
};

createServer();
