import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/vaadin-integer-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-button';

import '@vaadin/vaadin-item';

import '@vaadin/vaadin-notification';
// Tabs
import '@vaadin/vaadin-tabs';

import '@vaadin/vaadin-details';

// Layouts
import '@vaadin/vaadin-ordered-layout';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js';

// Wrapper Classes

class CluidUiNotificationWrapper extends HTMLElement {

    get message() {
        return this.getAttribute("text");
    }

    get duration() {
        return this.getAttribute("duration");
    }

    get position() {
        return this.getAttribute("position");
    }

    get isOpen() {
        return this.getAttribute("isOpen");
    }



    connectedCallback() {
        this.attachShadow({ mode: 'open' }); // ?
        
        const template = document.createElement("template");
        const content = document.createElement("div");
        content.innerText = this.message;
        template.appendChild(content);
        
       const contentnode = document.importNode(template.firstChild,true);
        
        const notification = document.createElement("vaadin-notification");
        //notification.template = template;
        notification.duration = this.duration;
        notification.position = this.position;
        notification.renderer = function(root) {
            console.log(contentnode);
            //root.textContent = 'This notification is shown in the top right corner';
            root.appendChild(contentnode);
          };

        this.shadowRoot.appendChild(notification);

        if (this.isOpen) {
            notification.open();
        }
       
    }

    disconnectedCallback() {
        console.log("cloudui-notification-wrapper disconnecetCallback called");
    }
}

customElements.define('cloudui-notification-wrapper', CluidUiNotificationWrapper);
