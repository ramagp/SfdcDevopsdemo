import { LightningElement } from 'lwc';
import { demoFunction1,demoFunction2} from 'c/myUtilsDemo';
export default class MyShareJsDemo extends LightningElement {
checkType1() {
        
    var	result = demoFunction1();
    alert(result);

}
checkType2() {

    var	result = demoFunction2();
    alert(result);	

}
}