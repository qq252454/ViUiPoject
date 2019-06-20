;
ViUi.ajax = function () {
    var xml = new XMLHttpRequest();
    var t;

    function get_ajax(url) {
        xml.open('get', url);
        xml.setRequestHeader("Method", "GET");
        xml.setRequestHeader("Content_Type", "application/json");
        xml.setRequestHeader("Accept-Encoding", "gzip, deflate, br");
        xml.send();
        if (xml.status === 200 && xml.readyState === 4) {
            t = xml.responseText;
        }
        return t;
    }

    function ajax(url, data, method, success) {
        if (method === 'get') {
            if(data){
                url += '?';
                url += data;
            }else{
                throw new Error("null");
            }
            xml.open(method,url);
            xml.send();
        }else{
            xml.open(method,url);
            xml.setRequestHeader("Method", "GET");
            xml.setRequestHeader("Content_Type", "application/json");
            xml.setRequestHeader("Accept-Encoding", "gzip, deflate, br");
            if(data){
                xml.send(data);
            }else{
                xml.send();
            }
        }
        xml.onreadystatechange = function(){
            if(xml.readyState === 4 && xml.status === 200){
                success(xml.responseText);
            }
        }
    }
};

//loading效果，随便写一个
ViUi.ui_loader = function(){

};