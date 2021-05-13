import { LightningElement } from 'lwc';

export default class MySetGetDemo extends LightningElement {
    defaultMsg = "We are learning ";
    outputMessage='';
 
       
    get message(){
        return this.defaultMsg + " LWC";
         
    }
 
    set message(val){
       this.outputMessage = val;
    }
 
    handleMessage(event){
        this.message = event.target.value;
    }
}