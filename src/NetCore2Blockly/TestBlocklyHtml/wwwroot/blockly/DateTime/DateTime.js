﻿/*
 * Block that convert a UNIX timestamp into a date format 
 * @Author: Popescu Ionut Cosmin (cosmin.popescu93@gmail.com)
 * https://github.com/cosminpopescu14
 */
Blockly.Blocks['fromUnixTimeToDate'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Number')
            .appendField('Date representation of');
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip('Convert to unix timestamp into a date.');
        this.setHelpUrl('https://www.w3schools.com/jsref/jsref_obj_date.asp');

    }
}

Blockly.JavaScript['fromUnixTimeToDate'] = block => {
    let data = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    let code = 'convertToDate(' + data + ')';
    //return code;
    return [code, Blockly.JavaScript.ORDER_NONE];
}

const convertToDate = data => {
    console.log("in convertToDate ");
    let dateConverted = new Date(data * 1000).toLocaleDateString();
    console.log(dateConverted);
    return dateConverted;
}