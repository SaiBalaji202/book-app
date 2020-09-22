export interface Customer {
  name: string;
  email?: string;
  phone?: string;
}

export interface Vehicle {
  regNo: string;
  brand: string;
  model: string;
  fuelType: string;
}

export interface Booking {
  bookingId: number;
  customer: Customer;
  vehicle: Vehicle;
  bookingDate: Date;
  autoPicupAndDrop: boolean;
}

// Use form with following fields
// Customer Name - Only allow characters
// Customer Phone number - Only numbers characters (optional)
// Customer Email - Email format (optional)
// Vehicle registration number - Only allow Alphabets & numbers
// Brand - Dropdown
// Model - Dropdown
// Fuel Type - radio button
// Date, Time - date picker, time picker
// Auto pickup & drop - checkbox

// Except phone number & email - all fields are mandatory

// Book Service - button

// Menu - View service appointments

// Use a table to display saved data.
// Show list of appointments ordered by recent date & time - in table
// Each appointments (row) must have a cancel option inside the table ( button)
