let userFormData = "";

function createServer() {
    const http = require('http');
    const port = 80;

    let server = http.createServer(function (req, res) {
        res.writeHead(200, {"Content-type": "text/plain"});

        if (req.method === 'POST') {
            console.log("Recieved POST");
            req.on('data', function (data) {
                userFormData = data.toString('utf8');
                // console.log(formData);
            });
            req.on('end', function () {
                //let POST = JSON.parse(body);
                console.log(userFormData);
            });
        }
    });

    server.listen(port);
}

newUserEmail = () => {
    const mail = require('@sendgrid/mail');
    const userEmail = userFormData.Email;
    const userName = userFormData.Name;
    const userCompany = userFormData.Company_Name;
    const userPhoneNum = userFormData.Phone_Number;
    const userLocation = userFormData.location;
    const userJobType = userFormData.Job_Type;
    const userMessage = userFormData.Message;

    mail.setApiKey('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');

    const message = {
        to : 'crtalbot98@gmail.com',
        from : 'user@email.com',
        message : 'Protek test',
        subject : "This is a test Email",
        text: "Test Email",
        html: "<h1>Large text</h1>"
    };

    mail.send(message).then((sent) => {
        console.log(sent);
        console.log("sent");
    })
};

createServer();
newUserEmail();
