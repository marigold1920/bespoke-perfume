import BookingActionTypes from "./booking.types";

const INITIAL_BOOKING = {
    name: "",
    type: "",
    age: 18,
    style: "",
    gender: "Nam",
    typePerfume: "25ml",
    perfumeName: "",
    timeBookingId: 0,
    dateBooking: new Date(),
    note: "",
    perfumes: []
}

const INITIAL_STATE = {
    booking: INITIAL_BOOKING,
    bookingView: null,
    isSlotReload: true,
    toggleModal: true,
    isSubmit: false
}

const bookingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookingActionTypes.CHANGE_SLOT:
            return {
                ...state,
                booking: { ...state.booking, timeBookingId: action.payload },
                isSlotReload: false
            }
        case BookingActionTypes.CHANGE_BOOKING:
            return {
                ...state,
                booking: { ...state.booking, [action.payload.name]: action.payload.value }
            }
        case BookingActionTypes.CHANGE_SLOT_RELOAD:
            return {
                ...state,
                isSlotReload: !state.isSlotReload
            }
        case BookingActionTypes.ADD_NEW_PERFUME: {
            const perfumes = state.booking.perfumes;
            perfumes.push(action.payload);
            return {
                ...state,
                booking: { ...state.booking, perfumes }
            }
        }
        case BookingActionTypes.REMOVE_PERFUME: {
            console.log(action.payload);
            return {
                ...state,
                booking: { ...state.booking, perfumes: state.booking.perfumes.filter(perfume => perfume.id !== action.payload) }
            }
        }
        case BookingActionTypes.TOGGLE_MODAL_CREATE:
            return {
                ...state,
                toggleModal: true,
            }
        case BookingActionTypes.TOGGLE_MODAL_VIEW:
            return {
                ...state,
                toggleModal: false,
                bookingView: action.payload
            }
        case BookingActionTypes.TOGGLE_SUBMIT:
            return {
                ...state,
                isSubmit: !state.isSubmit
            }
        case BookingActionTypes.CLEAR_BOOKING:
            return {
                ...state,
                booking: { ...INITIAL_BOOKING, timeBookingId: action.payload },
            }
        default:
            return state;
    }
}

export default bookingReducer;