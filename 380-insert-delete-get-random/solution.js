class RandomizedSet {
    constructor() {
        this.list = [];
        this.map = new Map();
    }

    insert(value) {
        if(this.search(value)) return false;

        this.list.push(value);
        this.map.set(value, this.list.length - 1);
        return true;
    }

    remove(value) {
        if(!this.search(value)) return false;

        const index = this.map.get(value);
        this.list[index] = this.list[this.list.length - 1];
        this.map.set(this.list[index], index);
        this.list.pop();
        this.map.delete(value);
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }

    search(value) {
        return this.map.has(value);
    }
}