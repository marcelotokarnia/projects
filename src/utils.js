export function isOfferEnabled (offer) {
  const currentTime = +(new Date())
  return offer.isDisabled 
  	? false 
  	: currentTime > offer.starts && (!offer.ends || currentTime < offer.ends)
}