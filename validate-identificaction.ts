function validate_id(identification: string) {
  let id:string = identification.replace(/-/g,'');
  let tmpidentification:string = id.substr(0, id.length - 1);
  let checker:string = id.substr(id.length - 1, 1);
  let addition: number = 0;

  if(identification.length < 11){
    return false;
  }

  for (let i = 0; i < tmpidentification.length; i++ ){
    let mod: number = 0;
    if( ( i % 2) === 0 ){
      mod = 1;
    } else {
      mod = 2;
    }

    let res: any;
    res =  Number(tmpidentification.substr(i,1)) * mod;
    if (res > 9) {
      let one: any;
      let two: any;
      res = res.toString();
      one = res.substr(0,1);
      two = res.substr(1,1);
      res = (Number(one) + Number(two));
    }
    addition += Number(res);
  }

  let theNumber:number  = (10 - (addition % 10)) % 10;
  let num: any = theNumber.toString();

  if (num === checker && tmpidentification.substr(0,3) !== "000") {
      return true;
  } else {
      return false;
  }

}

validate_id("");
