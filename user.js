class User
{
    constructor(fName, lName, userName, userEmail, fullName, userPhone, cc, amount, date)
    {
        this.firstName = fName.slice(1, -1);
        this.lastName = lName.slice(1, -1);
        this.user = userName.slice(1, -1);
        this.email = userEmail.slice(1, -1);
        this.name = fullName.slice(1, -1);
        this.phone = userPhone.slice(1, -1);
        this.costCenterNum = cc.slice(4, -1);
        this.amount = Number(amount);
        let tempDate = date.slice(1, -1).split('/');
        this.date = new Date(tempDate[2],tempDate[1], tempDate[0]);
    }

    getStructure()
    {
        return {
            name: this.lastName + " " + this.firstName,
            phone: this.phone.match(/\d/g).join(''),
            person:{
                firstName: this.firstName,
                lastName: this.lastName
            },
            amount: this.amount,
            date: this.date.toLocaleDateString(),
            costCenterNum: this.costCenterNum
        };
    }
}

module.exports = User;