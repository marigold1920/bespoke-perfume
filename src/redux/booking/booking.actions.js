import BookingActionTypes from "./booking.types";

export const changeSlot = timeBookingId => ({
    type: BookingActionTypes.CHANGE_SLOT,
    payload: timeBookingId
})

export const changeBooking = (name, value) => ({
    type: BookingActionTypes.CHANGE_BOOKING,
    payload: { name, value }
})

export const changeSlotReload = () => ({
    type: BookingActionTypes.CHANGE_SLOT_RELOAD
})

export const addNewPerfume = perfume => ({
    type: BookingActionTypes.ADD_NEW_PERFUME,
    payload: perfume
})

export const removePerfume = perfumeId => ({
    type: BookingActionTypes.REMOVE_PERFUME,
    payload: perfumeId
})

export const toggleModalCreate = () => ({
    type: BookingActionTypes.TOGGLE_MODAL_CREATE
})

export const toggleModalView = (booking) => ({
    type: BookingActionTypes.TOGGLE_MODAL_VIEW,
    payload: booking
})

export const toggleSubmit = () => ({
    type: BookingActionTypes.TOGGLE_SUBMIT
})

export const clearBooking = initTimeBookingId => ({
    type: BookingActionTypes.CLEAR_BOOKING,
    payload: initTimeBookingId
})
