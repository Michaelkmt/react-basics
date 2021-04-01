
const nameArray = ['Mikail','Enes','Ahmet','Tamer'];
const elementsHtml = [<h2 key="1">Congrats</h2>,<h3 key="2">React is awesome.</h3>];


class HelloMessage extends React.Component{
    
    render(){
        return (


            
            <div>
                <h1>Hello from Component</h1>
                <h1>Hello World!</h1>
                <HelloNames nameArr={nameArray}/>

                <div>
                    {this.props.arr}
                </div>

        {/* <div>
        {elementsHtml}
        </div> */} 
        
            </div>

       )
    }
}

class HelloNames extends React.Component{

    static propTypes = { nameArr: PropTypes.array.isRequired }; 

render(){
    return (

        <div>
        
            <NoteList secondName={this.props.nameArr.map(function(element,item){

console.log(item,element)

 return <p key={item}>{element}</p>
})}/>

</div>
       
)
}
    
}


class NoteList extends React.Component{
    render(){

        return (

            <div>
                    <ol>
                {this.props.secondName.map((element,item) => {
                    console.log(item,element)

                    return <li key={item} className={item === 0 ? 'first' : item === 1 ? 'second' : item === 2 ? 'third' : ''}>{element}</li>

                })}

                    </ol>
            </div>
    
           )
    }
        
}





function App() {
return (
    <div>
        <HelloMessage arr={elementsHtml}/>
        <h2>Hello from App Function</h2>
    </div>
)

}

ReactDOM.render(

    <div>
    
    <App />

</div>,

    document.getElementById('root')

)







