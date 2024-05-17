import nodemailer from "nodemailer"
import User from "@/models/participants/userModel"
import bcryptjs from "bcryptjs"


export const sendEmail = async({email, emailType, userId}:any) =>{
    try {

        // Create a hash token based on the user's ID
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

// Update the user document in the database with the generated token and expiry time
        if(emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000
                },
            )
        } else if(emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                },
            )
        }

        // Create a nodemailer transport
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "c067ed76518d1e",
              pass: "058a7aa7c218e6"
            }
          });

        // Compose email options
              const mailOptions = {
                from: 'info@userforce.in',
                to: email,
                subject: emailType === "VERIFY" ? "Welcome to UserForce, Verify your email" : "Reset your password",
                html: `<p>Welcome! We're thrilled that you've joined our participant community. Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}=participants">here</a> to 
                ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"}</p>
                <p>UserForce team</p>`
              }

        // Send the email
              const mailresponse = await transport.sendMail(mailOptions);
              return mailresponse
       
    } catch (error: any) {
        throw new Error(error.message);
        
    }
}