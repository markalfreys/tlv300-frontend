import axios from './axios'
import { DomainType } from '../types'


export const getInformation = (data : { domain: DomainType }) => axios.post(`/api/domain`, data)