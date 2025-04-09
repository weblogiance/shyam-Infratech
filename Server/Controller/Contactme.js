const GetTouch = require("../Model/GetTouch");
const Contactme = require("../Model/Contact");

exports.gettouchour = async (req, res) => {
    try {
        const { Name, Email,Message, countryName , countrycode , number   } = req.body;
        console.log(req.body);
        // Check if all required fields are present
        if (!Name || !Email || !Message || !countryName || !countrycode || !number) {
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
                countycode: countrycode,
                countyName: countryName,
                number: number
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
        const { Name, Email,Message, countryName , countrycode , number , companyName , serviceType } = req.body;
        console.log(req.body);
        // Check if all required fields are present
        if (!Name || !Email || !Message || !countryName || !countrycode || !number || !companyName || !serviceType) {
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
            Email,
            CallInfo: {
                countycode: countrycode,
                countyName: countryName,
                number: number
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