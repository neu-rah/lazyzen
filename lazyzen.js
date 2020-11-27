"use strict";
//neu-rah, Nov2020

const $$=f=>o=>{
  if(o!==undefined) {
    return new Proxy($$(()=>{
      var fr=f();
      if(typeof fr!=="function") return fr
      return fr(o);
    }),{
      get: function(target, name, receiver) {
        if(name==="valueOf") return ()=>target().valueOf()
        const r=target()[name]
        return typeof r==="function"?$(o=>r(o)):r
      }
    })
  }
  return f();
}

exports.lazy=o=>$$(()=>o)
