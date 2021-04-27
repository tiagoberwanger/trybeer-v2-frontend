import { io } from 'socket.io-client';
require('dotenv').config();

const socket = io(process.env.REACT_APP_BASE_URL);

export default socket;
