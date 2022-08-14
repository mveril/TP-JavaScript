export class Counter{
  constructor(element){
    this.element = element;
    this.initialvalue = Number.parseInt(element.innerText);
  }
  get value(){
    return Number.parseInt(this.element.innerText);
  }
  set value(value){
    this.element.innerText = value;
    this.updateNumberType();
  }
  updateNumberType(){
    let numberType="";
    if (this.value>0) {
      numberType="positive";
    } else if(this.value<0){
      numberType="negative";
    } else{
      numberType="null";
    }
    this.element.setAttribute("data-numberType",numberType);
  }
  reset(){
    this.value=this.initialvalue;
  }
  increase(){
    this.value+=1;
  }
  decrease(){
    this.value-=1;
  }
}