
(function(owner){
    Vue.use(VueResource);
    Vue.http.options.emulateJSON = true;
    Vue.http.options.emulateHTTP = true;
    owner.post = function(url,params,success,error){
        Vue.http.post('http://cummins.ueepub.com/'+url,params)
            .then(success,error)
    };
    owner.get = function(url,params,success,error){
        Vue.http.get('http://cummins.ueepub.com/'+url,{params:params})
            .then(success,error)
    };


}(window.http = {}));