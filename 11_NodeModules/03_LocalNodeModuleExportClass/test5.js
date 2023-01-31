module.exports = function(first, last){
    this.first = first;
    this.last = last;
    this.newMod = 'Hello';
    this.myName = function(){
        return `${'Hello'} ${this.first} ${this.last}`;
    }
}