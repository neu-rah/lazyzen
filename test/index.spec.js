const assert = require("assert");

const {lazy}=require("../lazyzen")
const ł=lazy

const id=ł(o=>o)

class O {
  constructor() {
    console.log("O construction")
    this.name="O"
  }
}

describe("Lazy",function() {
  it("lazy result",async ()=>{
    assert(typeof id(1)==="function")
  })
  it("explicit lazy expansion",async ()=>{
    assert(id(1)()===1)
  })
  it("inplicit lazy expansion",async ()=>{
    assert(id(1)*1===1)
  })
  // it("property access",async ()=>{
  //   assert(id(new O()).name==="O")
  // })
})