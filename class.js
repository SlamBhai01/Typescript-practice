var Player = /** @class */ (function () {
    function Player() {
        this.personName = ""; // default
        this.PersonAge = 0;
    }
    return Player;
}());
var p1 = new Player();
p1.personName = "Abd"; // ✅ correct
p1.PersonAge = 1; // ✅ correct
console.log(p1.personName); // Output: Player { personName: 'Abd', PersonAge: 1 }
