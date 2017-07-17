import React from 'react'
import ReactDomServer from 'react-dom/server'
import Head from './Head'
import Foot from './Foot'
import Img from './Img'

class Main extends React.Component{
    render(){
        return(
            <div>
            <Head/>
                <Img/>
            <Foot/>
            </div>
        )
    }
}

export default ReactDomServer.renderToString(<Main/>)