class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    let maxValue = this.items[0];
    if (this.length != 0) {
      for (let i = 1; i < this.length; i++) {
        if (this.items[i] > maxValue) {
          maxValue = this.items[i];
        }
      }
      return maxValue;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length != 0) {
      let minValue = this.items[0];
      for (let i = 1; i < this.length; i++) {
        if (this.items[i] < minValue) {
          maxValue = this.items[i];
        }
      }
      return minValue;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
