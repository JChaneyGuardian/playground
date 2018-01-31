import {debug} from "./debug";

export class Event {
    private event : any;
    private body : any=undefined;

    public constructor(event : any) {
        this.event = event;
    }

    private getBody = () : any => {
        if (typeof(this.body)==="undefined") {
            if (typeof(this.event.body)==="object") {
                this.body = this.event.body;
            }
            else if (typeof(this.event.body)==="string") {
                this.body = JSON.parse(this.event.body);
                debug("parsed body into " + this.body);
            }
            else {
                this.body = { value : this.event.body};
            }
            debug("template = " + this.body.template);
        }
        else {
            this.body = {};
            debug("body not found");
        }

        return this.body;
    }

    public getParameter = (parameterName : string, defaultValue? : any) : any => {
        let value = defaultValue||"";
        let body = this.getBody();

        if (body[parameterName]) {
            value = body[parameterName];
            debug(`Value of ${parameterName} from body=${value}`);
            debug(value);
        }
        else if (this.event.queryStringParameters && this.event.queryStringParameters[parameterName]) {
            value = this.event.queryStringParameters[parameterName];
            debug(`Value of ${parameterName} from query=${value}`);
        }
        else {
            value = this.event[parameterName];
            debug(`Value of ${parameterName} from event=${value}`);
        }

        
        if (typeof(value)!=="undefined")
            return value;
        if (typeof(defaultValue)!=="undefined")
            return defaultValue;
        throw new Error(`Parameter '${parameterName}' was not found`);
    }
}