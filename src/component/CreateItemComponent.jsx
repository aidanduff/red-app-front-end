import React, { Component } from 'react';
import ItemDataService from '../service/ItemDataService';
import { ErrorMessage, Formik, Form, Field } from 'formik';

class CreateItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            description: ''
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }

    componentDidMount(){
        this.setState({
                id: '',
                name: '',
                description: ''
        });
    }

    onSubmit(values) {
        let item = {
            name: values.name,
            description: values.description,
            targetDate: values.targetDate
        }

        ItemDataService.createItem(item)
            .then(() => this.props.history.push('/items'))
        
        console.log(values);
    }

    validate(values){
        let errors= {};

        if(!values.name){
            errors.description = 'Enter a name'
        }
        if(!values.description){
            errors.description = 'Enter a description'
        } else if(values.description.length < 5){
            errors.description = 'Enter at least 5 characters in the description'
        }

        return errors;
    }

    render() {
        let {id, name, description} = this.state;

        return (
            <div>
                <h3>Create Item</h3>
                <div className="container">
                    <Formik 
                        initialValues={{id, name, description }}
                        onSubmit= {this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description"               component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="name"                   component="div"
                                        className="alert alert-warning" />
                                    {/* <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset> */}
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
    
                </div>
            </div>
        )
    }

}

export default CreateItemComponent