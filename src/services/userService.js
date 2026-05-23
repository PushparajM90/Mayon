const customerStorageKey = 'mayon-customer'

export function validateMobileNumber(mobileNumber) {
  return /^[6-9]\d{9}$/.test(mobileNumber)
}

export function fetchRegisteredCustomer() {
  const storedCustomer = localStorage.getItem(customerStorageKey)

  if (!storedCustomer) {
    return null
  }

  try {
    const customer = JSON.parse(storedCustomer)
    return validateMobileNumber(customer.mobileNumber) ? customer : null
  } catch {
    return null
  }
}

export function saveRegisteredCustomer(mobileNumber) {
  const customer = {
    mobileNumber,
    registeredAt: new Date().toISOString(),
  }

  localStorage.setItem(customerStorageKey, JSON.stringify(customer))
  return customer
}
