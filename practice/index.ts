  function getString(arr: any[]):string[] {
    return arr.filter(item => typeof item === 'string')
  }
  console.log(getString(['hi',23,true,{name:'dk'},'hello']));
  