import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/participants/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/app/helpers/participants/mailer";


connect()
// Calls the connect function to establish a connection to the database.


export async function POST(request: NextRequest){
    console.log("inside api participants signup")

// Defines an asynchronous POST request handler.
    try {
        const reqBody = await request.json()
        const {name, email, password} = reqBody
        console.log(name, email, password)
// Parses the request body to extract username, email, and password.

//Checks if a user with the provided email already exists. 
        const user = await User.findOne({email})

//If yes, returns a 400 response.
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

//hash password using bcryptjs.
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

// Saves the new user to the database.
        const savedUser = await newUser.save()
        console.log(name)
        await sendEmail({email, emailType: "VERIFY",
        userId: savedUser._id, firstName: name})
        
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

        //send verification email

        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }

    
}