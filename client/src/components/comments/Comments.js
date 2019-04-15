import React, { Component, Fragment } from 'react';
import { InputGroup, InputGroupAddon, FormInput, Button} from "shards-react";
import { Text } from '../styled-components';

class Comments extends Component {
    render() { 
        return (
            <Fragment>
                <Text>Comments</Text>
                <InputGroup>
                    <FormInput placeholder="Leave a Comment" />
                    <InputGroupAddon type="append">
                        <Button>Send</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Fragment>
        );
    }
}
 
export default Comments;