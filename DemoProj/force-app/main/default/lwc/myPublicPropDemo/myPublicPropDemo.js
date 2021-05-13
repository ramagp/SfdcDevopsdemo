import { LightningElement,api } from 'lwc';

export default class MyPublicPropDemo extends LightningElement {
    @api empName='test';
    @api dateofJoin='12th Jan';
}