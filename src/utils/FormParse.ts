class FormParse{

    static parseToObject(form: HTMLFormElement): object {
        let formData = new FormData(form);
        let keys = formData.keys();
        let obj = {}
        for(let key of keys){
            obj[key]= formData.get(key);
        }
        return obj;
    }

    static parseToFormData(form:HTMLFormElement):FormData{
        let formData = new FormData(form);
        return formData;
    }
}

export { FormParse };