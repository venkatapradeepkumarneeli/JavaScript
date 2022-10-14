class resourceCaller {
    constructor(url){
        this.url=url;
    }
    async getvals(){
        try {
            const response = await fetch(this.url);
            return await response.json();
        } catch (error) {
            return console.warn(error);
        }
    }
}

class resourceCallerChild extends resourceCaller
{
    constructor(url){
        super(url);
    }
    async mappedfunction(){
        const result1 = await super.getvals().then(response => response);
        var container = document.getElementById("demo1");
        for(let i=0;i<result1.data.length;i++)
        {
        var p = document.createElement("p");    
        p.innerHTML = 'id: ' + result1.data[i].id +
                    '<br> Name: ' + result1.data[i].first_name + ' ' + result1.data[i].last_name +
                    '<br> Email: '+ result1.data[i].email;
        container.appendChild(p);
        }
    }
}
recall = new resourceCallerChild('https://reqres.in/api/users');
recall.mappedfunction();