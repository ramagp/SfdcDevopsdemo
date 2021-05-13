import { LightningElement } from 'lwc';

export default class MyJspropDemo extends LightningElement {
    fname='John';
    lname ='Doe';

    handleChange(event) {
        const field = event.target.name;
				
        if (field === 'firstname') {
						
            this.fname = event.target.value;
        } else if (field === 'lastname') { 
						
            this.lname = event.target.value;
        }
    }
}