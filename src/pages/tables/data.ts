interface TableRecord {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email?: string;
  category?: string;
  isBG?: boolean;
}

interface DataTableRecord {
  id: number;
  name: string;
  email: string;
  station: string;
  bookingDate: string;
  expiryDate: string;
  bookingTime: string;
  expiryTime: string;
  userType: string;
  status?: string;
}

const records: TableRecord[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Brown",
    phoneNumber: 3464846456,
    email: "john@site.com",
    category: "Individual",
  },
  {
    id: 2,
    firstName: "Jim",
    lastName: "Green",
    phoneNumber: 3464846456,
    email: "jim@site.com",
    category: "Individual",
  },
  {
    id: 3,
    firstName: "Joe",
    lastName: "Black",
    phoneNumber: 3464846456,
    email: "joe@site.com",
    category: "Individual",
  },
  {
    id: 4,
    firstName: "Edward",
    lastName: "King",
    phoneNumber: 3464846456,
    email: "joe@site.com",
    category: "Group",
  },
  {
    id: 5,
    firstName: "Jim",
    lastName: "Red",
    phoneNumber: 3464846456,
    email: "joe@site.com",
    category: "Company",
  },
];

const dataTableRecords: DataTableRecord[] = [
  {
    id: 1,
    name: "Jonathan",
    email: "jonathan@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 2,
    name: "Harold",
    email: "harold@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 3,
    name: "Shannon",
    email: "shannon@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 4,
    name: "Robert",
    email: "robert@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 5,
    name: "Noel",
    email: "noel@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 6,
    name: "Traci",
    email: "traci@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 7,
    name: "Kerry",
    email: "kerry@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 8,
    name: "Patsy",
    email: "patsy@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 9,
    name: "Cathy",
    email: "cathy@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 10,
    name: "Tyrone",
    email: "tyrone@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 11,
    name: "Jonathan",
    email: "jonathan@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 12,
    name: "Harold",
    email: "harold@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 13,
    name: "Shannon",
    email: "shannon@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 14,
    name: "Robert",
    email: "robert@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
  {
    id: 15,
    name: "Noel",
    email: "noel@example.com",
    station: "Islamabad",
    bookingDate: "2/3/2023",
    expiryDate: "3/3/2023",
    bookingTime: "10:00 am",
    expiryTime: "06: 00 pm",
    userType: "Freelancer",
    status: "paid",
  },
];
export { records, dataTableRecords };
