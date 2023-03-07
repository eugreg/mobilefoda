import { Component } from "react"
import { Button, Text, View,StyleSheet } from "react-native"

 export default class Couter extends Component{
        state = {
            count:0
        }
        incremetar(){
                
            this.setState({
                count: this.state.count +1
            })
        }
        decremetar(){
            if(this.state.count > this.props.min  ){
                this.setState({
                    count: this.state.count -1
                    
                })
            }
        }
     render(){
        return (<View style={Styles.contador}>

        <Text>Contador: {this.state.count}</Text>
        <Button onPress={()=> this.incremetar()} title="+"/>
        <Button onPress={()=> this.decremetar()} title="-"/>
        </View>
        
        )
     }


 }
 const Styles = StyleSheet.create({
    contador:{
        flexDirection: 'row',
        alignItems:
         'center',
    }
 })