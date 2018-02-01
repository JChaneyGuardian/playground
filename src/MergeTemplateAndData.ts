import {debug} from "./debug";

export interface MergeTemplateAndDataOptions {
    openBracket? : string;
    closeBracket? : string;
    formatDelimiter? : string;
    recursive? : boolean;
}

export class MergeTemplateAndData {
    private openBracket : string;
    private closeBracket : string;
    private formatDelimiter : string;
    private recursive : boolean=false;
    private debug : boolean=true;

    public constructor( options : MergeTemplateAndDataOptions) {
        if (options) {
            this.openBracket = options.openBracket||"[";
            this.closeBracket = options.closeBracket||"]";
            this.formatDelimiter = options.formatDelimiter||"~";
            this.recursive = typeof(options.recursive) !== 'undefined'?options.recursive:this.recursive;
        }
    }

    public Merge = (template : string, data : any) : string => {
        let workingString = template;
        let startPos = workingString.indexOf(this.openBracket);
        debug(`startPos=${startPos}`)
        while (startPos > -1) {
            let endPos = workingString.indexOf(this.closeBracket, startPos);
            debug(`endPos=${endPos}`)
            if (endPos > -1) {
                let value = this.extractValue(workingString, data, startPos, endPos); 
                debug(`value='${value}'`)           
                value = workingString.substr(0, startPos) + value;
                if (!this.recursive) 
                    startPos = value.length;
                workingString = value +  workingString.substr(endPos+1);
            }
            else {
                //workingString = workingString.substr(0, startPos);
                throw Error("Missing closing bracket."+(this.debug?workingString:""))
            }
            startPos = workingString.indexOf(this.openBracket, startPos);
        }
    
        return workingString;
    }

    private extractValue(workingString : string, data : any, startPos : number, endPos : number) {
        let fieldName = workingString.substring(startPos+1, endPos);
        debug(`fieldName='${fieldName}'`);
        let format = "";

        let p = fieldName.indexOf(this.formatDelimiter);
        if (p > -1) {
            format = fieldName.substr(p+this.formatDelimiter.length);
            fieldName = fieldName.substr(0, p);
            debug(`fieldName='${fieldName}'    format='${format}'`);
        }

        debug(`"data='${JSON.stringify(data)}'`)
        let value = data[fieldName];
        debug(`"value='${value}'`)
        if (format) {
            if (format.substr(0,4).toLowerCase() === 'link') {
                let link = data[format.substr(5)];
                debug(`"link='${link}'`)
                value = `<a href="${link}">${value}</a>`;
            }
        }
        return value;
    }
}

