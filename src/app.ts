import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('.item-list')! as HTMLUListElement;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, detail.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, detail.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});
