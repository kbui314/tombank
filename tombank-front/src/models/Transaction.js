export default class Transaction {
  constructor(id, fromAcc, toAcc, transType, value, createAt, updatedAt) {
    this.id = id;
    this.fromAcc = fromAcc;
    this.toAcc = toAcc;
    this.transType = transType;
    this.value = value;
    this.createAt = createAt;
    this.updatedAt = updatedAt;
  }
}
