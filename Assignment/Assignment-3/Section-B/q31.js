const user = {
    name: "A",
    address: { city: "Old", zip: 123 }
};
const updated = {
    ...user,
    address: {
        ...user.address,
        city: "New"
    }
};

console.log(updated);