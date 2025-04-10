const GetTouch = require("../Model/GetTouch");
const Contactme = require("../Model/Contact");
const { em } = require("framer-motion/client");

exports.gettouchour = async (req, res) => {
    try {
        const { Email,Message,Name,countryCode,countryName,phone   } = req.body;
        console.log(req.body);
        // Check if all required fields are present
        if (!Name || !Email || !Message || !countryName || !countryCode || !phone) {
            return res.status(400).json(
                {
                     success: false,
                     message: 'All fields are required' 
                }
            );
        }

        // Create a new instance of the GetContent model
        const newContent = new GetTouch({
            Name,
            Email,
            CallInfo: {
                countryCode: countryCode,
                countryName: countryName,
                phone: phone
            },
            Message
        });

        // Save the new content to the database
        await newContent.save();

        res.status(200).json({ success:true,message: 'Content saved successfully',contact:newContent });
    } catch (error) {
        console.error('Error saving content:', error);
        res.status(500).json({  success: true , message: 'Internal server error' });
    }
}

exports.contactme = async (req, res) => { 
    try {
        const { Message , Name, companyName,countryCode,countryName,email,phone,serviceType } = req.body;
        console.log(req.body);
        // Check if all required fields are present
        if (!Name || !email || !Message || !countryName || !countryCode || !phone || !companyName || !serviceType) {
            return res.status(400).json(
                {
                     success: false,
                     message: 'All fields are required' 
                }
            );
        }

        // Create a new instance of the GetContent model
        const newContent = new Contactme({
            Name,
            Email:email,
            CallInfo: {
                countryCode: countryCode,
                countryName: countryName,
                phone: phone
            },
            CompanyName: companyName,
            serviceType: serviceType,
            Message
        });

        // Save the new content to the database
        await newContent.save();

        res.status(200).json({ success:true,message: 'Content Us saved successfully',contact:newContent });
    } catch (error) {
        console.error('Error saving content:', error);
        res.status(500).json({  success: true , message: 'Internal server error' });
    }
}