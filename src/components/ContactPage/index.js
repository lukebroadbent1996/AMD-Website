import React from 'react'

import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormH2,
    FormLabel,
    FormInput,
    FormButton,
    Icon
} from './ContactElements'

const ContactPage = () => {
  return (
   <>
   <Container>
       <FormWrap>
           <Icon to='/'>AMD Groundworks</Icon>
           <FormContent>
               <Form>
                   <FormH1>Contact us now</FormH1>
                   <FormH2>Or Ring us on 01457 835948</FormH2>
                   <FormLabel htmlFor='for'>Name</FormLabel>
                   <FormInput type='text' required />
                   <FormLabel htmlFor='for'>Email</FormLabel>
                   <FormInput type='email' required />
                   <FormLabel htmlFor='for'>Number</FormLabel>
                   <FormInput type='tel' required />
                   <FormLabel htmlFor='for'>Query</FormLabel>
                   <FormInput type='text' required />
                   <FormButton type='submit'>Send</FormButton>
               </Form>
           </FormContent>
       </FormWrap>
   </Container>
   </>
  )
}

export default ContactPage