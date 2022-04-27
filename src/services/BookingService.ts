import {API,endpoints} from '../api';
import BookingModel from '../shared/models/BookingModel';

class BookingService{

    static createBooking(booking:BookingModel){
       return API.post(endpoints.api.booking.createBooking,booking)
        
    }

}

export default BookingService;