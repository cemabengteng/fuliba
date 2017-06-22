var React = require("react");
var ReactDomServer = require("react-dom/server");

class Img extends React.Component{
    render(){
        // return <img width=200 height=200 src='https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=3079521078cf3bc7f700caeee101babd/f636afc379310a55e46970e9bf4543a982261059.jpg'/>;
        
        return <div>hello man</div>;
    }
    
}

export default ReactDomServer.renderToString(<Img/>);