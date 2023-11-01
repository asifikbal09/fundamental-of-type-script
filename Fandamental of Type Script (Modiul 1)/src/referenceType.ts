//Reference type --> Object

const user: {
  company: "Programming Hero"; //type -->literal type
 readonly firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Asif",
  lastName: "Limon",
  isMarried: false,
};

// user.firstName="Tamim" Error
