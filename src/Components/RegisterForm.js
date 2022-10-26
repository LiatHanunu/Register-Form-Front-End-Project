import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import { useState } from 'react';
import TextInput from './TextInput';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import validate from '../validations';

export default function RegisterForm() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName:
        {
            name: "First Name",
            value: "",
            errors: [],
            validations: {
                required: true,
                minLength: 2,
                maxLength: 15
            }
        },
        lastName:
        {
            name: "Last Name",
            value: "",
            errors: [],
            validations: {
                required: true,
                minLength: 2,
                maxLength: 15
            }
        },
        email: {
            name: "Email",
            value: "",
            errors: [],
            validations: {
                pattern: { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, error: ["Email is not valid"] },
                required: true
            }
        },
        birthdate: {
            name: "Birthdate",
            value: "",
            errors: [],
            validations: {
                required: true,
                minAge: 10
            }
        },
        gender: {
            name: "Gender",
            value: "",
            errors: [],
            validations: {
                required: true
            }
        },
        password: {
            name: "Password",
            value: "",
            errors: [],
            validations: {
                required: true,
                pattern: { pattern: /\d\w/, error: ["password must contain numbers", "password must conatain characters"] },
                minLength: 8
            }
        },
        confirmPassword: {
            name: "Confirm Password",
            value: "",
            errors: [],
            validations: {
                required: true,
                samePassword: ""
            }

        }
    })



    async function handleSubmit(event) {
        event.preventDefault();
        let canValidate = true
        for (const input in user) {
            const currInput = user[input]
            currInput.errors = validate(currInput.name, currInput.value, currInput.validations)
            if (currInput.errors.length !== 0) {
                canValidate = false
            }
        }
        setUser({ ...user })
        if (canValidate) {
            
        }
    };

    const handelChange = ({ target: { name, value } }) => {
        if (name === "password") {
            user.confirmPassword.validations.samePassword = value
        }
        user[name].value = value
        user[name].errors = validate(user[name].name, value, user[name].validations)
        setUser({ ...user })
    }



    return (
        <Container className="d-flex justify-content-center p-5">
            <Col lg={8} xs={12}>
                <Form className='rounded border p-3 m-2 bg-light'>
                    <h3>Register</h3>
                    <hr></hr>
                    <Row>
                        <TextInput
                            handelChange={handelChange}
                            validate={user.firstName.errors.length == 0}
                            label={"First Name"}
                            type={"text"}
                            name={"firstName"}
                            error={user.firstName.errors}
                            placeholder="Enter First Name"
                            sizeXS={""}
                            sizeLG={""}>
                        </TextInput>

                        <TextInput
                            handelChange={handelChange}
                            validate={user.lastName.errors.length == 0}
                            label={"Last Name"}
                            type={"text"}
                            name={"lastName"}
                            error={user.lastName.errors}
                            placeholder="Enter Last Name"
                            sizeXS={""}
                            sizeLG={""}>
                        </TextInput>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Birth Date</Form.Label>
                                <Form.Control name='birthdate' onBlur={handelChange} type="date" />
                                <Form.Text className='error'>
                                    {user.birthdate.errors.map((error, index) => <li key={index}>{error}</li>)}
                                </Form.Text>
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Label>Gender</Form.Label>
                            <Form.Group className="mb-3">
                                {["Female", "Male", "Other"].map((radio, index) => <Form.Check key={index} onBlur={handelChange} name="gender" inline type="radio" label={radio} value={radio} />)}
                            </Form.Group>
                            <Form.Text className='error'>
                               {user.gender.errors.map((error, index) => <li key={index}>{error}</li>)}
                            </Form.Text>
                        </Col>
                    </Row>
                    <Row>
                        <TextInput
                            handelChange={handelChange}
                            validate={user.email.errors.length == 0}
                            label={"Email"} name={"email"}
                            type={"Email"}
                            error={user.email.errors || "hi"}
                            placeholder="enter email"
                            sizeXS={"12"}
                            sizeLG={""}>
                        </TextInput>

                    </Row>

                    <TextInput
                        handelChange={handelChange}
                        validate={user.password.errors.length == 0}
                        label={"Password"}
                        type={"password"}
                        name={"password"}
                        error={user.password.errors}
                        placeholder="password"
                        sizeXS={""}
                        sizeLG={""}>
                    </TextInput>

                    <TextInput
                        handelChange={handelChange}
                        validate={user.confirmPassword.errors.length == 0}
                        label={"Confirm Password"}
                        type={"password"}
                        name={"confirmPassword"}
                        error={user.confirmPassword.errors}
                        placeholder="password"
                        sizeXS={""}
                        sizeLG={""}>
                    </TextInput>
                    <Form.Group className='d-flex flex-row-reverse'>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Register
                        </Button>
                    </Form.Group>
                    <hr></hr>
                </Form>
            </Col>
        </Container>

    )
    
}

