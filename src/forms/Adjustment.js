import React from 'react'
import {Formik,Form} from "formik";
export const Adjustment = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values,{setSubmitting}) => {
          handleSubmit(values,setSubmitting);
        }}
      >
        {({errors,setFieldValue,isSubmitting,setSubmitting,values,setValues,resetForm})=><Form>
          <AdjustmentFields
            values={values}
            setValues={setValues}
            isSubmitting={isSubmitting}
            setFieldValue={setFieldValue}
            setSubmitting={setSubmitting}
          />
        </Form>}
      </Formik>
    </div>
  )
}
