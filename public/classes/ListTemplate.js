export class ListTemplate {
    constructor(container) {
        this.container = container;
        this.container = container;
    }
    render(item, heading, position) {
        // Create an li element.
        const li = document.createElement('li');
        // Add the heading to the li element.
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        // Add the  p and the item to the li element.
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        // determine where to add the item.
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.appendChild(li);
        }
    }
}
