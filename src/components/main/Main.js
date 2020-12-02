import'./main.scss'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, {Component} from 'react';


class Main extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            domainData:[],
            message:"Please fill domain name in search field "
        }
        this.SaveToLocal = this.SaveToLocal.bind(this);
    }

        SaveToLocal() {
            let storage;
            storage  = localStorage.setItem(this.state.domainData[0].domain, JSON.stringify(this.state.domainData));
        }

      

        componentDidMount() {
        if(this.props.search != " "){    
        let path = this.props.search
        fetch("https://api.domainsdb.info/v1/domains/search?domain=" + path)
            .then(response => response.json())
            .then(
                data=>{
                    if(data.domains != undefined){
                        let res = data.domains.slice(0,1)
                        res[0].create_date = CheckForNull(res[0].create_date);
                        res[0].country = CheckForNull(res[0].country);
                        res[0].CNAME = CheckForNull(res[0].CNAME);
                        res[0].A = CheckForNull(res[0].A);
                        res[0].NS = CheckForNull(res[0].NS);
                        console.log();
                        this.setState({domainData: res} )
                    }
                    this.setState({message: "No data found"})
                }
            )
        }
    }

   render() {
       console.log("Main" + this.props.search); 
       if(this.state.domainData.length != 0 && this.props.search != " "){                    
        return(
            <Container fluid>
                <div>
                    <div>Domain Name: {this.state.domainData[0].domain}</div>
                    <div>Country: {this.state.domainData[0].country}</div>
                    <div>Registration Date:{this.state.domainData[0].create_date.slice(0,10)}</div>
                    <div>A: {this.state.domainData[0].A[0]}</div>
                    <div>NS: {this.state.domainData[0].NS[0]}</div>
                    <div>CNAME: {this.state.domainData[0].CNAME[0]}</div>
                </div>
                <Button onClick={this.SaveToLocal}  variant="btn btn-primary">Save</Button>
            </Container>
        )
        }
        return(
            <Container fluid>
                    <div>{this.state.message}</div>
            </Container>
        )
    }
}

function CheckForNull(data){
    if(data === null){
        data = "no data"
    }
    return data
}




export default Main;

