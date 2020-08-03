import { createSelector } from "reselect";

const selectBooking = state => state.booking;

export const selectIsSlotReload = createSelector(
    [selectBooking],
    booking => booking.isSlotReload
)

export const selectIsSubmit = createSelector(
    [selectBooking],
    booking => booking.isSubmit
)

export const selectToggleModal = createSelector(
    [selectBooking],
    booking => booking.toggleModal
)

export const selectBookingFromStore = createSelector(
    [selectBooking],
    booking => booking.booking
)

export const selectBookingForView = createSelector(
    [selectBooking],
    booking => booking.bookingView
)
