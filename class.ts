class Player {
    personName: string;
    PersonAge: number;
      constructor() {
        this.personName = ""; // default
        this.PersonAge = 0;
    }

}
 var p1 = new Player();
p1.personName = "Abd";     // ✅ correct
p1.PersonAge = 1;          // ✅ correct

console.log(p1.personName);           // Output: Player { personName: 'Abd', PersonAge: 1 }
