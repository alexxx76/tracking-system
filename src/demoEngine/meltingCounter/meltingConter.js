const melting = {
  number: 2200,

  next() {
    const result = this.number + 25;
    this.number = result;
    return result.toString();
  }
};

export default {
  next: melting.next.bind(melting)
};