export class BasicQuestion<T> {
    value:T;
    key:string;
    type:string;
    label:string;
    required:boolean;
  constructor(options:{
    value?:T;
    key?:string;
    type?:string;
    label?:string;
    required?:boolean;
  } = {}){
    this.value = value||'';
    this.key = key||'';
    this.type = type||'';
    this.label = label||'';
    this.required = required||false;
  }
}