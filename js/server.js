createServer = () => {
    const http = require('http');
    const port = 8080;

    let server = http.createServer(function (req, res) {
        res.writeHead(200, {"Content-type": "text/plain"});
        console.log("Server running at port "+port);

        getData(req);
    });

    server.listen(port);
};

getData = (req) => {
    let userFormData, parsedFormData = "";

    if (req.method === 'POST') {
        console.log("Recieved POST");

        req.on('data', function (data) {
            userFormData = data.toString('utf8');
            parsedFormData = JSON.parse(userFormData);
            newUserEmail(parsedFormData);
        });

        req.on('end', function () {
            console.log(parsedFormData.Email);
        });

        newUserEmail(parsedFormData);
    }
};

newUserEmail = (userFormData) => {
    const nodeMailer = require("nodemailer");
    // const xoauth2 = require('xoauth2');
    const userEmail = userFormData.Email;
    const userName = userFormData.Name;
    const userCompany = userFormData.Company_Name;
    const userPhoneNum = userFormData.Phone_Number;
    const userLocation = userFormData.Location;
    const userJobType = userFormData.Job_Type;
    const userMessage = userFormData.Message;

    let transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "crtalbot98@gmail.com",
            pass: "ChanCrtMay31998"
        }
    });

    let mailOptions = {
        from: userEmail,
        to: "chandlertalbot5@hotmail.com",
        subject: userName+" - "+userJobType,
        text: "Name: "+userName+"\n\n"+"Email: "+userEmail+"\n\n"+"Phone Number: "+userPhoneNum+"\n\n"+"Job Type: "+userJobType+"\n\n"+"Location: "+userLocation+"\n\n"+"Company: "+userCompany+"\n\n"+"Message: "+userMessage
    };

    if(userFormData.Email !== undefined || userFormData.Name !== undefined){
        transporter.sendMail(mailOptions, function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log("sent");
            }
        })
    }
};

createServer();
