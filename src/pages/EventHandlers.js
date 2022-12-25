import React from 'react';


class EventHandlers extends React.Component {
    state = {
        customer: [
            {customerId: 1001, customerName: "joseph_j", customerEmail: "joseph_j@gmail.com", customertatus: "active"}, 

            {customerId: 5683, customerName: "aws", customerEmail: "aws@gmail.com", customertatus: "inactive"}, 

            {customerId: 1278, customerName: "steve_s", customerEmail: "steve_s@gmail.com", customertatus: "inactive"}, 

            {customerId: 3489, customerName: "john_n", customerEmail: "john_n@gmail.com", customertatus: "active"}
        ], 
        showcustomer: true
    };

   customerToggle = () => {
        let doesShow = this.state.showcustomer;
        this.setState({
            showcustomer: !doesShow
        })
    }

    updatecustomer = (customerId, customerName, customerEmail, customertatus) => {
        this.setState({
            customer: [
                {customerId: 4301, customerName: "jo_o", customerEmail: "jo_o@gmail.com", customertatus: "inactive"}, 
    
                {customerId: customerId, customerName: customerName, customerEmail: customerEmail, customertatus: customertatus}, 
    
                {customerId: 4637, customerName: "jo_j", customerEmail: "jo_j@gmail.com", customertatus: "active"}
            ],  
        })
    }


    render() {
        let customer = null;
        if(this.state.showcustomer) {
            customer = (<div className='row'>{this.state.customer.map((customer, index) => {return(<div className='col-4'>
            <customer customerId = {customer.customerId} customerName = {customer.customerName} customerEmail = {customer.customerEmail} customertatus = {customer.customertatus} customerUpdate = {() => this.updatecustomer(5334, "java", "java@gmail.com", "active")} />
        </div>)})}
        </div>);
        } else {
            customer = (<div className='row'>
            <div className='col-12'>
                <p>sorry! we don't have any customer data!!</p>
                <p>We are now serving the angles.We will be back to serve humans shortly</p>
            </div>
        </div>);
        }
       
      /*  updatecustomerbind = () => {
            let doesShow = this.state.showcustomer;
            this.setState({
                showcustomer: !doesShow
            })
        }
    
        updatecustomerbind = (customerId, customerName, customerEmail, customertatus) => {
            this.setState({
                customer: [
                    {customerId: 4301, customerName: "jo_o", customerEmail: "jo_o@gmail.com", customertatus: "active"}, 
        
                    {customerId: customerId, customerName: customerName, customerEmail: customerEmail, customertatus: customertatus}, 
        
                    {customerId: 4637, customerName: "jo_j", customerEmail: "jo_j@gmail.com", customertatus: "active"}
                ],  
            })
        }
    
        render() ;{
            let customer = null;
            if(this.state.showcustomer) {
                customer = (<div className='row'>{this.state.customer.map((customer, index) => {return(<div className='col-4'>
                <customer customerId = {customer.customerId} customerName = {customer.customerName} customerEmail = {customer.customerEmail} customertatus = {customer.customertatus} customerUpdate = {() => this.updatecustomerbind(5334, "java", "java@gmail.com", "active")} />
            </div>)})}
            </div>);
            } else {
                customer = (<div className='row'>
                <div className='col-12'>
                    <p>We are now serving the angles.We will be back to serve humans shortly</p>
                </div>
            </div>);
            }
      */  
       
        return(
            <div className="row">
                <div className="col-sm-12 main__content">
                    <h3>Main Content Area :: Customer Information</h3>
                    
                <hr />

                <button type='button' className='btn btn-info mb-3 me-3' onClick={this.customerToggle}> show / hide </button>

                <button type='button' className='btn btn-info mb-3 me-3' onClick={this.updatecustomer.bind(this, 7456, "comrade", "comrade@gmail.com", "active")}> update customer data </button>

                <hr />

                {/* customer */}
                {customer}
                
            </div>
        </div>
        );
    }
}

export default EventHandlers;