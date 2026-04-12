export type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};
