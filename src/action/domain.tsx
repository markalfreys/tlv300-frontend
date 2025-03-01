import * as api from '../api' 
import { DomainType } from '../types';

export const getDomainDetails = async (domain : DomainType) => {
    try {
        const { data } = await api.getInformation({ domain });
      
        return { success: true, data: data.data, message: 'Domain Fetched Successfully' }
    } catch (error) {
        return { success: false, data: null, message: 'Error Fetching Domain Details' }
    }
}