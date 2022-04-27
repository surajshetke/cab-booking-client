import axios from 'axios';
import endpoints from './endpoints.json'

const ServerInstance = axios.create({baseURL:`${endpoints.serverURL}/api/v1`})

export default ServerInstance;