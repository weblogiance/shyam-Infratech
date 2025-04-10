import { CONTACT_API_ENDPOINT } from "../../api";
import { apiConnection } from "../../Apiconnection";

import toast from 'react-hot-toast';

export const GetTouch = async (data) => {
    try {
        console.log("GetTouch data:", data);
        const response = await apiConnection('POST', CONTACT_API_ENDPOINT.GET_TOUCH_API_URL, data);
        
        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        console.log('GetTouch response:', response.data);

        // Show success toast
        toast.success(response?.data?.message || 'Message sent successfully!',{
            position:'bottom-right',
            duration: 3000,
            style: {
                background: '#4caf50',
                color: '#fff',
                fontSize: '16px',
                padding: '16px',
            },
            iconTheme: {
                primary: '#fff',
                secondary: '#4caf50',
            },
        });
        
        return response.data;
    } catch (error) {
        console.error('Error in GetTouch:', error);

        // Show error toast
        toast.error(error?.response?.data?.message || error.message || 'Something went wrong!');
        
        throw error;
    }
}



export const GetTouchContact = async (data) => {
    try {
        console.log("Contact data:", data);
        const response = await apiConnection('POST', CONTACT_API_ENDPOINT.CONTACT_ME_API_URL, data);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        console.log('Contact response:', response.data);

        // ✅ Show success toast
        toast.success(response?.data?.message || 'Contact message sent successfully!', {
            position: 'bottom-right',
            duration: 4000,
            style: {
                border: '1px solid #22c55e',
                padding: '12px 16px',
                color: '#166534',
            },
            iconTheme: {
                primary: '#22c55e',
                secondary: '#f0fdf4',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error in Contact:', error);

        // ❌ Show error toast
        toast.error(error?.response?.data?.message || error.message || 'Something went wrong!', {
            duration: 4000,
            style: {
                border: '1px solid #ef4444',
                padding: '12px 16px',
                color: '#7f1d1d',
            },
            iconTheme: {
                primary: '#ef4444',
                secondary: '#fef2f2',
            },
        });

        throw error;
    }
}


