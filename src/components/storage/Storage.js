import './storage.scss';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Storage extends Component{ 
    constructor(props) {
        super(props);
        this.state = {storage:[],
                    //  keys: Object.keys(localStorage).length
        };
        this.RemoveFromLocal = this.RemoveFromLocal.bind(this);
      }

      RemoveFromLocal(e){
        localStorage.removeItem(e.target.value);
        let values = [],
          keys = Object.keys(localStorage),
          i = keys.length;
          while ( i-- ) {
          values.push(JSON.parse(localStorage.getItem(keys[i])));
          this.setState({storage: values})
          }
      }

      componentDidMount(){
        let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        while ( i-- ) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
        this.setState({storage: values})
        }
      }

   /*   componentDidUpdate(prevProps, prevState) {
        if(prevState.keys != this.state.keys ){
          let values = [],
          keys = Object.keys(localStorage),
          i = keys.length;
          while ( i-- ) {
          values.push(JSON.parse(localStorage.getItem(keys[i])));
          this.setState({storage: values})
          }
        }
      }*/
      
    render(){
        let tableBody = this.state.storage.map((item, index)=>
        <tr key={index}>
         <td>{item[0].domain}</td>
         <td>{item[0].country}</td>
         <td>{item[0].create_date}</td>
         <td>{item[0].A[0]}</td>
         <td>{item[0].NS[0]}</td>
         <td>{item[0].CNAME[0]}</td>
         <td>
            <Button onClick={this.RemoveFromLocal} value={item[0].domain} variant="btn btn-primary"><FontAwesomeIcon icon="trash"/></Button>
         </td>
        </tr> )
        return(
                <Container fluid>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Domain Name</th>
                        <th>Country</th>
                        <th>Registration Date</th>
                        <th>A</th>
                        <th>NS</th>
                        <th>CNAME</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                      {tableBody}
                    </tbody>
                </Table>
                </Container>
        )
    }
 }

 export default Storage;