const html ='{"titleText":"请选择需要使用时长","List":[{"ID":"'+''+'","Text1":"1分钟","Text2":"¥","Text3":"0.5元","Money":50,"Type":"1","Unit":"0001","MoneySend":"000050","L":"001","NumTime":"010"},{"ID":"List2","Text1":"2分钟","Text2":"¥","Text3":"1元","Money":100,"Type":"1","Unit":"0002","MoneySend":"000100","L":"002","NumTime":"010"},{"ID":"List3","Text1":"3分钟","Text2":"¥","Text3":"1.5元","Money":150,"Type":"1","Unit":"0003","MoneySend":"000150","L":"003","NumTime":"010"},{"ID":"List4","Text1":"4分钟","Text2":"¥","Text3":"2元","Money":200,"Type":"1","Unit":"0004","MoneySend":"000200","L":"004","NumTime":"010"}],"ListNow":"List0","Money":1,"backgroundcolor":"#FFFFFF","Remark":"注：购买后无法取消，如果遇到故障请联系客服"}';

module.exports = (req, res) => {
    res.send(html);
};
