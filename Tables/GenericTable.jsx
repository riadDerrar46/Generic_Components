import React from 'react';
import Table from 'react-bootstrap/Table';

const GenericTable = (props) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                {props.headers.map(title=>
                <th> {title} </th>
                )}
                </tr>
            </thead>
            <tbody>  
                { props.data.map(function(detail){   
                    const onlyValues =Object.keys(detail).map(function(key) {return detail[key];});
                    const res = onlyValues.map((val) => <td>{val}</td> );

                    return <tr> {res} </tr>
                }
     
                )

                }
            
            
             </tbody>   
         
        </Table>
    );
};

export default GenericTable;